      // Define Models

          let User = require('../models/user');
          let Storage = require('../models/storage');
          let Contact = require('../models/contact');

      // Export Cb Functions

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
  
      // Main page list storages function with random results

          function index(req, res) {
            Storage.aggregate([ { $sample: {size: 3} } ], function(err, storages) {
                  res.render('storages/index', { title: 'Share My Storage', subtitle: 'Welcome', storages });
              });
            }

      // Show All Storages Function

            function listAll(req, res) {
              Storage.find({}, function(err, storages) {
                    res.render('storages/showall', { title: 'Share My Storage', subtitle: 'Show All Storages', storages });
                }).sort( { createdAt: -1 } );
              }

      // Show By City Function User Can Reach This by Clicking On The City Names

              function listByCity(req, res) {
                Storage.find({ "location": req.params.location }, function(err, storages) {
                      res.render('storages/showall', { title: 'Share My Storage', subtitle: 'Show All Storages by City', storages });
                  });
                }

      // Show Storage Details Function From Main Page and Show All Pages (With Filtered Results)

            function show(req, res) {
              Storage.findById (req.params.id,function(err, storage) {
                res.render('storages/show', { title: 'Share My Storage', subtitle: 'Storage Details',  storage });
              });
            }

      // Add New Storage Main Function That Call Form

            function newStorage(req, res) {
              res.render('storages/new', { title: 'Share My Storage', subtitle: 'Add New Storage'});
            }

      // Edit Storage Information Main Function That Call Form with Insterted Variables

            function edit(req, res) {
              Storage.findById (req.params.id,function(err, storage) {
                res.render('storages/edit', { title: 'Share My Storage', subtitle: 'Edit Storage Details',  storage });
              });
            }

        // Update Storage Details Main Function

            function update(req, res) {
              Storage.findByIdAndUpdate(req.params.id, req.body, function(err, storage) {
                  if (err) {
                      res.render('storages/edit', { title: 'Share My Storage', subtitle: 'Edit Storage Details',  storage });
                  }
                  res.redirect(`/storages/${storage.id}`)
              });
          }

      // Create New Storage Main Function

            function create(req, res) {
              const storage = new Storage(req.body);
              storage.save(function(err) {
                if (err) return res.render('storages/new', { title: 'Share My Storage', subtitle: 'Adding Storage Failed!'});
                res.redirect('/storages');
              })
            }

      // Delete A Storage by Owner Function

            function deleteStorage(req, res) {
              Storage.findByIdAndDelete(req.params.id, function (err, storage) {
                  res.redirect(`/storages`);
              });
            }

