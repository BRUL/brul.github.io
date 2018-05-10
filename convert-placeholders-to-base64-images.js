#!/usr/bin/env node

const Jimp = require('jimp');
const fs = require('fs');

const writeFile = (path, contents) => {
  return new Promise((resolve, reject) => {
    fs
      .writeFile(path, contents, err => {
        if (err) {
          reject(err);
        } else {
          resolve ();
        }
      });
  })
};

const imageToBase64 = path => {
  return Jimp
    .read(path)
    .then(function (lenna) {
      return new Promise((resolve, reject) => {
        lenna.getBase64(Jimp.AUTO, (err, result) => {
          if (err) {
            reject(err);
          }

          resolve(result);
        });
      })
    }).catch(function (err) {
      console.error(err);
    });
};

const images = [
  'folieadeux',
  'gloriette',
  'kolom',
  'still'
];

const result = images
  .map(name =>
    imageToBase64(`public/responsive-images/dist/${name}-placeholder.jpg`)
      .then(contents => {
        const jsFile = `export default '${contents}';`;
        return writeFile(`src/base64-images/${name}.js`, jsFile);
      })
  );

return Promise.all(result);
