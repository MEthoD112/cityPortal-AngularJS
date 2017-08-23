import angular from 'angular';
import './style/bootstrap.min.css';
import './style/screen.scss';
import jQuery from 'jquery';
global.jQuery = jQuery;
global.jquery = jQuery;
global.$ = jQuery;
require('bootstrap');

import appModule from './app/app.module';
require('./app/app.controller');

require('./app/navi/navi.component');
require('./app/navi/navi.controller');
require('./app/navi/navi.service');

require('./app/modal/modal.component');
require('./app/modal/modal.controller');
require('./app/modal/modal.service');

require('./app/city-modal/city-modal.component');
require('./app/city-modal/city-modal.controller');

require('./app/area-modal/area-modal.component');
require('./app/area-modal/area-modal.controller');

require('./app/city-list/city-list.controller');
require('./app/city-list/city-list.service');
require('./app/city-list/city-list.component');

require('./app/area-list/area-list.component');
require('./app/area-list/area-list.controller');

require('./app/models-service/models-service');

angular.module('cityPortal', [appModule.name]);


