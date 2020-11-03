const express = require('express')
const router = require('express-promise-router')();
const MainController = require('../controllers/main')

router.route('/')
    .get(MainController.index);


module.exports = router;    