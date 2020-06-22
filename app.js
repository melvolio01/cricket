const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Country = require('./models/country');
const Player = require('./models/player');
app.use(express.json());

// connect to mongoose
mongoose.connect('mongodb://localhost/cricket', { useNewUrlParser: true });
const db = mongoose.connection;

// home getRequest
app.get('/', (req, res) => {
  res.send('Please use /api/players or /api/countries');
});

// countries
app.get('/api/countries', (req, res) => {
  Country.getCountries((err, countries) => {
    if (err) throw err;
    res.json(countries);
  })
})

app.post('/api/countries', (req, res) => {
  const country = req.body;
  Country.addCountry(country, (err, country) => {
    if (err) throw err;
    res.json(country);
  })
})

app.put('/api/countries/:_id', (req, res) => {
  const id = req.params._id;
  const country = req.body;
  Country.updateCountry(id, country, {}, (err, country) => {
    if (err) throw err;
    res.json(country);
  })
})

app.delete('/api/countries/:_id', (req, res) => {
  const id = req.params._id;
  Country.deleteCountry(id, (err, country) => {
    if (err) throw err;
    res.json(country);
  })
})

// Players
app.get('/api/players', (req, res) => {
  Player.getPlayers((err, players) => {
    if (err) throw err;
    res.json(players);
  })
})

app.get('/api/players/:_id', (req, res) => {
  Player.getPlayerById(req.params._id, (err, player) => {
    if (err) throw err;
    res.send(player)
  })
})

app.post('/api/players', (req, res) => {
  const player = req.body;
  console.log(player);
  Player.addPlayer(player, (err, player) => {
    if (err) throw err;
    res.json(player);
  })
})

app.put('/api/players/:_id', (req, res) => {
  const id = req.params._id;
  const player = req.body;
  Player.updatePlayer(id, player, {}, (err, player) => {
    if (err) throw err;
    res.json(player);
  })
})

app.delete('/api/players/:_id', (req, res) => {
  const id = req.params._id;
  Player.deletePlayer(id, (err, player) => {
    if (err) throw err;
    res.json(player);
  })
})

app.listen(3000);
console.log('Running Cricket site on port 3000...');