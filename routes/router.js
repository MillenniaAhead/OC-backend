const router = require("express").Router();

// groups router
const groupsRouter = require("./groups");
router.use("/", groupsRouter);

// users router
const usersRouter = require("./users");
router.use("/", usersRouter);

// services router
const servicesMenuRouter = require("./servicesMenu");
router.use("/servicesMenu",servicesMenuRouter);

// services router
const servicesMenu2Router = require("./servicesMenu2");
router.use("/servicesMenu2",servicesMenu2Router);

// services router
const serviceTypeRouter = require("./serviceType");
router.use("/serviceType",serviceTypeRouter);

// services router
const singleServiceRouter = require("./singleService");
router.use("/singleService",singleServiceRouter);

// services router
const advancePricingRouter = require("./advancePricing");
router.use("/",advancePricingRouter);

// services router
const addNewRouter = require("./addNew");
router.use("/addNew",addNewRouter);

// services router
const selectCategoryRouter = require("./selectCategory");
router.use("/selectCategory",selectCategoryRouter);

// services router
const editSingleRouter = require("./editSingle");
router.use("/editSingle",editSingleRouter);

// services router
const newCategoryRouter = require("./newCategory");
router.use("/newCategory",newCategoryRouter);

// services router
const selectBrandRouter = require("./selectBrand");
router.use("/selectBrand",selectBrandRouter);

// services router
const newProductRouter = require("./newProduct");
router.use("/newProduct",newProductRouter);

// services router
const newPackageRouter = require("./newPackage");
router.use("/newPackage",newPackageRouter);

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

// Register router
const RegisterRouter = require("./Register/Register");
router.use("/", RegisterRouter);

// deals router
const dealsRouter = require("./anu-promote/deal");
router.use("/", dealsRouter); 

// newAppointments router
const newAppointmentsRouter = require("./anu-appointment/newAppointment");
router.use("/", newAppointmentsRouter);

// teamMembers router
const teamMembersRouter = require("./anu-team/teamMember");
router.use("/", teamMembersRouter);

// Under anu-team commission router
const commissionsRouter = require("./anu-team/commission");
router.use("/", commissionsRouter);

// Under anu-team permission router
const permissionsRouter = require("./anu-team/permission");
router.use("/", permissionsRouter);

// Under anu-team Opening hours router
const openingHoursRouter = require("./anu-team/openingHour");
router.use("/", openingHoursRouter);

module.exports = router;
