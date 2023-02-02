const router = require("express").Router();

const CreateMembershipController = require("../../controllers/NewSale/Createmembership");

// functions
router.route("/createmembership").post((req, res) => CreateMembershipController.create(req, res));
router.route("/createmembership").get((req, res) => CreateMembershipController.getAll(req, res));
router.route("/createmembership/:id").get((req, res) => CreateMembershipController.getById(req, res));
router.route("/createmembership/:id").delete((req, res) => CreateMembershipController.deleteById(req, res));
router.route("/createmembership/:id").put((req, res) => CreateMembershipController.update(req, res));

module.exports = router;