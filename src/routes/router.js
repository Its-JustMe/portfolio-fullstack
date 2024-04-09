"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var homeController_1 = require("../controllers/homeController");
var router = express_1.default.Router();
router.get('/', function (req, res) {
    homeController_1.default.renderHome(req, res);
});
router.post('/send', homeController_1.default.validationRules, function (req, res) {
    homeController_1.default.validateForm(req, res);
});
exports.default = router;
