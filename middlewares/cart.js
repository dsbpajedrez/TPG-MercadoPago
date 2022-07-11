module.exports =(req,res,next) => {
    // Step 1 crear carrito
    if(req.session && !req.session.cart){
        req.session.cart = []
    }
    res.locals.cart = req.session.cart
    next();
};