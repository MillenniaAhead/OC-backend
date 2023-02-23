const router = require("express").Router();

const sourcesController = require("../../controllers/SettingClients/Sources");

// functions
router.route("/sources").post((req, res) => sourcesController.create(req, res));
router.route("/sources").get((req, res) => sourcesController.getAll(req, res));
router.route("/sources/:id").get((req, res) => sourcesController.getById(req, res));
router.route("/sources/:id").delete((req, res) => userController.deleteById(req, res));
router.route("/sources/:id").put((req, res) => sourcesController.update(req, res));

module.exports = router;