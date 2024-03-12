const {createApp} = Vue;

createApp({
  data(){
    return{
      
      messaggio: "Hello World!!",
      clock: "00:00:00",
      colore: false,
      messaggioFor: "",
      img: "https://fastly.picsum.photos/id/811/200/300.jpg?hmac=h_NbFElSb3w71ZJbJxKMQg8QNgch87Gbus_L_rsfi6g"
    }
  },
  methods:{
    printClock(){
      const d = new Date();
      const h = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
      const m = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
      const s = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
      this.clock = `${h}:${m}:${s}`
    },
    intervalClock(){
      setInterval(()=>{
      this.printClock()
      }, 1000)
    },
    color(){
      if (this.colore === false) {
        this.colore = true
      }else{
        this.colore = false
        
      }
    }
    
  },
  mounted(){
    this.printClock()
    this.intervalClock()
  }
}).mount("#app")