'use strict';
const path = require('path');
const Command = require('egg-bin');
const EasyCLI = require('easywebpack-cli');
const ScriptCommand = require('egg-scripts');

module.exports = class VesCommand extends EasyCLI.Command {

  constructor() {
    super();
    this.program.filename = path.resolve(__dirname, 'ves.config.js');
  }

  version() {
    const pkg = require(path.resolve(__dirname, '../package.json'));
    this.program.version(pkg.version);
  }

  init() {
    this.boilerplate = require('./ask');
    super.init();
  }

  dev() {
    this.program
      .command('dev')
      .description('start ves project for develoment mode')
      .action(() => {
        new Command(['dev', '-r', 'egg-ts-helper/register']).start();
      });
  }

  debug() {
    this.program
      .command('debug')
      .description('start ves project for develoment debug mode')
      .action(() => {
        new Command(['debug']).start();
      });
  }

  test() {
    this.program
      .command('test')
      .description('unit test')
      .action(() => {
        new Command(['test']).start();
      });
  }

  cov() {
    this.program
      .command('cov')
      .description('code cov')
      .action(() => {
        new Command(['cov']).start();
      });
  }

  start() {
    this.program
      .command('start')
      .description('start ves project for production mode')
      .action(() => {
        new ScriptCommand().start();
      });
  }
};