var likes = 200;

function sumarLike(){
  likes++
  document.getElementById("likes").innerHTML = likes;
  document.getElementById("megusta").disabled = true;
}

var seguir = false;

function cambiarSeguir() {
  var btnSeguir = document.getElementById("btnSeguir");
  if (seguir){
    seguir = false;
    btnSeguir.innerHTML = "Seguir"
  }
  else{
    seguir = true;
    btnSeguir.innerHTML = "Dejar de seguir" 
  }
}

function comentar(){
  var usuario = document.getElementById("usuario").value;
  var comentario = document.getElementById("comentario").value;
  var error = document.getElementById("mostrarError");

  if (usuario === ""){
    error.innerHTML = "Debe ingresar su usuario";
  }
  else if (comentario === ""){
    error.innerHTML = "Debe ingresar un comentario";
  }

}





