import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    blog: [],
}

const blogPosts = createSlice({
    name :"blog",
    initialState,
    reducers:{
        allPosts:(state,{payload})=>{
            state.blog = payload
        },
        addPost: (state, {payload}) => {
            console.log(state.blog)
            state.blog = [...state.blog, payload]
        },
        updatePost:(state, {payload})=>{
            const { id, title, body, userId } = payload;
            const postIndex = state.blog.findIndex((post) => post.id === id);
            if (postIndex !== -1) {
              state.blog[postIndex] = { id, title, body, userId };
            }
        },
        deletePost : (state, {payload})=>{
            state.blog = state.blog.filter((post) => post.id !== payload);
        }
    }
})

export const {allPosts, addPost, deletePost,updatePost} = blogPosts.actions
export default blogPosts.reducer