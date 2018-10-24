'use strict';
const path = require('path');
const EasyCLI = require('easywebpack-cli');
const Action = require('./action');

module.exports = class VesCommand extends EasyCLI.Command {

  constructor() {
    super();
    this.cmd = 'ves';
    this.context = path.resolve(__dirname, '..');
    this.program.filename = path.resolve(__dirname, 'ves.config.js');
    this.action = new Action(this);
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
        this.action.dev();
      });
  }

  start() {
    this.program
      .command('start')
      .description('start ves project for production mode')
      .action(() => {
        this.action.start();
      });
  }
};