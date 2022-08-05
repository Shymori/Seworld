function clicar() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = 12;
    var num4 = 444.54;
   
    var conta= (parseInt(num1) * parseInt(num4))
    var result1 = parseInt(num2) * parseInt(num3)
    var resultadofinal = parseInt(conta) / (result1)
    document.querySelector(".resultado").innerHTML = (resultadofinal.toFixed(1));
}
