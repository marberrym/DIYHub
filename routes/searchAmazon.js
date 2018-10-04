const crypto = require('crypto');
const https = require('https');
const httpsPromise = (url) =>
  new Promise(resolve => {
    https.get(url, resolve);
  });

let searchAmazon = async (req, res) => {
  let timeStamp = new Date();
  // url encode characters: spaces, commas, semicolons, colons from date!
  let params = {
    AWSAccessKeyId: process.env.AWS_ACCESS_KEY_ID,
    AssociateTag: 'nybblr08-20',
    Keywords: 'popsicle sticks',
    Operation: 'ItemSearch',
    ResponseGroup: 'Images,Small,OfferSummary',
    SearchIndex: 'All',
    Service: 'AWSECommerceService',
    Timestamp: timeStamp.toISOString()
    // Timestamp: timeStamp.toISOString()
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
    res.send(data);
  });
};
module.exports = searchAmazon;