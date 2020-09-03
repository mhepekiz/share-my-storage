            const mongoose = require('mongoose');
            const Schema = mongoose.Schema;

            // DB User Schema

            const userSchema = new Schema({
                name: String,
                phone: String,
                email: String,
                location: String,
                address: String,
                userrole: {
                    type: String,
                    Enum: ['user', 'admin'],
                    default: 'user'
                },
                userstatus: {
                    type: String,
                    Enum: ['active', 'passive']
                },
                googleId: String
            },

                {
                timestamps: true
                });
                
  
  
  module.exports = mongoose.model('User', userSchema);
  
  