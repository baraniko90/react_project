import axios from "axios";
import {
  GET_POSTS,
  CREATE_POST,
  DELETE_BOOK,
  UPDATE_BOOK,
} from "../reducers/postSlice";

const URL = "https://6343d06bb9ab4243cad7e5f3.mockapi.io/v1/posts";

const getPostsAsync = () => {
  return async (dispatch) => {
    try {
      const books = await axios({
        method: "get",
        url: URL,
      });

      dispatch(GET_POSTS(books.data));
    } catch (err) {
      console.log(err);
    }
  };
};

const createPostAsync = (data) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        method: "post",
        url: URL,
        data,
      });

      dispatch(CREATE_POST(result.data));
    } catch (err) {
      console.log(err);
    }
  };
};

const deletePostAsync = (data) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        method: "delete",
        url: `${URL}/${+data}`,
      });

      dispatch(DELETE_BOOK(+data));
    } catch (err) {
      console.log(err);
    }
  };
};

const updatePostAsync = (id, data) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        method: "put",
        url: `${URL}/${+id}`,
        data: data,
      });

      dispatch(UPDATE_BOOK(id, data));
    } catch (err) {
      console.log(err);
    }
  };
};

export { getPostsAsync, createPostAsync, deletePostAsync, updatePostAsync };
