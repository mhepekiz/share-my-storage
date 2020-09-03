let express = require('express');
let router = express.Router();
let usersCtrl = require('../controllers/users');

router.get('/:id/edit', isLoggedIn, usersCtrl.edit);
router.put('/:id', isLoggedIn, usersCtrl.update);

module.exports = router;


function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

  
  