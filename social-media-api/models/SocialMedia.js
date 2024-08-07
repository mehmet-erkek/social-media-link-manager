const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//burada dataya kaydedileceklerin şemasını çıkardım.

const SocialMediaSchema = new Schema({
  link: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('SocialMedia', SocialMediaSchema);
