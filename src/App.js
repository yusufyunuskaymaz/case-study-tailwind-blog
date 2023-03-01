import React from "react";
import AppRouter from "./router/AppRouter";
import store from "./app/store";
import { Provider } from "react-redux";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {allPosts} from "./features/blogSlice"

const App = () => {

  const dispatch = useDispatch() 
    // const [posts, setPosts] = useState([])
    const getData = ()=>{
      const URL = "https://jsonplaceholder.typicode.com/posts"
      axios.get(URL).then((res)=>{
        const userPost = res.data.filter((item)=>{
          return item.userId === 1
        })
        // setPosts(userPost)
        dispatch(allPosts(userPost))
      })
    }
    useEffect(() => {
      getData()
    }, [])

  return (

      <AppRouter />
    
  );
};

export default App;