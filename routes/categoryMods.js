const router = require("express").Router();

const categoryModController = require("../controllers/categoryModController");

// functions
router.route("/categoryMods").post((req, res) => categoryModController.create(req, res));
router.route("/categoryMods").get((req, res) => categoryModController.getAll(req, res));
router.route("/categoryMods/:id").get((req, res) => categoryModController.getById(req, res));
router.route("/categoryMods/:id").delete((req, res) => categoryModController.deleteById(req, res));
router.route("/categoryMods/:id").put((req, res) => categoryModController.update(req, res));

module.exports = router;
