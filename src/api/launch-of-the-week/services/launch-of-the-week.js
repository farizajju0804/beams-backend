'use strict';

/**
 * launch-of-the-week service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::launch-of-the-week.launch-of-the-week');
