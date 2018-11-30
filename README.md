Website NEJD [![Build Status](https://travis-ci.com/Voles/website-nejd.svg?branch=master)](https://travis-ci.com/Voles/website-nejd)
============

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Benodigdheden

**GraphicsMagick**

`brew install GraphicsMagick`

## Nieuwe afbeelding toevoegen

Kan in `/responsive-images/<naam-project>/<naam-afbeelding>.jpg`.
Momenteel is er alleen ondersteuning voor JPG-bestanden.

Na het toevoegen moet je opnieuw de responsive images genereren.
Dat kan met behulp van `generate-responsive-images`.

## Deployen

$ git pull
$ npm install
$ npm run deploy
