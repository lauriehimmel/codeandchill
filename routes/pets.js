var express = require('express');
var router = express.Router();
var petCtrl = require('../controllers/pets')

/* GET users listing. */

router.get('/', petCtrl.index)
router.get('/new', petCtrl.newPet)
router.post('/', petCtrl.create)
router.get('/:id', petCtrl.show)
router.delete('/:id', petCtrl.delete)

module.exports = router;
