// // Step 7

// const mercadoPago = require('mercadopago');
// // const { feedback } = require('../controllers/checkout.controller');
// // const {feedback} = require('../controllers/checkout.controller')
// const credencial = process.env.MP || 'TEST-3645381466893064-070611-351447983b87f23645ba15f728ce6668-157889446'
// // const credencial = process.env.MP || 'TEST-5031 7557 3453 0604'
// let server = process.env.SERVER || 'http://localhost:3030';
// const feedback = `${server}/checkout/feedback`

// // const credential = ??? 
// // let server = ???
// // const success = `${server}/checkout/feedback`
// // const failure = ``
// // const pending = ``

// const mp  = async (items,coutes,shipping) => {
//     try {
//         // Magic
//         mercadoPago.configure({
//             access_token:credencial
//         })
//         let config = {
//             items: items,
//             back_urls:{
//                 success: feedback,
//                 failure: feedback,
//                 pending: feedback
//             },
//             payment_methods:{
//                 installments: coutes
//             },
//             auto_return: 'approved',
//             shipments:{
//                 cost:shipping,
//                 mode:'Not specify'
//             }

//         }
//         console.log(mercadoPago.preferences.create(config));
//         let preference = await mercadoPago.preferences.create(config)

//         return  preference

//     } catch (error) {
//         throw new Error(error)
//     }
// }
// module.exports = mp
// Step 7
const mercadoPago = require('mercadopago')
const credential = process.env.MP || "TEST-3645381466893064-070611-351447983b87f23645ba15f728ce6668-157889446"
let server = process.env.SERVER || "http://localhost:3030"
const feedback = `${server}/checkout/feedback`

const mp  = async (items,cuotes,shipping) => {
    try {
        // Magic
        mercadoPago.configure({
            access_token: credential
        })
        let config = {
            items:items,
            back_urls:{
                success: feedback,
                failure: feedback,
                pending: feedback
            },
            payment_methods:{
                installments:cuotes
            },
            auto_return: "approved",
            shipments:{
                cost: shipping,
                mode: "not_specified",
            }
        }

        let preference = await mercadoPago.preferences.create(config)
        return preference

    } catch (error) {
        throw new Error(error)
    }
}
module.exports = mp
