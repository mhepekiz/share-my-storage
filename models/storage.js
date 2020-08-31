const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  

const storageSchema = new Schema({
  category: { 
      type: String,
      enum: ['shared', 'private']
  },
  storageType: { 
    type: String,
    enum: ['covered', 'uncovered']
},
  usageType: {
      type: String,
      enum: ['all', 'limited']
  },
  location: String,
  mapLink: String,
  photoLink: String,
  price: Number
},
  
  {
    timestamps: true
  });
  

  module.exports = mongoose.model('Storage', storageSchema);

