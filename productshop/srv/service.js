const cds = require('@sap/cds');

module.exports = cds.service.impl(async function (srv) {
    
    srv.on('printhelloworld', req=>{
        let name = req.data;
        console.log(name.input + ' world')

        return `${req.data.input} world`
    } )

    srv.on('addition', req=>{
        console.log(req.data)
        let result = req.data.num1 + req.data.num2;
        return result;
    })

    srv.on('myFunction', req=>{
        let result ={}

        if (req.data.catogery == 1 ) {
            result.product = "BMW",
            result.price = '12000'
            result.location = 'New Delhi'
        }
        else {
            result.product = "Audi",
            result.price = '10000'
            result.location = 'Mumbai'
        }

        return result;
    })
})

