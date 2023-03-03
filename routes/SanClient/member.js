const router = require("express").Router();

const MemberController = require("../../controllers/SanClient/MemberController");

// functions
router.route("/sanclients/member").post((req, res) => MemberController.create(req, res));
router.route("/sanclients/member").get((req, res) => MemberController.getAll(req, res));
router.route("/sanclients/member/:id").get((req, res) => MemberController.getById(req, res));
router.route("/sanclients/member/:id").delete((req, res) => MemberController.deleteById(req, res));
router.route("/sanclients/member/:id").put((req, res) => MemberController.update(req, res));

module.exports = router;