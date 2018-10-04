const crypto = require('crypto');
const parseString = require('xml2js').parseString;
const https = require('https');
const httpsPromise = (url) =>
  new Promise(resolve => {
    https.get(url, resolve);
  });

let searchAmazon = async (req, res) => {
  let timeStamp = new Date();
  let params = {
    AWSAccessKeyId: process.env.AWS_ACCESS_KEY_ID,
    AssociateTag: 'nybblr08-20',
    Keywords: req.query.q,
    Operation: 'ItemSearch',
    ResponseGroup: 'Images,Small,OfferSummary',
    SearchIndex: 'All',
    Service: 'AWSECommerceService',
    Timestamp: timeStamp.toISOString()
  };
  let paramString = Object.entries(params).sort().reduce((acc, cur) => `${acc}${cur[0]}=${encodeURIComponent(cur[1])}&`, '').slice(0,-1);
  let stringToSign = `GET\nwebservices.amazon.com\n/onca/xml\n${paramString}`;
  let signature = crypto.createHmac('sha256', process.env.AWS_SECRET).update(stringToSign).digest('base64');
  signature = encodeURIComponent(signature);
  paramString += `&Signature=${signature}`;
  let amazonRes = await httpsPromise(`https://webservices.amazon.com/onca/xml?${paramString}`);
  amazonRes.setEncoding('utf8');
  let data = '';
  amazonRes.on('data', chunk => {
    data += chunk;
  });
  amazonRes.on('end', () => {
    parseString(data, function (err, result) {
      try {
        let formattedData = [];
        result.ItemSearchResponse.Items[0].Item.forEach(item => {
          try { formattedData.push({
              ASIN: item.ASIN[0],
              image: item.MediumImage ? item.MediumImage[0].URL[0] : item.ImageSets[0].ImageSet[0].MediumImage[0].URL[0],
              title: item.ItemAttributes[0].Title[0],
              price: item.OfferSummary[0].LowestNewPrice[0].FormattedPrice[0]
            })
          }
          catch(error) {
            console.log(error);
          }
        });
        res.send({status: 'success', items: formattedData});
      }
      catch(error) {
        res.send({status: 'error'});
      }
    });
  });
};
module.exports = searchAmazon;