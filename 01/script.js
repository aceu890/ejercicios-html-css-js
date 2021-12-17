function validar()
{
    var usuario = document.getElementById("usuario").value;
    var Contraseña = document.getElementById("pass").value;	

    if(usuario == "chiko" && Contraseña == "1234")
    {
        alert("Usuario y Contraseña validos");
    }
    else
    {
        alert("Verifique sus credenciales");
    }
}