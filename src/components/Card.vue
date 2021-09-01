<template>
    <div class="b-c"   >
        <div class="container" v-for="(data, index) in data" :key="data.id"  >
            <img class="thumbnail" src="{{data.thumbnail.path + '.'+'data.thumnail.extension'}}
            " alt="image">
            <div class="c-head">
                <h1>{{index}} {{data.name}}</h1>
            </div>
            <div class="c-body" >
                <h2 >Bio</h2>

                <p v-if="data.description === ''">Character has no bio. I'm not sure but you can find out more about them in the series below </p>
               
                <p v-else>{{data.description}}</p>
            </div>
            <div v-for="series in data.series.items" :key="series.name" class="c-footer">
              
             <p  class="series">
                 {{series.name}}
             </p>
            </div>
        </div>
      
       
    </div>
</template>
<script>
import axios from "axios"
export default {
    name:'Card',
   
    data() {
        return {
            items:Array,
            data:Array

        }
    },
   methods: {
  async getData(){
     await axios.get(" ")
      .then(res=>{
        this.data=res.data.data.results
        
    
      })
    },
 
  },
  mounted() {
    this.getData()
  },
 
}
</script>
<style  scoped>

*{
  overflow-x: hidden;

}
.c-footer{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
.series{
    background: rgba(208, 166, 228, 0.5);
    height: fit-content;
    min-width: fit-content;
    padding: 10px;
    border-radius: 20px;
    font-weight: bold;
    font-size: 0.7em;
    letter-spacing: 1px;
    margin-left: 3px;
}
.b-c{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    overflow-x: hidden;
    overflow-y:visible ;
    width: 100vw;

}

.container{
    min-width: 300px;
    width: 300px;
     border-radius: 10px;
     display: flex;
     flex-direction: column;
     overflow-y: visible;
     margin-top: 100px;
     position: relative;
     padding-left: 10px;
        border-radius: 27px;
        margin: 15px;
        border: 1px solid rgba(201, 18, 18, 0.397);
        padding: 7px;
        transition: 1s ease-in-out;



}
.container:hover{
    transform: scale(1.1);
    overflow: visible;

}
.thumbnail{
    width: 100px;
    height: 100px;
    border-radius:50% ;
    border: 2px solid red;
    overflow-y: visible;
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: auto;
 
   
}
.c-head{
    align-self: left;
}
.c-body{
    font-size: 0.9em;
}
.c-body>p{
    line-height: 26px;
}
@media (min-width: 578px) and (max-width:768px){

    
} 
 @media (max-width:578px) {
    .b-c{
        align-items: left;
        justify-items: left;
        overflow-x: hidden;


    }
    .c-body>p{
    width: 90%;
    }
    .container{
        width: 100%;
        margin: 20px 0;

    }
}
</style>>
