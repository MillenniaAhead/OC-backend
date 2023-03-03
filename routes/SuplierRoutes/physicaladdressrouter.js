const AddressControler = require("../../controllers/SuplierControler/AddressControler");

const router = require("express").Router();

router.route("/address").post((req, res) => AddressControler.create(req, res));
router.route("/address").get((req, res) => AddressControler.getAll(req, res));
router.route("/address/:id")
.delete((req, res) => sanprodtucsController.deleteById(req, res));
router.route("/address/:id").get((req, res) => AddressControler.getById(req, res));



module.exports = router;