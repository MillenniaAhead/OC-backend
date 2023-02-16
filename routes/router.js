const router = require("express").Router();

// groups router
const groupsRouter = require("./groups");
router.use("/", groupsRouter);

// users router
const usersRouter = require("./users");
router.use("/", usersRouter);
const ClientRouter = require("./SanClient/client");
router.use("/", ClientRouter);
const ClientFeedRouter = require("./SanClient/clientFeed");
router.use("/", ClientFeedRouter);
const TipRouter = require("./SanClient/tip");
router.use("/", TipRouter);
const AppoinmentRouter = require("./SanClient/appoinment");
router.use("/", AppoinmentRouter);
const SanSetSalesRouter = require("./sansetsales");
router.use("/", SanSetSalesRouter);
const SSSTaxRouter = require("./sssTax");
router.use("/", SSSTaxRouter);
const SSSServiceRouter = require("./sssService");
router.use("/", SSSServiceRouter);
const SSSPayRouter = require("./sssAddPay");
router.use("/", SSSPayRouter);
const SSSCashRouter = require("./sssCash");
router.use("/", SSSCashRouter);
const SSSOtherRouter = require("./sssOther");
router.use("/", SSSOtherRouter);

module.exports = router;
