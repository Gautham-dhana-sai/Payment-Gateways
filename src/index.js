const phonepeRoutes = require("./routes/phonepe/phonepe_routes")
const RazorPayRoutes = require("./routes/razorPay/razorPay_routes")

const routes = [
    RazorPayRoutes,
    phonepeRoutes
]

module.exports = routes