const app = Vue.createApp({
  data(){
    return{
      botonMegusta: 'Me Gusta',
      cantLikes: 200,
      like: false,
    }
  },
methods: {
  sumarLike(){
    this.like = true;
    this.cantLikes +=1;
  }
}

})


const appMontada = app.mount('#app');