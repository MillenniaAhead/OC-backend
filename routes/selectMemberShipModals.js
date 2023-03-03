const router = require("express").Router();

const selectMemberShipModalController = require("../controllers/selectMemberShipModalController");

// functions
router.route("/selectMemberShipModals").post((req, res) => selectMemberShipModalController.create(req, res));
router.route("/selectMemberShipModals").get((req, res) => selectMemberShipModalController.getAll(req, res));
router.route("/selectMemberShipModals/:id").get((req, res) => selectMemberShipModalController.getById(req, res));
router
    .route("/selectMemberShipModals/:id")
    .delete((req, res) => selectMemberShipModalController.deleteById(req, res));
router.route("/selectMemberShipModals/:id").put((req, res) => selectMemberShipModalController.update(req, res));

module.exports = router;
