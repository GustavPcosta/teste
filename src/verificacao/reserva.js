const yup = require('./config');

const schemaReserva = yup.object().shape({
    numeroReserva:yup.string().required("O número da reserva é obrigatório"),
    apartamento:yup.string().required("O apartamento é obrigatório"),
    dataCheckin:yup.string().required("data de checKin é obrigatório"),
    dataCheckout:yup.string().required("data de checkout é obrigatório"),
})

module.exports = schemaReserva