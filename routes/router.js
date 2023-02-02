const router = require("express").Router();

// groups router
const groupsRouter = require("./groups");
router.use("/", groupsRouter);

// users router
const usersRouter = require("./users");
router.use("/", usersRouter);

// reason router
const reasonRouter = require("./SettingClients/Reason");
router.use("/", reasonRouter);

// sources router
const sourcesRouter = require("./SettingClients/Sources");
router.use("/", sourcesRouter);

// calender router
const calenderRouter = require("./Calender/Calender");
router.use("/", calenderRouter);

// NewSale routers
const setupRouter = require("./NewSale/Setup");
router.use("/", setupRouter);

const checkoutRouter = require("./NewSale/Checkout");
router.use("/", checkoutRouter);

const ProductsRouter = require("./NewSale/Products");
router.use("/", ProductsRouter);

const NewProductsRouter = require("./NewSale/New");
router.use("/", NewProductsRouter);

const ServicesRouter = require("./NewSale/Services");
router.use("/", ServicesRouter);

const MembershipRouter = require("./NewSale/Membership");
router.use("/", MembershipRouter);

const CreateMembershipRouter = require("./NewSale/Createmembership");
router.use("/", CreateMembershipRouter);

const VoucherRouter = require("./NewSale/Voucher");
router.use("/", VoucherRouter);

const CreateVoucherRouter = require("./NewSale/Createvoucher");
router.use("/", CreateVoucherRouter);

const AppointmentsRouter = require("./NewSale/Appointments");
router.use("/", AppointmentsRouter);

const SalesHistoryRouter = require("./NewSale/SalesHistory");
router.use("/", SalesHistoryRouter);

const VoucherSoldRouter = require("./NewSale/VoucherSold");
router.use("/", VoucherSoldRouter);

const MembershipSoldRouter = require("./NewSale/MembershipSold");
router.use("/", MembershipSoldRouter);

module.exports = router;
