const User = require('../models/user');
const Storage = require('../models/storage');

module.exports = {
  index,
  show,
  new: newStorage,
  create
  }
  
function index(req, res) {
  Storage.find({}, function(err, storages) {
        res.render('storages/index', { title: 'Share My Storage', subtitle: 'Welcome', storages });
    });
  }

  function show(req, res) {
    Storage.findById (req.params.id,function(err, storage) {
       res.render('storages/show', { title: 'Share My Storage', subtitle: 'Storage Details',  storage });
     });
   }

  function newStorage(req, res) {
    res.render('storages/new', { title: 'Share My Storage', subtitle: 'Add New Storage'});
  }
  
  function create(req, res) {
    const storage = new Storage(req.body);
    storage.save(function(err) {
      if (err) return res.render('storages/error', { title: 'Share My Storage', subtitle: 'Adding Storage Failed!'});
      res.redirect('/storages');
    })
  }








