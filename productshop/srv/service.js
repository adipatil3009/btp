const cds = require('@sap/cds');

module.exports = cds.service.impl(async function (srv) {
    
    srv.on('printhelloworld', req=>{
        let name = req.data;
        console.log(name.input + ' world')

        return `${req.data.input} world`
    } )
})

