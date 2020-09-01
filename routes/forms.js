const express = require('express');
const router = express.Router();
const contactCtrl = require('../controllers/forms');


router.get('/:id', contactCtrl.contact);

module.exports = router;
