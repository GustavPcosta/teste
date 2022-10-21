const knex = require('../conexao/conexao');
const schemaHotel = require('../verificacao/hotel');

const cadastrarHotel = async(req,res)=>{
    const {nome,cnpj,pais,estado,cidade} = req.bdy;

    try {
    await schemaHotel.validate(req.body);
    const verificarNome = await knex("tb_hotel").where({nome}).first();
    if(verificarNome){
        return res.status(400).json("Já existe um hotel cadastrado com esse nome");
    }
    const novoHotel = await knex('tb_hotel').insert({
        nome,
        cnpj,
        pais,
        estado,
        cidade
    }).returning("*");
    if(!novoHotel){
        return res.status(400).json("Houve um erro ao cadastrar o novo hotel");
    }
    return res.status(201).json("Hotel cadastrado com sucesso")
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
const atualizarHotel = async(req,res)=>{
    const {id} = req.params;
    const {nome,cnpj,pais,estado,cidade} = req.bdy;

    try {
    await schemaHotel.validate(req.body);
    const verificarNome = await knex("tb_hotel").where({nome}).first();
    if(verificarNome){
        return res.status(400).json("Já existe um hotel cadastrado com esse nome");
    }
    const atualizar = await knex('tb_hotel').where({id}).update(nome,cnpj,pais,estado,cidade);
        if(atualizar){
            return res.status(400).json("Não foi possível atualizar o hotel");
        }
        return res.status(200).json("Hotel atualizado com sucesso");
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
const buscarHotel = async(req,res) =>{
    const {nome} = req.params;
        try {
            const buscar = await knex("tb_hotel").where("nome" ,'like', `%${nome}`);
            if(!buscar){
                return res.status(404).josn("não existe nenhum hotel com esse nome");
            }
            return res.status(200).json(buscar)
        } catch (error) {
            return res.status(500).json(error.message)
        }
}

module.exports ={
    cadastrarHotel,
    atualizarHotel,
    buscarHotel
}