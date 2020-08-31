const User = require('../models/user');
const Storage = require('../models/storage');

module.exports = {
  index,
  new: newStorage,
  create
  }
  
function index(req, res) {
  console.log("Mustafa");
  Storage.find({}, function(err, storages) {
        res.render('storages/index', { title: 'Share My Storage', subtitle: 'Welcome', storages });
    });
  }

  function newStorage(req, res) {
    res.render('storages/new', { title: 'Share My Storage', subtitle: 'Add New Storage'});
  }
  
  function create(req, res) {
    const storage = new Storage(req.body);
    storage.save(function(err) {
      if (err) return res.render('storages/new');
      res.redirect('/storages');
    })
  }






