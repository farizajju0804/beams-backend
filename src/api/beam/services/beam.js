'use strict';

/**
 * beam service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::beam.beam');
