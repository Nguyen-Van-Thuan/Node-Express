const mongoose = require('mongoose');
// Thu viện tạo slug tự động
const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, required: true, },
  description: { type: String },
  image: { type: String },
  videoId: { type: String, required: true, },
  level: { type: String },
  slug: { type: String, slug: 'name', unique: true, }
}, {
  timestamps: true,
});

// Thư viện thêm trường filed deletedAt
const mongooseDelete = require('mongoose-delete');
Course.plugin(mongooseDelete, {
  overrideMethods: 'all',
  deletedAt: true
})

module.exports = mongoose.model('Course', Course);