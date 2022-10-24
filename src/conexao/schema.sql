CREATE DATABASE hotelaria;

drop table if  exists tb_reservas;


create table tb_hotel (
ID SERIAL PRIMARY KEY,
nome text not null,
cnpj INTEGER NOT NULL,
pais text NOT NULL,
estado text not null,
cidade text not null
)

drop table if exists tb_reservas;

create table tb_reservas (
idHotel SERIAL PRIMARY KEY,
numeroreserva integer not null,
dataCheckin TIMESTAMP,
dataCheckout TIMESTAMP,
status INT NOT NULL
)

drop table if exists tb_hospedes;

create table tb_hospedes (
  id serial primary key,
  nome text not null,
  sobrenone text not null
)