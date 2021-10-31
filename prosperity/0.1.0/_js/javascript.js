function validateLogonCriarConta(){
    passwd = formularioData.logonFormPasswd.value;
    passwdConfirm = formularioData.logonFormPasswdConfirm.value;
    inputCode = formularioData.iConfirmCode.value;
    iCodeVisible = formularioData.iConfirmCode.offsetParent;

    if ((iCodeVisible != null) && (inputCode == "")){
        alert("Código de verificação inválido !");
        return false;
    } 
    if ((iCodeVisible != null) && (inputCode != "")){
        window.open("home.html");
        return true;
    } 
        
    if ((iCodeVisible == null) && (logonValidaSenha(passwd,passwdConfirm))){
//        window.open("http://www.w3schools.com","_blank");
        document.getElementById("dConfirmCode").style.display = "block";
    }
    return false;
}
function logonValidaSenha(pwd,pwdc){
    if (pwd == pwdc) {
        alert("Senha Válida !");
        return true;
    } else {
        alert("Senha Inválida !!");
        return false;
    }
}