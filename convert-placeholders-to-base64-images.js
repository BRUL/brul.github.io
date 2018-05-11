#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const Jimp = require('jimp');
const recursive = require('recursive-readdir');

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

const src = 'responsive-images';
const resultMap = {};

recursive(src, function (err, files) {
  const relativeFiles = files
    .map(file => path.relative(src, file))
    .map(file => removeExtention(file))
    .filter(file => filterEmpty(file));

  const result = relativeFiles
    .map(imageSrc =>
      imageToBase64(`public/responsive-images/${imageSrc}-placeholder.jpg`)
        .then(contents => {
          resultMap[imageSrc] = contents;
        })
    );

  return Promise.all(result)
    .then(() => {
      return writeFile(
        `src/base64-images/result.js`,
        `export default ${JSON.stringify(resultMap)}`
      );
    });
});

const removeExtention = path =>
  path.replace(/\.[^/.]+$/, '');

const filterEmpty = path =>
  path && path.length > 0;

