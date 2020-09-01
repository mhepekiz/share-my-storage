const express = require('express');
const router = express.Router();
const storagesCtrl = require('../controllers/storages');

router.get('/', storagesCtrl.index);
router.get('/new', storagesCtrl.new);
router.post('/', storagesCtrl.create);
router.get('/:id', storagesCtrl.show);



module.exports = router;
