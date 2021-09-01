<template>
  <div>
    <Hero 
    >
    </Hero>
    <div class="characters">
      <h1>Character</h1>
      <card/>
    </div>
  </div>
</template>
<script>
import Hero from '../components/Hero'
import Card from '../components/Card'
import axios from 'axios'
export default {
  components:{
    Hero, Card
  },
  data() {
    return {
      bio:{
        type:String,
        default:"Character has no bio"
      },
      n:{
        type:Number

      },
      
      data:{
        type:Array,
        default:()=>[]

      }
    }
  },  
  
  methods: {
  async getData(){
     await axios.get("https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=3890556c9e7b198d6f38f94ca7fc06a4&hash=ff2a4637dc51b3e7de3c8b4a5f3f7dc0")
      .then(res=>{
        this.data=res.data.data.results
        console.log(this.data[1].description)
        // for (let index = 0; index < this.data.length; index++) {
        //   this.n = this.data[index]
          
        // }
      })
    },

    getdescription(){
      if(this.bio ===""){
        this.bio = "User has no bio"
      }
    }
  },
  mounted() {
    this.getData()
  },
 
}

</script>
<style>
.characters{
  overflow-y: visible;
  position: relative;

}
</style>