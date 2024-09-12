const express = require('express')

const PaytmChecksum = require('../../imports/paytm_check_sum')

const paytmRoutes = express.Router()

paytmRoutes.get('/get/first/paytm', async(request, reply) => {
    let paytmParams = {}
    paytmParams.body = {
        requestType: "Payment",
        mid: ""
    }
})
