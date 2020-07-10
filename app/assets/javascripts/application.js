// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
function operaciones(op)
{

    var ops = {
        sumar: function sumarNumeros(n1, n2) {
            return (parseInt(n1) + parseInt(n2));
        },

        restar: function restarNumeros(n1, n2) {
            return (parseInt(n1) - parseInt(n2));
        },

        multiplicar: function multiplicarNumeros(n1, n2) {
            return (parseInt(n1) * parseInt(n2));
        },

        dividir: function dividirNumeros(n1, n2) {
            return (parseInt(n1) / parseInt(n2));
        }


    };



    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;


    //Comprobamos si se ha introducido números en las cajas
    if (isNaN(parseFloat(document.getElementById('num1').value))) {
        document.getElementById('resultado').innerHTML="<span style='color: red;'>Por favor, escriba un número 1</span>";
        document.getElementById("num1").innerText = "0";
        document.getElementById("num1").focus();
        } else if (isNaN(parseFloat(document.getElementById('num2').value))) {
        document.getElementById('resultado').innerHTML="<span style='color: red;'>Por favor, escriba un número 2</span>";
        document.getElementById("num2").innerText = "0";
        document.getElementById("num2").focus();
    }
    else {
    //Si se han introducido los números en ámbas cajas, operamos:
        switch(op) {
            case 'sumar':
                var resultado = ops.sumar(num1, num2);
                document.getElementById('resultado').innerHTML="<span style='color: green;'>"+resultado+"</span>";
                break;
            case 'restar':
                var resultado = ops.restar(num1, num2);
                document.getElementById('resultado').innerHTML="<span style='color: green;'>"+resultado+"</span>";
                break;
            case 'multiplicar':
                var resultado = ops.multiplicar(num1, num2);
                document.getElementById('resultado').innerHTML="<span style='color: green;'>"+resultado+"</span>";
                break;
            case 'dividir':
                var resultado = ops.dividir(num1, num2);
                document.getElementById('resultado').innerHTML="<span style='color: green;'>"+resultado+"</span>";
                break;

        }
    }


}
