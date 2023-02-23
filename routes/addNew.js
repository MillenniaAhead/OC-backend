const router = require("express").Router();

const addNewController = require("../controllers/addNewController");

// functions
router.route("/").post((req, res) => addNewController.create(req, res));
router.route("/").get((req, res) => addNewController.getAll(req, res));
router.route("/:id").get((req, res) => addNewController.getById(req, res));
router
  .route("/:id")
  .delete((req, res) => addNewController.deleteById(req, res));
router.route("/:id").put((req, res) => addNewController.update(req, res));

module.exports = router;
