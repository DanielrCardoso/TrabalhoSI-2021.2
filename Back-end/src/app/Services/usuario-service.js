const { USUARIOS } = require("../Banco/BD-usuario")

exports.salvarUsuarios = (req, res) => {
    const usuario = req.body;
    USUARIOS.push({...usuario,idusuario:USUARIOS.length+1})
    res.status(200).json({ message: 'Usuario criado com sucesso' })
}

exports.listarUsuarios = (req, res) => {
    console.log("requisicao: Usuarios")

    console.log(req.params)
    user = USUARIOS.filter(value => getUser(value,req.body.nome,req.body.senha))
    res.status(200).json(user)
}

function getUser(value,nome,senha){
    console.log(value.nome,nome,senha)
    if(value.nome == nome){
        return value
    }
}