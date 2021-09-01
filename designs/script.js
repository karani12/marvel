import axios from 'axios'

axios.get('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=3890556c9e7b198d6f38f94ca7fc06a4&hash=ff2a4637dc51b3e7de3c8b4a5f3f7dc0')
.then(res=>{
    console.log(res.data)
})