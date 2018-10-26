'use strict';
const path = require('path');
const fs = require('fs');
const merge = require('webpack-merge');
const easywebpack = require('easywebpack-vue');

exports.getVesFileConfig = baseDir => {
  const filepath = path.resolve(baseDir, 'config/ves.config.js');
  if (fs.existsSync(filepath)) {
    return require(filepath);
  }
  return {};
};

exports.getVesConfig = (options = {}) => {
  const { baseDir = process.cwd() } = options;
  const config = exports.getVesFileConfig(baseDir);
  return merge({
    baseDir,
    configured: true,
    egg: true,
    framework: 'vue',
    loaders: {
      typescript: true
    },
    plugins: {
      imagemini: false
    }
  }, config, options);
};

exports.getWebpackConfig = (options = {}) => {
  const vesConfig = exports.getVesConfig(options);
  return easywebpack.getWebpackConfig(vesConfig);
};