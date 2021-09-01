<template>
  <div>
   <div class="container">
     <div class="intro" style="">
       <h1>Welcome to the <span class="marvel"> marvel</span>  universe</h1>
       <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Et mollitia eligendi 
         itaque, suscipit quos debitis, maiores esse cumque qui similique consectetur 
         libero amet! Modi consequatur distinctio eveniet error fuga minus, optio 
         quia consectetur perferendis, fugiat aut, dicta libero corrupti eius.
         <!-- {{bio}} -->
       </p>

     </div>
     <div class="button-more">
       <router-link class="route" to="/character">
       <button class="btn-see">See More</button>
       </router-link>
     </div>
     
   </div>

  </div>
</template>

<script>
export default {
  name:'Hero',
  props:{
    bio:String
  }
 
}
</script>

<style scoped>




*{
  overflow-x: hidden;
 

}
.container{
  width: 90%;
  height: 90vh;
}
.intro{
  width: 60%;
  text-align: left;
}
.intro>h1{
  font-size: 4em;
}
.intro>p{
  width: 80%;
  font-size: 1.2em;
}

.btn-see{
  width: 150px;
  height: 40px;
  border-radius: 5px;
  font-size: 1.2rem;
  background: red;
  color: white;
  border: none;
  outline: none;

}
.marvel{
  color: red;
}

@media (max-width:768px){
  .container{
    width: 100vw;
  }
  .intro{
    width: 100%;

  }
  .intro>h1{
    font-size: 2.8em;
    width: 90%;
  }
  .intro>p{
  width: 90%;
  font-size: 1em;
  }
  
}

</style>