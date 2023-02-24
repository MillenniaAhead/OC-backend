const router = require("express").Router();

const addCatModController = require("../controllers/addCatModController");

// functions
router.route("/addCatMods").post((req, res) => addCatModController.create(req, res));
router.route("/addCatMods").get((req, res) => addCatModController.getAll(req, res));
router.route("/addCatMods/:id").get((req, res) => addCatModController.getById(req, res));
router.route("/addCatMods/:id").delete((req, res) => addCatModController.deleteById(req, res));
router.route("/addCatMods/:id").put((req, res) => addCatModController.update(req, res));

module.exports = router;
