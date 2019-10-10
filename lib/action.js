'use strict';
const EasyCLI = require('@easy-team/easywebpack-cli');
const Command = require('egg-bin');
const ScriptCommand = require('egg-scripts');
const Config = require('./config');
module.exports = class VesAction extends EasyCLI.Action {

  constructor(command) {
    super(command);
  }

  initCustomizeConfig(options) {
    return Config.getVesConfig(options);
  }


  dev() {
    new Command(['dev', '-r', 'egg-ts-helper/register']).start();
  }

  debug() {
    new Command(['debug']).start();
  }

  test() {
    new Command(['test']).start();
  }

  cov() {
    new Command(['cov']).start();
  }

  start() {
    new ScriptCommand().start();
  }

  tsc(options) {
    const project = options.project;
    this.command.tool.exec(`tsc -p ${project}`);
  }

};