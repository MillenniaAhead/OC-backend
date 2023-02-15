const router = require("express").Router();

const RegisterController = require("../../controllers/Register/Register");

// functions
router.route("/register").post((req, res) => RegisterController.create(req, res));
router.route("/register").get((req, res) => RegisterController.getAll(req, res));
router.route("/register/:id").get((req, res) => RegisterController.getById(req, res));
router.route("/register/:id").delete((req, res) => RegisterController.deleteById(req, res));
router.route("/register/:id").put((req, res) => RegisterController.update(req, res));
router.route("/login").post((req, res) => RegisterController.login(req, res));

module.exports = router;