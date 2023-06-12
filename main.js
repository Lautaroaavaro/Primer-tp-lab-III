const app = Vue.createApp({
  data(){
    return{
      botonMegusta: 'Me Gusta',
      cantLikes: 200,
      like: false,
      botonSeguir: false,
      ingresoUsuario: '',
      ingresoComentario: '',
      errorUsuario: false,
      errorComentario: false,
      comentarios: []
    }
  },
methods: {
  sumarLike(){
    this.like = true;
    this.cantLikes +=1;
  },
  siguiendo(){
    this.botonSeguir = !this.botonSeguir;
  },
  agregComentario(){

    if(!this.ingresoUsuario){
      this.errorUsuario = true;
    }
    else{
      this.errorUsuario = false;
    }

    if(!this.ingresoComentario){
      this.errorComentario = true;
    }
    else{
      this.errorComentario = false;
    }

    if(this.ingresoUsuario && this.ingresoComentario){
      this.comentarios.push({
        ingresoUsuario: this.ingresoUsuario,
        ingresoComentario: this.ingresoComentario
      })
    }
     
  },
  borrarComentario(borrar){
    this.comentarios.splice(borrar, 1);
  }

}

})


const appMontada = app.mount('#app');