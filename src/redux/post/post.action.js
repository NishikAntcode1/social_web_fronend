import { api } from "../../config/api";
import {
  CREATE_COMMENT_FAILURE,
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_POST_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  GET_ALL_POST_FAILURE,
  GET_ALL_POST_REQUEST,
  GET_ALL_POST_SUCCESS,
  GET_USERS_POST_FAILURE,
  GET_USERS_POST_REQUEST,
  GET_USERS_POST_SUCCESS,
  LIKE_POST_FAILURE,
  LIKE_POST_REQUEST,
  LIKE_POST_SUCCESS,
} from "./post.actionType";

export const createPostAction = (postData) => async (dispatch) => {
  dispatch({type: CREATE_POST_REQUEST});

  try {
    const { data } = await api.post("/api/posts", postData);
    dispatch({ type: CREATE_POST_SUCCESS, payload: data });
    console.log("Post Created", data);
  } catch (error) {
    dispatch({ type: CREATE_POST_FAILURE, payload: error });
    console.log("error", error);
  }
};

export const getAllPostAction = () => async (dispatch) => {
  dispatch({type: GET_ALL_POST_REQUEST});

  try {
    const { data } = await api.get("/api/posts");
    dispatch({ type: GET_ALL_POST_SUCCESS, payload: data });
    console.log("posts", data);
  } catch (error) {
    dispatch({ type: GET_ALL_POST_FAILURE, payload: error });
    console.log("error", error);
  }
};

export const getUsersPostAction = (userId) => async (dispatch) => {
  dispatch({type: GET_USERS_POST_REQUEST});

  try {
    const { data } = await api.get(`api/posts/user/${userId}`);
    dispatch({ type: GET_USERS_POST_SUCCESS, payload: data });
    console.log("user posts", data);
  } catch (error) {
    dispatch({ type: GET_USERS_POST_FAILURE, payload: error });
    console.log("error", error);
  }
};

export const likePostsAction = (postId) => async (dispatch) => {
  dispatch({type: LIKE_POST_REQUEST});

  try {
    const { data } = await api.put(`api/posts/like/${postId}`);
    dispatch({ type: LIKE_POST_SUCCESS, payload: data });
    console.log("post liked", data);
  } catch (error) {
    dispatch({ type: LIKE_POST_FAILURE, payload: error });
    console.log("error", error);
  }
};

export const createCommentAction = (reqData) => async (dispatch) => {
  dispatch({type: CREATE_COMMENT_REQUEST});

  try {
    const { data } = await api.post(`/api/comments/post/${reqData.postId}`, reqData.data);
    dispatch({ type: CREATE_COMMENT_SUCCESS, payload: data });
    console.log("Comment Created", data);
  } catch (error) {
    dispatch({ type: CREATE_COMMENT_FAILURE, payload: error });
    console.log("error", error);
  }
};