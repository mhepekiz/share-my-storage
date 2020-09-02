const express = require('express');
const router = express.Router();
const contactCtrl = require('../controllers/forms');


router.get('/:id', contactCtrl.contact);
router.post('/', contactCtrl.sendMessage);
router.get('/my/inbox', contactCtrl.getInbox);

module.exports = router;
