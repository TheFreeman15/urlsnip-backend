const express = require('express')
const router = require('express-promise-router')();
const MainController = require('../controllers/main')

router.route('/')
    .get(MainController.index)
    .post(MainController.create);

router.route('/fetch/:slug')
    .get(MainController.getLink)

module.exports = router;    