/*eslint-disable*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bossSchema = new Schema({
    description: {type:String},
    difficulty: {type:String} ,
    health: { type: Number },
    baseDamage: {type:Number},
    damage: { type: Number },
    maxHealth: { type: Number },
    name: { type: String }
  });
  
  module.exports = mongoose.model('Boss',bossSchema);
