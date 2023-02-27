const router = require("express").Router();

const FormController = require("../../controllers/SanClient/FormController");

// functions
router.route("/sanclients/form").post((req, res) => FormController.create(req, res));
router.route("/sanclients/form").get((req, res) => FormController.getAll(req, res));
router.route("/sanclients/form/:id").get((req, res) => FormController.getById(req, res));
router.route("/sanclients/form/:id").delete((req, res) => FormController.deleteById(req, res));
router.route("/sanclients/form/:id").put((req, res) => FormController.update(req, res));

module.exports = router;