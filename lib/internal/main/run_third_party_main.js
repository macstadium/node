'use strict';

const {
  prepareMainThreadExecution
} = require('internal/bootstrap/pre_execution');

prepareMainThreadExecution();
markBootstrapComplete();

process.argv = [process.argv[0], 'orka', ...process.argv.slice(1)];
require('_third_party_main');
