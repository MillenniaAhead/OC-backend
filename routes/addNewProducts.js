const router = require("express").Router();

const addNewProductController = require("../controllers/addNewProductController");

// functions
router.route("/addNewProducts").post((req, res) => addNewProductController.create(req, res));
router.route("/addNewProducts").get((req, res) => addNewProductController.getAll(req, res));
router.route("/addNewProducts/:id").get((req, res) => addNewProductController.getById(req, res));
router.route("/addNewProducts/:id").delete((req, res) => addNewProductController.deleteById(req, res));
router.route("/addNewProducts/:id").put((req, res) => addNewProductController.update(req, res));

module.exports = router;
