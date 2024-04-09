const express = require('express');
const homeController = require('../controllers/homeController');

const router = express.Router();

router.get('/', function (req, res) {
  homeController.renderHome(req, res);
});

router.post('/send', homeController.validationRules, function (req, res) {
  homeController.validateForm(req, res);
});

module.exports = router;
