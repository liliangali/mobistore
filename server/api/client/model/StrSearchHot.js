"use strict";

const mongoose = require('mongoose');

var config = require('./config');

const searchHotSchema = {
	times: {type: Number},
  keywords: {type: String, required: true, trim: true},
  enabled: {type: Boolean, default: true},
}

module.exports = mongoose.Schema(searchHotSchema, config.schemaOptions);
