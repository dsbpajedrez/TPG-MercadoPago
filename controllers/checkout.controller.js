const { json } = require('express');
const mp = require('../modules/mercadoPago');
module.exports = {
    // Step 8
    process: async (req,res) => {
        try {     
            // let items = req.session.cart.map(item => Object({
            //     ...item,
            //     currency_id:'ARS',
            //     unit_price:item.price
            //     // unit_price:req.body.total
            // }))
            // console.log(items);

            // let link = await mp(items,12,0)
            // return res.redirect(link.body.init_point)
            let carrito = JSON.parse(req.body.total)
            let items = carrito?.map(item => 
                 Object({
                ...item,
                currency_id:'ARS',
                 unit_price:item.price,
                 quantity:item.cantidad
                
            }))
            let link = await mp(items,12,0)
            return res.redirect(link.body.init_point)
        } catch (error) {
            return res.send(error)
        }
    },
    // Step 9
    feedback: (req, res) => {       
        return res.send(req.query)
    }
};