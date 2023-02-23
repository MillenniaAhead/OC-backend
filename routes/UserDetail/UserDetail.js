const router = require("express").Router();

const UserDetailcontroller = require("../../controllers/Userdetail/Userdetail");

// functions
router.route("/userdetail").post((req, res) => UserDetailcontroller.create(req, res));
router.route("/userdetail").get((req, res) => UserDetailcontroller.getAll(req, res));
router.route("/userdetail/:id").get((req, res) => UserDetailcontroller.getById(req, res));
router.route("/userdetail/:id").delete((req, res) => UserDetailcontroller.deleteById(req, res));
router.route("/userdetail/:id").put((req, res) => UserDetailcontroller.update(req, res));

module.exports = router;