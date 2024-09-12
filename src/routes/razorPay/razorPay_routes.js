const express = require('express')
const Razorpay = require('razorpay')

const RazorPayRoutes = express.Router()

const RAZOR_PAY_ID = process.env.RAZOR_PAY_ID
const RAZOR_PAY_SECRET = process.env.RAZOR_PAY_SECRET
const razorPayInstance = new Razorpay({
    key_id: RAZOR_PAY_ID,
    key_secret: RAZOR_PAY_SECRET
})

RazorPayRoutes.get('/pay/first/razorpay', async(request, reply) => {
    console.log('razor pay api reached')
    try {
        const options = {
            amount: 100,
            currency: 'INR',
            receipt: 'receipt',
            payment_capture: 1
        }
        await razorPayInstance.orders.create(options, (error, order) => {
            if(error) {
                console.log(error, 'here error')
                return reply.json(error)
            } else {
                const order_details = {
                    ...order,
                    key_id: RAZOR_PAY_ID,
                    name: 'Dhana Sai',
                    description: 'Tryout this',
                    image: '',
                    order_id: order.id,
                    handler: function(response) {
                        alert(response.razorpay_payment_id);
                        alert(response.razorpay_order_id);
                        alert(response.razorpay_signature);
                    },
                    prefill: {
                        name: "EVERYONE",
                        email: "gouthamgoldgoutham@gmail.com",
                        contact: "9133683491"
                    },
                    notes: {
                        message: "Pay the payment."
                    },
                    theme: {
                        color: "#3399cc"
                    }
                }
                console.log(order_details)
                return reply.status(200).json(order_details)
            }
        })
    } catch (error) {
        return reply.json(error)
    }
})

module.exports = RazorPayRoutes