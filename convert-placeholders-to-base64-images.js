#!/usr/bin/env node

const Jimp = require('jimp');
const mkdirp = require('mkdirp');
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

const makeSureDirExists = path =>
  new Promise((resolve, reject) => {
    mkdirp(path, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });

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

const recursive = require('recursive-readdir');
const path = require('path');

const src = 'public/responsive-images/src';
const resultMap = {};
recursive(src, function (err, files) {
  const relativeFiles = files
    .map(file => path.relative(src, file))
    .map(file => removeExtention(file));

  const result = relativeFiles
    .map(imageSrc => {
      const projectName = path.dirname(imageSrc);
      return makeSureDirExists(`src/base64-images/${projectName}/`)
        .then(() => imageToBase64(`public/responsive-images/dist/${imageSrc}-placeholder.jpg`))
        .then(contents => {
          resultMap[imageSrc] = contents;
        })
    });

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

