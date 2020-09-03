      // Define Models
      
          let User = require('../models/user');

      // Export Cb Functions

          module.exports = {
              edit,
              update
            };

      // User edit function

        function edit(req, res) {
          User.findById (req.params.id,function(err, user) {
            res.render('users/', { title: 'Share My Storage', subtitle: 'Edit User Details',  user });
          });
        }

      // User update information function  

        function update(req, res) {
          User.findByIdAndUpdate(req.params.id, req.body, function(err, user) {
              if (err) {
                  res.render('users', { title: 'Share My Storage', subtitle: 'Update User Details',  user });
              }
              res.redirect('/storages/');
          })
      }
  