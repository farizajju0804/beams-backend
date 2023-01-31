'use strict';

/**
 * suggestion-for-search service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::suggestion-for-search.suggestion-for-search');
