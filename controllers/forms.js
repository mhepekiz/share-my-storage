let User = require('../models/user');
let Storage = require('../models/storage');
let Contact = require('../models/contact');
let user = require('../models/user');

module.exports = {
    contact,
    sendMessage,
    getInbox,
    addAnswer
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
      
      Contact.find({ "ownerID": req.params.user }, function(err, contact) {
        Storage.find({}, function(err, storages){ 
            res.render('forms/inbox', { title: 'Share My Storage', subtitle: 'Welcome', contact, storages });
        }).sort( { createdAt: -1 } );
      })
      }
     

      function addAnswer(req, res) {
        Contact.findById(req.params.id, function(err, message) {
        message.answers.push(req.body);
        message.save(function(err) {
          res.redirect(`/forms/${message.ownerID}/inbox`);
        });
      });
    }
