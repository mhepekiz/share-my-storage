const express = require('express');
const router = express.Router();
const storagesCtrl = require('../controllers/storages');

router.get('/', storagesCtrl.index);
router.get('/new', storagesCtrl.new);
router.post('/', storagesCtrl.create);
router.delete('/:id', storagesCtrl.deleteStorage);
router.get('/:id', storagesCtrl.show);
router.get('/:id/edit', storagesCtrl.edit);
router.put('/:id', storagesCtrl.update);
router.get('/:id/showall', storagesCtrl.listAll);
router.get('/:location/showbycity', storagesCtrl.listByCity);

module.exports = router;
