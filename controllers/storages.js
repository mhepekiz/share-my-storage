let User = require('../models/user');
let Storage = require('../models/storage');
let Contact = require('../models/contact');



module.exports = {
  index,
  show,
  new: newStorage,
  create,
  edit,
  update,
  deleteStorage,
  listAll,
  listByCity
  }
  
function index(req, res) {
  Storage.aggregate([ { $sample: {size: 10} } ], function(err, storages) {
        res.render('storages/index', { title: 'Share My Storage', subtitle: 'Welcome', storages });
    });
  }

  function listAll(req, res) {
    Storage.find({}, function(err, storages) {
          res.render('storages/showall', { title: 'Share My Storage', subtitle: 'Show All Storages', storages });
      }).sort( { createdAt: -1 } );
    }


    function listByCity(req, res) {
      Storage.find({ "location": req.params.location }, function(err, storages) {
        console.log(req);
            res.render('storages/showall', { title: 'Share My Storage', subtitle: 'Show All Storages', storages });
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

  function edit(req, res) {
    Storage.findById (req.params.id,function(err, storage) {
      res.render('storages/edit', { title: 'Share My Storage', subtitle: 'Edit Storage Details',  storage });
    });
  }

  function update(req, res) {
    Storage.findByIdAndUpdate(req.params.id, req.body, function(err, storage) {
        if (err) {
            res.render('storages/edit', { title: 'Share My Storage', subtitle: 'Edit Storage Details',  storage });
        }
        res.redirect(`/storages/${storage.id}`)
    });
}

function create(req, res) {
  const storage = new Storage(req.body);
  storage.save(function(err) {
    if (err) return res.render('storages/new', { title: 'Share My Storage', subtitle: 'Adding Storage Failed!'});
    res.redirect('/storages');
  })
}

function deleteStorage(req, res) {
  Storage.findByIdAndDelete(req.params.id, function (err, storage) {
      res.redirect(`/storages`);
  });
}

