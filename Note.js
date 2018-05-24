const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const noteSchema = new mongoose.Schema({
  title: String, 
  body: String,
  password: String
})

noteSchema.pre('save', function(next) {
  bcrypt
    .hash(this.password, 10)
    .then(hash => {
      this.password = hash;

      next();
    })
    .catch(err => {
      next(err);
    });
});


module.exports = mongoose.model("Note", noteSchema);
