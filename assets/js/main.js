$(document).ready(function(){

    let num1 = 0;
    let num2 = 0;
    let resultado = 0;

    $("#resultado").css("color","red");
    $("#resultado").css("font-size","5rem");
    $("#resultado").hide();
    $("h1").click(function(){
        $(this).text("El mejor pais de chule ermano")
    });

    $("#btnSumar").click(function(e){
        console.log("Suma");
        
        $("#error1").text("");
        $("#error2").text("");

        if($("#numero1").val() === ""){
            $("#error1").text("Debe agregar el primer número");
            $("#error1").css("color", "red");
            return;
        }

        if($("#numero2").val() === ""){
            $("#error2").text("Debe agregar el segundo número");
            $("#error2").css("color", "red");
            return;
        }

        num1 = parseInt($("#numero1").val());
        num2 = parseInt($("#numero2").val());
        resultado = num1+num2;
        $("#resultado").show();
        $("#resultado").text(resultado);
    });

    $("#btnRestar").click(function(e){
        console.log("Resta");
        $("#error1").text("");
        $("#error2").text("");

        if($("#numero1").val() === ""){
            $("#error1").text("Debe agregar el primer número");
            $("#error1").css("color", "red");
            return;
        }

        if($("#numero2").val() === ""){
            $("#error2").text("Debe agregar el segundo número");
            $("#error2").css("color", "red");
            return;
        }

        num1 = parseInt($("#numero1").val());
        num2 = parseInt($("#numero2").val());
        resultado = num1-num2;
        $("#resultado").show();
        $("#resultado").text(resultado);
    });

    $("#btnMultiplicar").click(function(e){
        console.log("Multiplica");
        $("#error1").text("");
        $("#error2").text("");

        if($("#numero1").val() === ""){
            $("#error1").text("Debe agregar el primer número");
            $("#error1").css("color", "red");
            return;
        }

        if($("#numero2").val() === ""){
            $("#error2").text("Debe agregar el segundo número");
            $("#error2").css("color", "red");
            return;
        }

        num1 = parseInt($("#numero1").val());
        num2 = parseInt($("#numero2").val());
        resultado = num1*num2;
        $("#resultado").show();
        $("#resultado").text(resultado);
    });

    $("#btnDividir").click(function(e){
        console.log("Divide");
        $("#error1").text("");
        $("#error2").text("");

        if($("#numero1").val() === ""){
            $("#error1").text("Debe agregar el primer número");
            $("#error1").css("color", "red");
            return;
        }

        if($("#numero2").val() === ""){
            $("#error2").text("Debe agregar el segundo número");
            $("#error2").css("color", "red");
            return;
        }

        num1 = parseInt($("#numero1").val());
        num2 = parseInt($("#numero2").val());
        resultado = num1/num2;
        $("#resultado").show();

        if(num2 === 0){
            $("#resultado").text("No se puede dividir por cero");
        } else {
            $("#resultado").text(resultado);
        };
        
    });

    $("#btnLimpiar").click(function(e){
        $("#resultado").text("");
    });
});

// let idChile = document.getElementById("idChile");

// idChile.addEventListener("click", function(){
//     idChile.innerHTML = "Somoh prusianoh";
// })

