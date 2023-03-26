const router = require("express").Router();
const HomeController = require("../app/controllers/HomeController.js");

router.get('/home', HomeController.index);
router.get('/logIn', HomeController.login);
router.get('/signUp', HomeController.dangKi)

router.get('/', HomeController.index);


module.exports = router;