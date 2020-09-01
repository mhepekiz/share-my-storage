let express = require('express');
let router = express.Router();
let usersCtrl = require('../controllers/users');

router.get('/:id/edit', usersCtrl.edit);
router.put('/:id', usersCtrl.update);

module.exports = router;
