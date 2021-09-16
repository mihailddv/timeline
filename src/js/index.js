import AppVue from './app';

require('es6-promise').polyfill();
require('array.prototype.find').shim();
require('isomorphic-fetch');
require('nodelist-foreach-polyfill');

AppVue();
