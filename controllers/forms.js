const User = require('../models/user');
const Storage = require('../models/storage');
const Contact = require('../models/contact');

module.exports = {
    contact,
    sendMessage
    }
    
    function contact(req, res) {
      Storage.findById (req.params.id,function(err, storage) {
         res.render('forms/contact', { title: 'Share My Storage', subtitle: 'Storage Details',  storage });
       });
     }

     function sendMessage(req, res) {
      const contact = new Contact(req.body);
      contact.save(function(err) {
        if (err) return res.render('storages/error', { title: 'Share My Storage', subtitle: 'Adding Storage Failed!'});
        res.redirect('/storages');
      })
    }
