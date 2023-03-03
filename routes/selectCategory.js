const router = require("express").Router();

const selectCategoryController = require("../controllers/selectCategoryController");

// functions
router.route("/").post((req, res) => selectCategoryController.create(req, res));
router.route("/").get((req, res) => selectCategoryController.getAll(req, res));
router.route("/:id").get((req, res) => selectCategoryController.getById(req, res));
router
  .route("/:id")
  .delete((req, res) => selectCategoryController.deleteById(req, res));
router.route("/:id").put((req, res) => selectCategoryController.update(req, res));

module.exports = router;
