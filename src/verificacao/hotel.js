const yup = require('./config');

const schemaHotel = yup.object().shape({
nome: yup.string().required("nome é obrigatório"),
cnpj: yup.string().required("cnpj é obrigatório"),
pais: yup.string().required("pais é obrigatório"),
estado: yup.string().required("estado é obrigatório"),
cidade: yup.string().required("cidade é obrigatório")
});

module.exports = schemaHotel