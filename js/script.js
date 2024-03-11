const {createApp} = Vue;

createApp({
  data(){
    return{
      messaggio: "Hello World!!"
    }
  }
}).mount("#app")