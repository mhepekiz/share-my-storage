let router = require('express').Router();
let passport = require('passport');
let adminCtrl = require('../controllers/admins');

router.get('/', adminCtrl.index);
router.get('/adminstorages', adminCtrl.listStorages);
router.get('/adminusers', adminCtrl.listUsers);
router.delete('/:id', adminCtrl.deleteStorage);
router.delete('/:id/user', adminCtrl.deleteUser);

  


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
