const router = require("express").Router();

// groups router
const groupsRouter = require("./groups");
router.use("/", groupsRouter);

// users router
const usersRouter = require("./users");
router.use("/", usersRouter);
// sanClient router
const ClientRouter = require("./SanClient/client");
router.use("/", ClientRouter);
const ClientFeedRouter = require("./SanClient/clientFeed");
router.use("/", ClientFeedRouter);
const TipRouter = require("./SanClient/tip");
router.use("/", TipRouter);
const AppoinmentRouter = require("./SanClient/appoinment");
router.use("/", AppoinmentRouter);

// santeSales router
const InvoiceRouter = require("./SanteSales/invoice");
router.use("/", InvoiceRouter);
const SaleInvoiceRouter = require("./SanteSales/saleInvoice");
router.use("/", SaleInvoiceRouter);
const TaxRouter = require("./SanteSales/tax");
router.use("/", TaxRouter);
const ServiceRouter = require("./SanteSales/service");
router.use("/", ServiceRouter);
const PayRouter = require("./SanteSales/addPay");
router.use("/", PayRouter);
const CashRouter = require("./SanteSales/cash");
router.use("/", CashRouter);
const OtherRouter = require("./SanteSales/other");
router.use("/", OtherRouter);

module.exports = router;
