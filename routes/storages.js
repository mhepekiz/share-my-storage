const express = require('express');
const router = express.Router();
const storagesCtrl = require('../controllers/storages');

router.get('/', storagesCtrl.index);
router.get('/new', isLoggedIn, storagesCtrl.new);
router.post('/', isLoggedIn, storagesCtrl.create);
router.delete('/:id', isLoggedIn, storagesCtrl.deleteStorage);
router.get('/:id', storagesCtrl.show);
router.get('/:id/edit', isLoggedIn, storagesCtrl.edit);
router.put('/:id', isLoggedIn, storagesCtrl.update);
router.get('/:id/showall', storagesCtrl.listAll);
router.get('/:location/showbycity', storagesCtrl.listByCity);

module.exports = router;


function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

  