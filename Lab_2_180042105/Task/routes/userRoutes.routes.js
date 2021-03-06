const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const isLoggedIn = require("./../middlewares/auth.middlewares")
const {
    getRegister,
    postRegister,
    getLogin,
    postLogin,
    getDashboard,
  } = require("./../controllers/userController.controllers");
  

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.route("/login").get(getLogin).post(postLogin);

router.route("/dashboard").all(isLoggedIn).get(getDashboard);

router.route("/register").get(getRegister).post(postRegister);

module.exports = router;