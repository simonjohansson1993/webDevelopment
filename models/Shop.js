/*eslint-disable*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var shopSchema = new Schema({
    name:{type:String},
    items: [{ type: Schema.Types.ObjectId,
      ref: 'Item' 
     }]
     
  });

  
  
  module.exports = mongoose.model('Shop',shopSchema);

  