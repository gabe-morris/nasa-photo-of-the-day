import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Post(props){
const {postid} = props
const [post, setPost] = useState(null)

useEffect(()=>{
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=1`)
    .then(res => {
        console.log(res.data)
        setPost(res.data)
    })
    .catch(err => console.log(err))
},[])
}