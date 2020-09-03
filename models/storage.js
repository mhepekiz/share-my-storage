          const mongoose = require('mongoose');
          const Schema = mongoose.Schema;
            
       // DB Storage Schema with Reviews Schema

          const reviewSchema = new Schema({
            content: String,
            rating: {type: Number, min: 1, max: 5}
          }, {
            timestamps: true
          });


          const storageSchema = new Schema({
            category: { 
                type: String,
                enum: ['Shared', 'Private']
            },
            storageType: { 
              type: String,
              enum: ['Covered', 'Uncovered']
          },
            usageType: {
                type: String,
                enum: ['All', 'Limited']
            },
            location: String,
            mapLink: String,
            photoLink: String,
            price: Number,
            storageHeader: String,
            storageDetails: String,
            userID: String,
            reviews: [reviewSchema]
          },
            
            {
              timestamps: true
            });
  

  module.exports = mongoose.model('Storage', storageSchema);

