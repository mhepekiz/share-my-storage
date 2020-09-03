          const mongoose = require('mongoose');
          const Schema = mongoose.Schema;
  
      // DB Contact Forms Schema with Answers Schema

          const answerSchema = new Schema({
            content: String
          }, {
            timestamps: true
          });


          const contactSchema = new Schema({
            messageType: { 
                type: String,
                enum: ['new', 'past'],
                default: 'new'
            },
            contactMessage: String,
            storageID: String,
            senderID: String,
            ownerID: String,
            answers: [answerSchema]
          },
            
          {
            timestamps: true
          });
          

  module.exports = mongoose.model('Contact', contactSchema);

