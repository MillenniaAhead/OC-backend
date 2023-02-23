const router = require("express").Router();

const MembershipSoldController = require("../../controllers/NewSale/Membershipsold");

// functions
router.route("/membershipsold").post((req, res) => MembershipSoldController.create(req, res));
router.route("/membershipsold").get((req, res) => MembershipSoldController.getAll(req, res));
router.route("/membershipsold/:id").get((req, res) => MembershipSoldController.getById(req, res));
router.route("/membershipsold/:id").delete((req, res) => MembershipSoldController.deleteById(req, res));
router.route("/membershipsold/:id").put((req, res) => MembershipSoldController.update(req, res));

module.exports = router;