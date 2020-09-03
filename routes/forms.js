const express = require('express');
const router = express.Router();
const contactCtrl = require('../controllers/forms');


router.get('/:id', isLoggedIn, contactCtrl.contact);
router.post('/', isLoggedIn, contactCtrl.sendMessage);
router.get('/:user/inbox', isLoggedIn, contactCtrl.getInbox);
router.post('/:id/answers', isLoggedIn, contactCtrl.addAnswer);

module.exports = router;


function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }
