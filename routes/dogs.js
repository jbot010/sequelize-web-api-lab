const router = require('express').Router()
const dogsCtrl = require('../controllers/dogs.js')

router.post('/', dogsCtrl.create)

router.get('/', dogsCtrl.index)

router.put('/:dogId', dogsCtrl.update)

module.exports = router