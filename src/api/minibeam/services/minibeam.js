'use strict';

/**
 * minibeam service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::minibeam.minibeam');
