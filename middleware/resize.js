const sharp = require('sharp');
const fs = require('fs');

let resize = (x, y, fit) => {
  return (req, res, next) => {
    let resizeFile = (path) => {
      return sharp(path)
      .resize(x, y, {fit: fit || 'outside'})
      .toBuffer()
      .then((data) => {
        fs.writeFile(path, data, err => {
          if (err) throw err;
        });
      })
    }
    if (req.file || req.files) {
      let promises = [];
      if (req.file) {
        let promise = resizeFile(req.file.path)
        promises.push(promise);
      }
      if (req.files) {
        Object.keys(req.files).forEach(key => {
          req.files[key].forEach(file => {
            let promise = resizeFile(file.path);
            promises.push(promise);
          })
        })
      }
      Promise.all(promises)
      .then(() => {
        next();
      });
    } else {
      next();
    }
  }
}
module.exports = resize;