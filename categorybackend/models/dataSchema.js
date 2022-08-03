var mongoose = require('mongoose');

var CategorySchema = mongoose.Schema({
    Categoryid:{type:Number},
    Categoryname:{type:String},
    Categorydescription:{type:String},
  
});

module.exports=mongoose.model('category',CategorySchema);