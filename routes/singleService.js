const router = require("express").Router();

const singleServiceController = require("../controllers/singleServiceController");

// functions
router.route("/").post((req, res) => singleServiceController.create(req, res));
router.route("/").get((req, res) => singleServiceController.getAll(req, res));
router.route("/:id").get((req, res) => singleServiceController.getById(req, res));
router
  .route("/:id")
  .delete((req, res) => singleServiceController.deleteById(req, res));
router.route("/:id").put((req, res) => singleServiceController.update(req, res));

module.exports = router;
