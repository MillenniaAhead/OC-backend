const router = require("express").Router();

const createMemberShipProductController = require("../controllers/createMemberShipProductController");

// functions
router.route("/createMemberShipProducts").post((req, res) => createMemberShipProductController.create(req, res));
router.route("/createMemberShipProducts").get((req, res) => createMemberShipProductController.getAll(req, res));
router.route("/createMemberShipProducts/:id").get((req, res) => createMemberShipProductController.getById(req, res));
router.route("/createMemberShipProducts/:id").delete((req, res) => createMemberShipProductController.deleteById(req, res));
router.route("/createMemberShipProducts/:id").put((req, res) => createMemberShipProductController.update(req, res));

module.exports = router;
