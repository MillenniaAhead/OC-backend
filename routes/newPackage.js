const router = require("express").Router();

const newPackageController = require("../controllers/newPackageController");

// functions
router.route("/").post((req, res) => newPackageController.create(req, res));
router.route("/").get((req, res) => newPackageController.getAll(req, res));
router.route("/:id").get((req, res) => newPackageController.getById(req, res));
router
  .route("/:id")
  .delete((req, res) => newPackageController.deleteById(req, res));
router.route("/:id").put((req, res) => newPackageController.update(req, res));

module.exports = router;
