const router = require("express").Router();

const selectBrandController = require("../controllers/selectBrandController");

// functions
router.route("/").post((req, res) => selectBrandController.create(req, res));
router.route("/").get((req, res) => selectBrandController.getAll(req, res));
router.route("/:id").get((req, res) => selectBrandController.getById(req, res));
router
  .route("/:id")
  .delete((req, res) => selectBrandController.deleteById(req, res));
router.route("/:id").put((req, res) => selectBrandController.update(req, res));

module.exports = router;
