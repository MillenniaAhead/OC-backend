const router = require("express").Router();

const servicesMenuController = require("../controllers/servicesMenuController");

// functions
router.route("/").post((req, res) => servicesMenuController.create(req, res));
router.route("/").get((req, res) => servicesMenuController.getAll(req, res));
router.route("/:id").get((req, res) => servicesMenuController.getById(req, res));
router
  .route("/:id")
  .delete((req, res) => servicesMenuController.deleteById(req, res));
router.route("/:id").put((req, res) => servicesMenuController.update(req, res));

module.exports = router;
