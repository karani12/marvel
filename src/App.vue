<template>
<div class="page">
 <router-link to="/" class="link">
 <h1>Marvel</h1>
 </router-link>

 <router-view>

 </router-view>
</div>

</template>

<script>
import axios from 'axios'


export default {
  
  name: 'App',
 

  methods:{
    getdata(){
      axios.get("https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=3890556c9e7b198d6f38f94ca7fc06a4&hash=ff2a4637dc51b3e7de3c8b4a5f3f7dc0")
      .then(res=>{
        console.log(res.data)
      })
    }
  },
  beforeMount(){
    // this.getdata()
  }

 

}

</script>

<style>
*{
  overflow-x: hidden;

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10px;
  width: 100vw;
  overflow-x: hidden;
  padding-left: 20px;
    display: grid;


}
a{
  color: red;
  text-decoration: none;
}
@media (max-width:578px) {
  #app{
    padding-left: 10px;
  }
}
</style>

