'use strict';

/**
 * microbeam service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::microbeam.microbeam');
