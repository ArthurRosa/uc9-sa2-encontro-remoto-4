$(document).ready(function(){
    $('#sign-in').click(function name (params) {
        validarLogin();
    });
});

function validarLogin(){
    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;

    if(usuario.trim() == '' || senha.trim() == '') {
        alert('Favor preencher todos os campos!')
    }

    else(alert('Validando o login...'));
}