
const knex = require('knex')({
    client:'pg',
    connection:{
        host:'localhost',
        port:5432,
        user:'postgres',
        database:'hotelaria',
        password:""

    }
})
module.exports = knex;