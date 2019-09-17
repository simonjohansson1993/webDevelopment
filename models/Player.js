/*eslint-disable*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playerSchema = new Schema({
    defense: {type:Number} ,
    health: { type: Number },
    baseDamage: {type:Number},
    damage: { type: Number },
    MaxHealth: { type: Number },
    name: { type: String },
    currency:{ type: Number}
  });
  
  module.exports = mongoose.model('Player',playerSchema);