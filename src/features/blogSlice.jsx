import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    blog: [],
}

const blogPosts = createSlice({
    name :"blog",
    initialState,
    reducers:{
        allPosts:(state,{payload})=>{
            state.blog = [...state.blog,payload]
        },
        addPost: (state, {payload}) => {
            state.blog = [...state.blog, payload]
        },
        updatePost:(state)=>{
            state.blog = []
        },
        deletePost : (state, {payload})=>{
            
        }
    }
})

export const {allPosts, addPost, deletePost,updatePost} = blogPosts.actions
export default blogPosts.reducer