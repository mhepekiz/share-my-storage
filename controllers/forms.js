let User = require('../models/user');
let Storage = require('../models/storage');
let Contact = require('../models/contact');
const user = require('../models/user');

module.exports = {
    contact,
    sendMessage,
    getInbox
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

    function getInbox(req, res) {
      Contact.find({ "ownerID": '5f487e5384295f30d89d6173' }, function(err, messages) {
            res.render('forms/inbox', { title: 'Share My Storage', subtitle: 'Welcome', messages });
        });
      }
