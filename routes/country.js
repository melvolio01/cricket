const mongoose = require('mongoose')
const router = require('express').Router();
const Country = require('../models/country');


// Mongoose methods
// module.exports.getCountries = (cb, limit) => {
//   Country.find(cb).limit();
// }

// app.get('/api/countries', (req, res) => {
//   Country.getCountries((err, countries) => {
//     if (err) throw err;
//     res.json(countries);
//   })
// })
router.route('/').get((req, res) => {
  Country.find()
    .then(countries => res.json(countries))
    .catch(err => res.status(400).json(`Error: ` + err))
})

router.route('/').post((req, res) => {
  const name = req.body.name;
  const newCountry = new Country({ name });
  newCountry.save()
    .then(() => res.json('Country Added!'))
    .catch(err => res.status(400).json(`Error: ` + err));
})

// add country
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
module.exports = router;

