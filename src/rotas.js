const express = require("express");
const { atualizarHospede, cadastrarReserva } = require("./controladores/reserva");
const { atualizarHotel, cadastrarHotel, buscarHotel } = require("./controladores/hoteis");
const rotas = express();

rotas.post("/hospede",atualizarHospede);
rotas.put("/hospede",cadastrarReserva);

rotas.post("/hotel",cadastrarHotel);
rotas.put("/hotel",atualizarHotel);
rotas.get("/hotel",buscarHotel);
module.exports = rotas