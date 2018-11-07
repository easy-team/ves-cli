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
  const baseConfig = {
    baseDir,
    egg: true,
    configured: true,
    framework: 'vue',
    buildPath: 'app/public',
    loaders: {
      tslint: false,
      babel: false,
      typescript: true
    },
    plugins: {
      imagemini: false
    }
  };
  const config = exports.getVesFileConfig(baseDir);
  const assetpath = path.resolve(baseDir, 'app/web/asset');
  if (fs.existsSync(assetpath)) {
    baseConfig.plugins.copy = [{
      from: 'app/web/asset',
      to: 'asset'
    }];
  }
  return merge(baseConfig, config, options);
};

exports.getWebpackConfig = (options = {}) => {
  const vesConfig = exports.getVesConfig(options);
  return easywebpack.getWebpackConfig(vesConfig);
};