function calcularEdad() {
    // Obtener el año actual
    var anoActual = new Date().getFullYear();

    // Obtener el año de nacimiento ingresado por el usuario
    var anoNacimiento = document.getElementById("anoNacimiento").value;

    // Calcular la edad
    var edad = anoActual - anoNacimiento;

    // Mostrar el resultado
    document.getElementById("resultado").innerHTML = "La edad es: " + edad + " años.";
}