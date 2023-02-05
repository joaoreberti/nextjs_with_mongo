const mongoose = require('mongoose');
async function connect() {
  // await mongoose.connect("mongodb://127.0.0.1/mongol");
  console.log("Connected to MongoDB");
}
connect();

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.models.User || mongoose.model('User', userSchema);