const mongoose = require('mongoose');

// Country schema
const countrySchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

const Country = module.exports = mongoose.model('Country', countrySchema);

// // Mongoose methods
// module.exports.getCountries = (cb, limit) => {
//   Country.find(cb).limit();
// }

// // add country
// module.exports.addCountry = (country, cb) => {
//   Country.create(country, cb);
// }

// // update country
// module.exports.updateCountry = (id, country, options, cb) => {
//   const query = { _id: id }
//   const update = {
//     name: country.name
//   }
//   Country.findOneAndUpdate(query, update, options, cb);
// }

// module.exports.deleteCountry = (id, cb) => {
//   const query = { _id: id };
//   Country.remove(query, cb)
// } 