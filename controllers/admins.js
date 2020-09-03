let User = require('../models/user');
let Storage = require('../models/storage');
let Contact = require('../models/contact');



module.exports = {
  index,
  listStorages,
  listUsers,
  deleteStorage,
  deleteUser
}
  

function index(req, res) {
  Storage.count({}, function (err, count) {
    console.log(count);
  });
            User.find({}, function(err, users) {
        res.render('./admin/index', { title: 'Share My Storage Admin', subtitle: 'All Storages',  users });
      }).sort( { timestamp: 1 } );
    }


    function listStorages(req, res) {
        Storage.find({}, function(err, storages) {
          res.render('./admin/adminstorages', { title: 'Share My Storage Admin', subtitle: 'All Storages', storages})
        })
    }
    function listUsers(req, res) {
      User.find({}, function(err, users) {
        res.render('./admin/adminusers', { title: 'Share My Storage Admin', subtitle: 'All Users', users})
      })
  }


function deleteStorage(req, res) {
  Storage.findByIdAndDelete(req.params.id, function (err, storage) {
      res.redirect(`/admins/adminstorages`);
  });
}



function deleteUser(req, res) {
  User.findByIdAndDelete(req.params.id, function (err, user) {
    Storage.deleteMany({ "userID": user.id }, function (err, storage) {
      res.redirect(`/admins/adminusers`);
  });
});
}
