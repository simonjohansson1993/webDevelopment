/*eslint-disable*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
    
  _id:{type: Schema.Types.ObjectId},
    
    name:{type:String},
    description:{type:String},
    type: {type:String},
    attackValue:{type:Number},
    defenceValue:{type:Number},
    price:{type:Number}
  
  });
  
  module.exports = mongoose.model('Item',itemSchema);
