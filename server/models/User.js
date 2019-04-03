const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  avatar: {
    type: Buffer,
  },
  name: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  zipcode: String,
  interests: [String],
  dietRestrictions: String,
  restaurantsList: [{ type: Schema.Types.ObjectId, ref: 'Restaurant' }],
});

module.exports = mongoose.model('User', userSchema);
