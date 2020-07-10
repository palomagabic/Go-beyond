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

var editor = (function() {
    var canvas = document.getElementById('canvas'), // accede al canvas
        context = canvas.getContext('2d'), //contendra el contexto  del canvas
        pixelVision = {}; // Creamos este objeto para poder acceder desde afuera del objeto editor
    pixelVision.height = 0;
    pixelVision.width = 0;
    pixelVision.cargarImagen = function() {
        var imageObj = new Image(); // se crea una nueva imagen
        var archivoImagenSubir = document.getElementById('subirimagen'); // asignamos lo que tenga la etiquta subirimagen
        if (archivoImagenSubir.files && archivoImagenSubir.files[0]) { //si archivoImagenSubir existe , otenemos  lo que contenga en la posicion 0
            var reader = new FileReader(); // creamos un objeto  FileReader para leer la imagen seleccionada
            reader.onload = function(event) {
                var dataUri = event.target.result, //obtenermos el resultado del evento  onload
                    img = document.createElement("img"); // creamo un elemento imagen

                img.src = dataUri;
                imageObj.src = img.src; // guarda la imagen que se cargo
            };

            reader.onerror = function(event) { // si ocurre algun error
                console.error("No se puede leer al archivo, cdigo de error: " + event.target.error.code);
            };
            reader.readAsDataURL(archivoImagenSubir.files[0]); // lee lo datos del archivo cargado
        }

        imageObj.onload = function() {
            pixelVision.height = imageObj.height; //obtenemos el alto de la imagen
            pixelVision.width = imageObj.width; //obtenemos el ancho de la imagen
            //asignamos  el ancho y el alto al canvas para que el camvas sea dinamico y obtenga los tamanio de la imagen
            canvas.setAttribute("width", pixelVision.width)
            canvas.setAttribute("height", pixelVision.height)
            context.drawImage(imageObj, 0, 0); // pintamos la imagen en el camvas
        }

    };

    //obtiene las datos de la imagen que esta actualmente en el canvas
    pixelVision.getDatosImg = function() {
        return context.getImageData(0, 0, canvas.width, canvas.height);
    };

    // agregamos un objeto filtros y otro de operaciones
    pixelVision.filtros = {}; // tendra todas los filtros que se haran a una imagen (gris,bordes, desenfoque, etc.)
    pixelVision.operaciones = {}; // tendras todas las operaciones que se haran a una imagen(morfologicas,escalado, compresion, etc.)
    //+-----------------------------------------------------------------------------|
    //|                                                                             |
    //|METODO PARA HACER GRIS UNA IMAGEN                                            |
    //|                                                                             |
    //+-----------------------------------------------------------------------------+
    pixelVision.filtros.gris = function() {
        var imageData = editor.getDatosImg(),
            pixels = imageData.data,
            numPixels = imageData.width * imageData.height;
        for (var i = 0; i < numPixels; i++) {
            var r = pixels[i * 4];
            var g = pixels[i * 4 + 1];
            var b = pixels[i * 4 + 2];
            var grey = (r + g + b) / 3;
            pixels[i * 4] = grey;
            pixels[i * 4 + 1] = grey;
            pixels[i * 4 + 2] = grey;
        }
        context.putImageData(imageData, 0, 0);
    };

    //+-----------------------------------------------------------------------------|
    //|                                                                             |
    //|METODO PARA APLICAR FILTRO NEGATIVO A UNA IMAGEN                             |
    //|                                                                             |
    //+-----------------------------------------------------------------------------+
    pixelVision.filtros.negativo = function() {
        var imageData = editor.getDatosImg(),
            pixels = imageData.data,
            numPixels = imageData.width * imageData.height;
        for (var i = 0; i < numPixels; i++) {
            var r = pixels[i * 4];
            var g = pixels[i * 4 + 1];
            var b = pixels[i * 4 + 2];
            pixels[i * 4] = 255 - r;
            pixels[i * 4 + 1] = 255 - g;
            pixels[i * 4 + 2] = 255 - b;
        }
        context.putImageData(imageData, 0, 0);
    };
    //+-----------------------------------------------------------------------------|
    //|                                                                             |
    //|METODO PARA APLICAR CONTRASTE A UNA IMAGEN                                   |
    //|                                                                             |
    //+-----------------------------------------------------------------------------+
    pixelVision.filtros.contraste = function(contrast) {
        var imageData = editor.getDatosImg(),
            pixels = imageData.data,
            numPixels = imageData.width * imageData.height,
            factor;
        contrast || (contrast = 100); // Default value
        factor = (259 * (contrast + 255)) / (255 * (259 - contrast));
        for (var i = 0; i < numPixels; i++) {
            var r = pixels[i * 4];
            var g = pixels[i * 4 + 1];
            var b = pixels[i * 4 + 2];
            pixels[i * 4] = factor * (r - 128) + 128;
            pixels[i * 4 + 1] = factor * (g - 128) + 128;
            pixels[i * 4 + 2] = factor * (b - 128) + 128;
        }
        context.putImageData(imageData, 0, 0);
    };

    //+-----------------------------------------------------------------------------|
    //|                                                                             |
    //|METODO PARA APLICAR TRANSPARENCIA A UNA IMAGEN                               |
    //|                                                                             |
    //+-----------------------------------------------------------------------------+
    pixelVision.filtros.transparencia = function(alpha) {
        var imageData = editor.getDatosImg(),
            pixels = imageData.data,
            numPixels = imageData.width * imageData.height;
        alpha || (alpha = 100); // Default value
        for (var i = 0; i < numPixels; i++) {
            var r = pixels[i * 4];
            var g = pixels[i * 4 + 1];
            var b = pixels[i * 4 + 2];
            pixels[i * 4 + 3] = alpha;
        }
        context.putImageData(imageData, 0, 0);
    };

    //+-----------------------------------------------------------------------------|
    //|                                                                             |
    //|METODO HISTOGRAMA DE UNA IMAGEN PARA BINARIZAR                               |
    //|                                                                             |
    //+-----------------------------------------------------------------------------+

    pixelVision.filtros.histograma = function(imageData) {
        var imageData = null || editor.getDatosImg()
        var pixels = imageData.data,
            numPixels = imageData.width * imageData.height,
            r = 0,
            histograma = [];
        for (var i = 0; i < numPixels; i++) {
            r = pixels[i * 4];
            if (isNaN(histograma[r])) {
                histograma[r] = 0;
            } else {
                histograma[r]++;
            }
        }
        return histograma;
    };

    //+-----------------------------------------------------------------------------|
    //|                                                                             |
    //|METODO PARA SE OBTIENE EL UMBRAL DE UNA IMAGEN                               |
    //|                                                                             |
    //+-----------------------------------------------------------------------------+
    pixelVision.filtros.umbral = function() {
        var imageData = null || editor.getDatosImg(),
            pixels = imageData.data,
            numPixels = imageData.width * imageData.height,
            sum = 0;
        var histogram = pixelVision.filtros.histograma(imageData);
        var sumB = 0,
            wB = 0,
            wF = 0,
            varMax = 0,
            threshold = 0;
        for (var i = 0; i < 256; i++) {
            sum += i * (histogram[i] || 0);
        }
        for (var i = 256; i >= 0; i--) {
            wB += (histogram[i] || 0);
            if (wB == 0) continue;
            wF = numPixels - wB;
            if (wF == 0) break;
            sumB += (i * (histogram[i] || 0));
            var mB = sumB / wB;
            var mF = (sum - sumB) / wF;
            var varBetween = wB * wF * (mB - mF) * (mB - mF);
            if (varBetween > varMax) {
                varMax = varBetween;
                threshold = i;
            }
        }
        return threshold;
    };

    //+-----------------------------------------------------------------------------|
    //|                                                                             |
    //|METODO PARA BINARIZAR  UNA IMAGEN POR EL METODO DE OTSU                                           |
    //|                                                                             |
    //+-----------------------------------------------------------------------------+
    pixelVision.filtros.blancoNegro = function() {
        var imageData = null || editor.getDatosImg(),
            pixels = imageData.data,
            numPixels = imageData.width * imageData.height,
            red = 0,
            newPixel = 0,
            threshold = pixelVision.filtros.umbral(imageData);
        for (var i = 0; i < numPixels; i++) {
            // obtener un pixel, dado que la imagen esta en escala de grises, da lo mismo obtener un pixel de R,G o B
            red = pixels[i * 4];
            if (red > threshold) { // si el color es mayor del valor de umbral, ponlo a blanco
                newPixel = 255;
            } else { // si el color es manor del valor de umbral, ponlo a negro
                newPixel = 0;
            }
            pixels[i * 4] = newPixel;
            pixels[i * 4 + 1] = newPixel;
            pixels[i * 4 + 2] = newPixel;
        }
        context.putImageData(imageData, 0, 0);
    };

    //+-----------------------------------------------------------------------------|
    //|                                                                             |
    //|METODO PARA APLICAR FILTRO SEPIA A UNA IMAGEN                                |
    //|                                                                             |
    //+-----------------------------------------------------------------------------+
    pixelVision.filtros.sepia = function() {
        var imageData = editor.getDatosImg(),
            pixels = imageData.data,
            numPixels = imageData.width * imageData.height;
        for (var i = 0; i < numPixels; i++) {
            var r = pixels[i * 4];
            var g = pixels[i * 4 + 1];
            var b = pixels[i * 4 + 2];
            pixels[i * 4] = (r * .393) + (g * .769) + (b * .189);
            pixels[i * 4 + 1] = (r * .349) + (g * .686) + (b * .168);
            pixels[i * 4 + 2] = (r * .272) + (g * .534) + (b * .131);
        }
        context.putImageData(imageData, 0, 0);
    };
    return pixelVision;
}());
pixelVision.getDatosImg = function() {
        return context.getImageData(0, 0, canvas.width, canvas.height);
    };
