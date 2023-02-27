const router = require("express").Router();

const FileController = require("../../controllers/SanClient/FileController");

// functions
router.route("/sanclients/file").post((req, res) => FileController.create(req, res));
router.route("/sanclients/file").get((req, res) => FileController.getAll(req, res));
router.route("/sanclients/file/:id").get((req, res) => FileController.getById(req, res));
router.route("/sanclients/file/:id").delete((req, res) => FileController.deleteById(req, res));
router.route("/sanclients/file/:id").put((req, res) => FileController.update(req, res));

module.exports = router;