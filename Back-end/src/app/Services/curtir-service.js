const { DICASCURTIDAS } = require("../Banco/BD-curtidas")

exports.curtirDica = (req, res) => {
    const dica = req.body;
    console.log(dica)
    DICASCURTIDAS.push(dica)
    console.log(DICASCURTIDAS)
    res.status(200).json({ message: 'Dica curtida com sucesso' })
}

exports.listarCurtidas = (req, res) => {
    console.log("requisicao: dicas")
    DICASCURTIDAS_FIL = DICASCURTIDAS.filter(value => buscarCurtidasUser(value,""))
    res.status(200).json(DICASCURTIDAS_FIL)
}

function buscarCurtidasUser(value,cod){
    if(value.usuario == cod){
        return value
    }
}