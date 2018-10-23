'use strict';
const chalk = require('chalk');
exports.boilerplateChoice = [
  {
    name: `create ${chalk.green('ves')} ${chalk.green('single page application')}`,
    value: 'ves-admin',
    pkgName: 'ves-admin'
  },
  {
    name: `create ${chalk.green('ves')} ${chalk.green('multil page application')}`,
    value: 'ves-blog',
    pkgName: 'ves-blog'
  }
];

exports.boilerplateDetailChoice = {
};