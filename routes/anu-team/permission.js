const router = require("express").Router();

const permissionController = require("../../controllers/anu-team/permissionController");

// functions
router.route("/permissions").post((req, res) => permissionController.create(req, res));
router.route("/permissions").get((req, res) => permissionController.getAll(req, res));
router.route("/permissions/:id").get((req, res) => permissionController.getById(req, res));
router.route("/permissions/:id").delete((req, res) => permissionController.deleteById(req, res));
router.route("/permissions/:id").put((req, res) => permissionController.update(req, res));

module.exports = router;
