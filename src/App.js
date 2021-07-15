import React from "react";
import "./App.css";
import {useState, useEffect} from 'react'
import axios from 'axios'
import Post from './Post'



function App() {
  const [post, setPost] = useState([])
const [postId, setPostId] = useState()
  useEffect(() =>{
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=1`)
    .then(res => {
      console.log(res.data)
      setPost(res.data)
    })
    .catch(err => console.log(err))
   },[])

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
