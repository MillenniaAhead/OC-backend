const router = require("express").Router();

const editSingleController = require("../controllers/editSingleController");

// functions
router.route("/").post((req, res) => editSingleController.create(req, res));
router.route("/").get((req, res) => editSingleController.getAll(req, res));
router.route("/:id").get((req, res) => editSingleController.getById(req, res));
router
  .route("/:id")
  .delete((req, res) => editSingleController.deleteById(req, res));
router.route("/:id").put((req, res) => editSingleController.update(req, res));

module.exports = router;
