const express = require('express');
const router = express.Router();
const contactCtrl = require('../controllers/forms');


router.get('/:id', contactCtrl.contact);
router.post('/', contactCtrl.sendMessage);
router.get('/:user/inbox', contactCtrl.getInbox);
router.post('/:id/answers', contactCtrl.addAnswer);

module.exports = router;
