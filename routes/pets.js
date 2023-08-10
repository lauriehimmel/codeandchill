var express = require('express');
var router = express.Router();
var petCtrl = require('../controllers/pets')

/* GET users listing. */

router.get('/', petCtrl.index)
router.get('/new', petCtrl.newPet)

module.exports = router;
