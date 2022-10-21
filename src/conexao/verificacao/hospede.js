const yup = require("./config");

const schemaHospede = yup.object().shape({
    nome: yup.string().required("O nome é obrigatório"),
    sobrenome: yup.string().require("O sobrenome é obrigatório")
})
module.exports = schemaHospede