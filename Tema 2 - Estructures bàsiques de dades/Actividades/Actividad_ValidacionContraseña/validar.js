function validar() {
    var c = document.getElementById('contr').value;
    var errores = [];

    if (c.search(/[a-z]/) < 0) {
        errores.push("Tu contraseña debe tener al menos una letra minúscula.")
    }

    if (c.search(/[A-Z]/) < 0) {
        errores.push("Tu contraseña debe tener al menos una letra mayúscula.")
    }

    if (c.search(/[0-9]/) < 0) {
        errores.push("Tu contraseña debe tener al menos un número.")
    }

    if (c.search(/[\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:\-]/) < 0) {
        errores.push("Tu contraseña debe tener al menos un carácter especial.")
    }

    if (errores.length > 0) {
        document.getElementById("errores").innerHTML = errores.join("<br>")
        return false;
    }

    return true;
}