const { axios } = require('axios')
const express = require('express')
const { ExternalApis } = require('../common/external_apis')

const phonepeRoutes = express.Router()

phonepeRoutes.get('/pay/first/phonepe', async(request, reply) => {
    console.log('phonepe api hit')
    await axios.get(ExternalApis.APIS.phonepe_test).then((res) => {
        console.log(res)
        console.log('inside api')
    })
    console.log('outside api')
})

module.exports = phonepeRoutes