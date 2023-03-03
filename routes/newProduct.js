const router = require("express").Router();

const newProductController = require("../controllers/newProductController");

// functions
router.route("/").post((req, res) => newProductController.create(req, res));
router.route("/").get((req, res) => newProductController.getAll(req, res));
router.route("/:id").get((req, res) => newProductController.getById(req, res));
router
  .route("/:id")
  .delete((req, res) => newProductController.deleteById(req, res));
router.route("/:id").put((req, res) => newProductController.update(req, res));

module.exports = router;
