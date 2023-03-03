const router = require("express").Router();

const newCategoryController = require("../controllers/newCategoryController");

// functions
router.route("/").post((req, res) => newCategoryController.create(req, res));
router.route("/").get((req, res) => newCategoryController.getAll(req, res));
router.route("/:id").get((req, res) => newCategoryController.getById(req, res));
router
  .route("/:id")
  .delete((req, res) => newCategoryController.deleteById(req, res));
router.route("/:id").put((req, res) => newCategoryController.update(req, res));

module.exports = router;
