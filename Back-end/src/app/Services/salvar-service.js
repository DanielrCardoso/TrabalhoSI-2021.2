const { DICASSALVAS } = require("../Banco/BD-salvos")

exports.favDica = (req, res) => {
    const dica = req.body;
    console.log(dica)
    DICASSALVAS.push(dica)
    res.status(200).json({ message: 'Dica salva com sucesso' })
}

exports.listarSalvos = (req, res) => {
    console.log("requisicao: dicas")
    DICASSALVAS_FIL = DICASSALVAS
    // .filter(value => buscarCurtidasUser(value,req.cod))
    res.status(200).json(DICASSALVAS_FIL)
}

function buscarSalvasUser(value,cod){
    if(value.usuario == cod){
        return value
    }
}