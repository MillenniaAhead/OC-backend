const router = require("express").Router();

const selectCategoryProductController = require("../controllers/selectCategoryProductController");

// functions
router.route("/selectCategoryProducts").post((req, res) => selectCategoryProductController.create(req, res));
router.route("/selectCategoryProducts").get((req, res) => selectCategoryProductController.getAll(req, res));
router.route("/selectCategoryProducts/:id").get((req, res) => selectCategoryProductController.getById(req, res));
router
    .route("/selectCategoryProducts/:id")
    .delete((req, res) => selectCategoryProductController.deleteById(req, res));
router.route("/selectCategoryProducts/:id").put((req, res) => selectCategoryProductController.update(req, res));

module.exports = router;
