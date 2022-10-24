const yup = require('./config');

const schemaHospede = yup.object().shape({
nome: yup.string().required(),
sobrenome:yup.string().required()
});
module.exports = schemaHospede