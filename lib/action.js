'use strict';
const EasyCLI = require('easywebpack-cli');
const Command = require('egg-bin');
const ScriptCommand = require('egg-scripts');
module.exports = class VesAction extends EasyCLI.Action {

  build(env, options) {
    super.build(env, options);
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

};