const router = require("express").Router();

const AutoMassageController = require("../../controllers/SanClient/AutoMassageController");

// functions
router.route("/sanclients/autoMassage").post((req, res) => AutoMassageController.create(req, res));
router.route("/sanclients/autoMassage").get((req, res) => AutoMassageController.getAll(req, res));
router.route("/sanclients/autoMassage/:id").get((req, res) => AutoMassageController.getById(req, res));
router.route("/sanclients/autoMassage/:id").delete((req, res) => AutoMassageController.deleteById(req, res));
router.route("/sanclients/autoMassage/:id").put((req, res) => AutoMassageController.update(req, res));

module.exports = router;