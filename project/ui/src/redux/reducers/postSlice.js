import { createSlice } from "@reduxjs/toolkit";

const postReducer = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {
    GET_POSTS: (state, actions) =>{
      state.posts = [...actions.payload];
    },
    CREATE_POST: (state, actions) => {
      state.posts = [...state.posts, actions.payload];
    },
    UPDATE_POST: (state, actions) => {
      state.posts = state.posts.filter((post) => post.id !== actions.payload);
    },
    DELETE_POST: (state,actions)=> {
      state.posts = state.posts.map((post) => {
        const { title, image, price, genre } = actions.payload.data;
        if (post.id === actions.payload.id) {
          post.title = title;
          post.peminjaman = peminjaman;
          post.pengembalian = pengembalian;
        }
        return post;
      });        
    }
  },
});

export const { GET_POSTS, CREATE_POST, DELETE_POST, UPDATE_POST } =
  postReducer.actions;
export default postReducer.reducer;
