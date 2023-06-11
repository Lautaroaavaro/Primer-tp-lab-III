const app = Vue.createApp({
  data(){
    return{
      botonMegusta: 'Me Gusta',
      cantLikes: 200,
      like: false,
      botonSeguir: false,
    }
  },
methods: {
  sumarLike(){
    this.like = true;
    this.cantLikes +=1;
  },
  siguiendo(){
    this.botonSeguir = !this.botonSeguir;
  }
}

})


const appMontada = app.mount('#app');