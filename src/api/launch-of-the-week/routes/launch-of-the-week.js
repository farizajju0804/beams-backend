'use strict';

/**
 * launch-of-the-week router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::launch-of-the-week.launch-of-the-week');
