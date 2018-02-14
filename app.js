//Funcion para agregar comentario
function loandPage(){
  $("#btn-agregar").click(agregarComentarios);
  $("#escribiendo-comentario").keyup(visualizarComentario)
  $("#btn-large").click(largeText);
  $("#btn-medium").click(mediumText);
}



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

//Visualizar en textarea
function visualizarComentario(){
  var $nuevoComentario = $("#escribiendo-comentario").val();
  console.log($nuevoComentario);
  $("#mi-comentario").text($nuevoComentario);

}

function largeText(){
  var $nuevoComentario = $("#escribiendo-comentario").val();
  $("#mi-comentario").css("font-size", 100);
}

function mediumText(){
  var $nuevoComentario = $("#escribiendo-comentario").val();
  $("#mi-comentario").css("font-size", 50);
}


$(document).ready(loandPage);
