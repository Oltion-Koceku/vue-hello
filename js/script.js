const {createApp} = Vue;

createApp({
  data(){
    return{
      
      messaggio: "Hello World!!",
      clock: "00:00:00"

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
    }
  },
  mounted(){
    this.printClock()
    this.intervalClock()
  }
}).mount("#app")