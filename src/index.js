'use strict';

const preset = require('neutrino-preset-react');
const path = require('path');
const merge = require('webpack-merge').smart;

const config = merge(preset, {
  eslint: {
    configFile: path.join(__dirname, 'eslint.js')
  }
});

module.exports = config;
