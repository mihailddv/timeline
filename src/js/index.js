import timelinesVue from './timelines';

require('es6-promise').polyfill();
require('array.prototype.find').shim();
require('isomorphic-fetch');
require('nodelist-foreach-polyfill');

timelinesVue();
