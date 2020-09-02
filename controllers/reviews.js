let User = require('../models/user');
let Storage = require('../models/storage');
let Contact = require('../models/contact');


module.exports = {
  create
};

function create(req, res) {
    Storage.findById(req.params.id, function(err, storage) {
    storage.reviews.push(req.body);
    console.log(req.params.id);
    storage.save(function(err) {
      res.redirect(`/storages/${storage._id}`);
    });
  });
}