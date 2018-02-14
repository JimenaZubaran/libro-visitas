//Funcion para agregar comentario
function loandPage(){
  $("#btn-agregar").click(agregarComentarios);
  $("#escribiendo-comentario").keyup(visualizarComentario)
  $("#btn-large").click(largeText);
  $("#btn-medium").click(mediumText);
  $("#btn-small").click(smallText);
  $("#btn-izquierda").click(leftText);
  $("#btn-centro").click(centerText);
  $("#btn-derecha").click(rightText);
  $("#btn-texto").click(changeText);
  $("#btn-fondo").click(backgroundText);
}

//Visualizar en textarea
function visualizarComentario(){
  var $nuevoComentario = $("#escribiendo-comentario").val();
  console.log($nuevoComentario);
  $("#mi-comentario").text($nuevoComentario);
}

//large
function largeText(){
  var $nuevoComentario = $("#escribiendo-comentario").val();
  $("#mi-comentario").css("font-size", 100);
}

//Medium
function mediumText(){
  var $nuevoComentario = $("#escribiendo-comentario").val();
  $("#mi-comentario").css("font-size", 50);
}

//Small
function smallText(){
  var $nuevoComentario = $("#escribiendo-comentario").val();
  $("#mi-comentario").css("font-size", 20);
}

//Left
function leftText(){
  var $nuevoComentario = $("#escribiendo-comentario").val();
  $("#mi-comentario").addClass("text-left")
}

//Center
function centerText(){
  var $nuevoComentario = $("#escribiendo-comentario").val();
  $("#mi-comentario").addClass("text-center")
}

//Right
function rightText(){
  var $nuevoComentario = $("#escribiendo-comentario").val();
  $("#mi-comentario").addClass("text-right")
}

//Color text
function changeText(){
  var $nuevoComentario = $("#escribiendo-comentario").val();
  var colorLetra = prompt(" qué color de letra quieres?");
  $("#mi-comentario").css("color", colorLetra)
}

//Color background
function backgroundText(){
  var $nuevoComentario = $("#escribiendo-comentario").val();
  var colorFondo = prompt(" qué color de fondo quieres?");
  $("#mi-comentario").css("background-color", colorFondo)
}


//Funcion para agregar el comentario
function agregarComentarios(){
var $nuevoComentario = $("#escribiendo-comentario").val();
//Crear con Dom
var $cajaComentarioPasado = $("<div />").addClass("caja-comentario-pasado");
var $textoPasado = $("<p />").addClass("texto");
//Poner atributos
$textoPasado.html($nuevoComentario);
//Agregar a html
$($cajaComentarioPasado).prepend($textoPasado);
$("#comentarios-pasados").prepend($cajaComentarioPasado);
}



$(document).ready(loandPage);
