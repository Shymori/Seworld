function clicar() {
    var num1 = document.getElementById("num1").value;
    var num2 = (15.1);
   
    var resultado = parseInt(num1) / parseInt(num2);
    document.querySelector(".resultado").innerHTML = Math.round (resultado);
}
