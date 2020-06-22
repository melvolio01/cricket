const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String
  },
  country: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  allRounder: {
    type: Boolean
  },
  hand: {
    type: String,
    required: true
  },
  bowlerType: {
    type: String
  },
  testRuns: {
    type: Number,
    required: true
  },
  testCenturies: {
    type: Number
  },
  testBatAv: {
    type: Number,
    required: true
  },
  odiRuns: {
    type: Number
  },
  odiBatAv: {
    type: Number
  },
  testWickets: {
    type: Number
  },
  testBowlAv: {
    type: Number
  },
  testSR: {
    type: Number
  },
  odiWickets: {
    type: Number
  },
  odiBowlAv: {
    type: Number
  },
  odiSR: {
    type: Number
  },
  create_date: {
    type: Date,
    default: Date.now
  }
})

const Player = module.exports = mongoose.model('Player', playerSchema);

// mongoose methods
// Get Players
module.exports.getPlayers = (cb, limit) => {
  Player.find(cb).limit();
}

// Get Player
module.exports.getPlayerById = (id, cb) => {
  Player.findById(id, cb);
}

// add Player
module.exports.addPlayer = (player, cb) => {
  Player.create(player, cb);
}

// update Player
module.exports.updatePlayer = (id, player, options, cb) => {
  const query = { _id: id };
  const update = {
    name: player.name,
    imageUrl: player.imageUrl,
    country: player.country,
    role: player.role,
    allRounder: player.allRounder,
    hand: player.hand,
    bowlerType: player.bowlerType,
    testRuns: player.testRuns,
    testCenturies: player.testCenturies,
    testBatAv: player.testBatAv,
    odiRuns: player.odiRuns,
    odiBatAv: player.odiBatAv,
    testWickets: player.testWickets,
    testBowlAv: player.testBowlAv,
    testSR: player.testSR,
    odiWickets: player.odiWickets,
    odiBowlAv: player.odiBowlAv,
    odiSR: player.odiSR
  }
  Player.findOneAndUpdate(query, update, options, cb);
}

module.exports.deletePlayer = (id, cb) => {
  const query = { _id: id };
  Player.remove(query, cb)
} 