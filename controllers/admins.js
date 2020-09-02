let User = require('../models/user');
let Storage = require('../models/storage');
let Contact = require('../models/contact');



module.exports = {
  index
}
  

function index(req, res) {
    Storage.find({}, function(err, storages) {
        User.find({}, function(err, users) {
        res.render('./admin/index', { title: 'Share My Storage Admin', subtitle: 'All Storages', storages, users });
      }).sort( { timestamp: 1 } );
    }).sort( { timestamp: 1 } );
    }
