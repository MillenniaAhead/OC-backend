const router = require("express").Router();

const servicesMenu2Controller = require("../controllers/servicesMenu2Controller");

// functions
router.route("/").post((req, res) => servicesMenu2Controller.create(req, res));
router.route("/").get((req, res) => servicesMenu2Controller.getAll(req, res));
router.route("/:id").get((req, res) => servicesMenu2Controller.getById(req, res));
router
  .route("/:id")
  .delete((req, res) => servicesMenu2Controller.deleteById(req, res));
router.route("/:id").put((req, res) => servicesMenu2Controller.update(req, res));

module.exports = router;
