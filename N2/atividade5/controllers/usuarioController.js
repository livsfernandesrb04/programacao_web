const Usuario = require('../models/UsuarioModel');

function getLoginView(req, res) {
    let erro = req.query.erro;
    res.render('login.html', {erro});
}

function getCadastroView(req, res) {
    let erro = req.query.erro;
    res.render('cadastro.html', {erro});
}

function postCadastrarUsuario(req, res) {
    let dados_usuario = {
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
    }

    Usuario.create(dados_usuario).then(()=>{
        res.redirect('/login');
    }).catch((err)=>{
        res.redirect('cadastrar_usuario?erro=1');
    });
}


async function postLogin(req, res) {
    dados_login = {
        email: req.body.email,
        senha: req.body.senha
    }

    let usuario = await Usuario.findOne({
        where: {
            email: dados_login.email,
            senha: dados_login.senha
        }
    });

    if(usuario != null){
        console.log('Usuário autenticado');
        req.session.autorizado = true;
        req.session.usuario_nome = usuario.nome;
        req.session.usuario_email = usuario.email;
        res.redirect('/');
    }
    else{
        console.log('Usuário NÃO AUTENTICADO');
        res.redirect('/login?erro=1');
    }

}

function verificarAutenticacao(req, res, next) {
    if(req.session.autorizado){
        //Usuário autenticado
        console.log('usuário autenticado');
        next();
    }
    else{
        console.log('usuário não autorizado');// Por que autorizado e não autenticado?
        res.redirect('/login');
    }
}

module.exports = {
    getLoginView,
    getCadastroView,
    postCadastrarUsuario,
    postLogin,
    verificarAutenticacao
}