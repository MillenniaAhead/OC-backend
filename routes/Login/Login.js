const router = require("express").Router();

const LoginController = require("../../controllers/Login/Login");

// functions
router.route("/login").post((req, res) => LoginController.create(req, res));
router.route("/login").get((req, res) => LoginController.getAll(req, res));
router.route("/login/:id").get((req, res) => LoginController.getById(req, res));
router.route("/login/:id").delete((req, res) => LoginController.deleteById(req, res));
router.route("/login/:id").put((req, res) => LoginController.update(req, res));

module.exports = router;