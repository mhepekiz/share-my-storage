let router = require('express').Router();
let passport = require('passport');
let adminCtrl = require('../controllers/admins');

router.get('/', isLoggedIn, adminCtrl.index);
router.get('/adminstorages', isLoggedIn, adminCtrl.listStorages);
router.get('/adminusers', isLoggedIn, adminCtrl.listUsers);
router.delete('/:id', isLoggedIn, adminCtrl.deleteStorage);
router.delete('/:id/user', isLoggedIn, adminCtrl.deleteUser);

  


// Google OAuth login route
router.get('/auth/google', passport.authenticate(
    'google',
    { scope: ['profile', 'email'] }
  ));
  
  
  // Google OAuth callback route
  router.get('/oauth2callback', passport.authenticate(
    'google',
    {
      successRedirect : '/',
      failureRedirect : '/'
    }
  ));
  
  // OAuth logout route
  router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });


  
module.exports = router;


function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

