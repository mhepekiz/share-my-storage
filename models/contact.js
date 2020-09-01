const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  

const contactSchema = new Schema({
  messageType: { 
      type: String,
      enum: ['new', 'past'],
      default: 'new'
  },
  contactMessage: String,
  storageID: String,
  senderID: String,
  ownerID: String
},
  
  {
    timestamps: true
  });
  

  module.exports = mongoose.model('Contact', contactSchema);

