const express = require('express');
const homeController = require('../controllers/homeController');
const emailController = require('../controllers/emailController');

const router = express.Router();

router.get('/', function (req, res) {
  homeController.renderHome(req, res);
});

router.post('/send', emailController.validationRules, function (req, res) {
  emailController.validateForm(req, res);
});

module.exports = router;
