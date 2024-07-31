const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  mobileNo: { type: String, required: true, match: /^\d{10}$/ },
  emailId: { type: String, required: true, match: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/ },
  address: {
    street: String,
    city: String,
    state: String,
    country: String
  },
  loginId: { type: String, required: true, match: /^[a-zA-Z0-9]{8}$/ },
  password: { type: String, required: true, match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W)[a-zA-Z\d\W]{6,}$/ },
  creationTime: { type: Date, default: Date.now },
  lastUpdatedOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
