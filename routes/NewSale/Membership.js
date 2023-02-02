const router = require("express").Router();

const MembershipController = require("../../controllers/NewSale/Membership");

// functions
router.route("/membership").post((req, res) => MembershipController.create(req, res));
router.route("/membership").get((req, res) => MembershipController.getAll(req, res));
router.route("/membership/:id").get((req, res) => MembershipController.getById(req, res));
router.route("/membership/:id").delete((req, res) => MembershipController.deleteById(req, res));
router.route("/membership/:id").put((req, res) => MembershipController.update(req, res));

module.exports = router;