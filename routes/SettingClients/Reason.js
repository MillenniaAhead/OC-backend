const router = require("express").Router();

const ReasonController = require("../../controllers/SettingClients/Reason");

// functions
router.route("/reason").post((req, res) => ReasonController.create(req, res));
router.route("/reason").get((req, res) => ReasonController.getAll(req, res));
router.route("/reason/:id").get((req, res) => ReasonController.getById(req, res));
router.route("/reason/:id").delete((req, res) => ReasonController.deleteById(req, res));
router.route("/reason/:id").put((req, res) => ReasonController.update(req, res));

module.exports = router;