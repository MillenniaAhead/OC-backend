const router = require("express").Router();

const teamMemberController = require("../../controllers/anu-team/teamMemberController");

// functions
router.route("/teamMembers").post((req, res) => teamMemberController.create(req, res));
router.route("/teamMembers").get((req, res) => teamMemberController.getAll(req, res));
router.route("/teamMembers/:id").get((req, res) => teamMemberController.getById(req, res));
router.route("/teamMembers/:id").delete((req, res) => teamMemberController.deleteById(req, res));
router.route("/teamMembers/:id").put((req, res) => teamMemberController.update(req, res));

module.exports = router;