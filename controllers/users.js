const User = require('../models/user');


module.exports = {
    edit,
    update
  };

  function edit(req, res) {
    User.findById (req.params.id,function(err, user) {
      res.render('users/', { title: 'Share My Storage', subtitle: 'Edit User Details',  user });
    });
  }

  function update(req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, function(err, user) {
        if (err) {
            res.render('users', { title: 'Share My Storage', subtitle: 'Edit User Details',  user });
        }
        res.redirect('/storages/');
    })
}
  