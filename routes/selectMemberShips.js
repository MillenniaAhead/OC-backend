const router = require("express").Router();

const selectMemberShipController = require("../controllers/selectMemberShipController");

// functions
router.route("/selectMemberShips").post((req, res) => selectMemberShipController.create(req, res));
router.route("/selectMemberShips").get((req, res) => selectMemberShipController.getAll(req, res));
router.route("/selectMemberShips/:id").get((req, res) => selectMemberShipController.getById(req, res));
router
    .route("/selectMemberShips/:id")
    .delete((req, res) => selectMemberShipController.deleteById(req, res));
router.route("/selectMemberShips/:id").put((req, res) => selectMemberShipController.update(req, res));

module.exports = router;
