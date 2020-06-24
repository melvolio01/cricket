const mongoose = require('mongoose')
const router = require('express').Router();
const Player = require('../models/player');
// const mongoose = require('mongoose')
// const Player = require('../models/player');// mongoose methods
// // Get Players
// module.exports.getPlayers = (cb, limit) => {
//   Player.find(cb).limit();
// }

// // Get Player
// module.exports.getPlayerById = (id, cb) => {
//   Player.findById(id, cb);
// }

// // add Player
// module.exports.addPlayer = (player, cb) => {
//   Player.create(player, cb);
// }

// // update Player
// module.exports.updatePlayer = (id, player, options, cb) => {
//   const query = { _id: id };
//   const update = {
//     name: player.name,
//     imageUrl: player.imageUrl,
//     country: player.country,
//     role: player.role,
//     allRounder: player.allRounder,
//     hand: player.hand,
//     bowlerType: player.bowlerType,
//     testRuns: player.testRuns,
//     testCenturies: player.testCenturies,
//     testBatAv: player.testBatAv,
//     odiRuns: player.odiRuns,
//     odiBatAv: player.odiBatAv,
//     testWickets: player.testWickets,
//     testBowlAv: player.testBowlAv,
//     testSR: player.testSR,
//     odiWickets: player.odiWickets,
//     odiBowlAv: player.odiBowlAv,
//     odiSR: player.odiSR
//   }
//   Player.findOneAndUpdate(query, update, options, cb);
// }

// module.exports.deletePlayer = (id, cb) => {
//   const query = { _id: id };
//   Player.remove(query, cb)
// } 
router.route('/').get((req, res) => {
  Player.find()
    .then(players => res.json(players))
    .catch(err => res.status(400).json(`Error: ` + err))
})

router.route('/').post((req, res) => {
  const {
    name,
    imageUrl,
    country,
    role,
    allRounder,
    hand,
    bowlerType,
    testRuns,
    testCenturies,
    testBatAv,
    odiRuns,
    odiBatAv,
    testWickets,
    testBowlAv,
    testSR,
    odiWickets,
    odiBowlAv,
    odiSR
  } = req.body;
  const newPlayer = new Player({
    name,
    imageUrl,
    country,
    role,
    allRounder,
    hand,
    bowlerType,
    testRuns,
    testCenturies,
    testBatAv,
    odiRuns,
    odiBatAv,
    testWickets,
    testBowlAv,
    testSR,
    odiWickets,
    odiBowlAv,
    odiSR
  });
  newPlayer.save()
    .then(() => res.json('Player Added!'))
    .catch(err => res.status(400).json(`Error: ` + err));
})

router.route('/:id').get((req, res) => {
  Player.findById(req.params.id)
    .then(player => res.json(player))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').delete((req, res) => {
  Player.findByIdAndDelete(req.params.id)
    .then(() => res.json('Player deleted.'))
    .catch(err => res.status(400).json('Error:' + err))
})

router.route('/:id').put((req, res) => {
  const {
    name,
    imageUrl,
    country,
    role,
    allRounder,
    hand,
    bowlerType,
    testRuns,
    testCenturies,
    testBatAv,
    odiRuns,
    odiBatAv,
    testWickets,
    testBowlAv,
    testSR,
    odiWickets,
    odiBowlAv,
    odiSR
  } = req.body;
  Player.findById(req.params.id)
    .then(player => {
      player.name = name;
      player.imageUrl = imageUrl;
      player.country = country;
      player.role = role;
      player.allRounder = allRounder;
      player.hand = hand;
      player.bowlerType = bowlerType;
      player.testRuns = testRuns;
      player.testCenturies = testCenturies;
      player.testBatAv = testBatAv;
      player.odiRuns = odiRuns;
      player.odiBatAv = odiBatAv;
      player.testWickets = testWickets;
      player.testBowlAv = testBowlAv;
      player.testSR = testSR;
      player.odiWickets = odiWickets;
      player.odiBowlAv = odiBowlAv;
      player.odiSR = odiSR;

      player.save()
        .then(() => res.json('Player Updated!'))
        .catch(err => res.status(400).json("Error: " + err))
    })
    .catch(err => res.status(400).json("Error: " + err))
})

module.exports = router;
