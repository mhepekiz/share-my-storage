var router = require('express').Router();
const passport = require('passport');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/storages');
});

router.get('/success', function(req, res, next) {
  res.redirect('success');
});

/* GET home page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Share My Storage', subtitle: 'About SMS' });
});

/* GET home page. */
router.get('/howitworks', function(req, res, next) {
  res.render('how', { title: 'Share My Storage', subtitle: 'How SMS Works' });
});


/* GET home page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Share My Storage', subtitle: 'Contact Us' });
});





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