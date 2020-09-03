        // Define Models
            let User = require('../models/user');
            let Storage = require('../models/storage');
            let Contact = require('../models/contact');


        // Export Cb Functions

            module.exports = {
              index,
              listStorages,
              listUsers,
              deleteStorage,
              deleteUser
            }
  

        // Admin Main Screen Function

          function index(req, res) {
                  User.find({}, function(err, users) {
                    Storage.find({}, function(err, storages) {
                      Contact.find({}, function(err, contacts) {
                  res.render('./admin/index', { title: 'Share My Storage Admin', subtitle: 'Welcome Admin',  users, storages, contacts });
                }).sort( { timestamp: 1 } );
              });
            });
              }

         // Show All Storages to Admin Function

              function listStorages(req, res) {
                  Storage.find({}, function(err, storages) {
                    res.render('./admin/adminstorages', { title: 'Share My Storage Admin', subtitle: 'All Storages', storages})
                  })
              }
         
         // Show All Users to Admin Function
               
              function listUsers(req, res) {
                User.find({}, function(err, users) {
                  res.render('./admin/adminusers', { title: 'Share My Storage Admin', subtitle: 'All Users', users})
                })
            }

        // Delete Selected Storage by Admin Function
         
          function deleteStorage(req, res) {
            Storage.findByIdAndDelete(req.params.id, function (err, storage) {
                res.redirect(`/admins/adminstorages`);
            });
          }

        // Delete Selected User With Storages Owned By That User by Admin Function

          function deleteUser(req, res) {
            User.findByIdAndDelete(req.params.id, function (err, user) {
              Storage.deleteMany({ "userID": user.id }, function (err, storage) {
                res.redirect(`/admins/adminusers`);
            });
          });
          }
