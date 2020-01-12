import {
  PictresqueActionTypes,
  PictresqueAction
} from "../actions/pictresque.actions";
import { Post } from "../models/Post";
import { Pixbay } from "src/app/models/pixbay";
import { PictresqueAPIService } from "src/app/services/pictresque-service/pictresque-api.service";

export interface PictresqueState {
  posts: Post[];
  loading: boolean;
  error: Error;
  searchTerm: string;
  pixabayPosts: Pixbay[];
  toggleForm: Boolean;
}

const initialState: PictresqueState = {
  posts: [],
  loading: false,
  error: undefined,
  searchTerm: "",
  pixabayPosts: [],
  toggleForm: false
};

export function PictresqueReducer(
  state: PictresqueState = initialState,
  action: PictresqueAction
) {
  switch (action.type) {
    case PictresqueActionTypes.FILTER_POSTS_BY_DATE_ASCENDING:
      return {
        ...state,
        posts: [
          ...state.posts.sort((a, b) => {
            return (
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );
          })
        ],
        loading: false
      };
    case PictresqueActionTypes.FILTER_POSTS_BY_DATE_DESCENDING:
      return {
        ...state,
        posts: [
          ...state.posts.sort((a, b) => {
            return (
              new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
            );
          })
        ],
        loading: false
      };
    case PictresqueActionTypes.FILTER_POSTS_BY_CATEGORY:
      return {
        ...state,
        posts: [
          ...state.posts.filter(posts => posts.category == action.category)
        ],
        loading: false
      };
    case PictresqueActionTypes.GET_POSTS:
      return {
        ...state,
        loading: true
      };
    case PictresqueActionTypes.GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    case PictresqueActionTypes.GET_POSTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case PictresqueActionTypes.CREATE_POST:
      return {
        ...state,
        loading: true
      };
    case PictresqueActionTypes.CREATE_POST_SUCCESS:
      console.log("POST IN ACTIONS -->", action.payload);
      return {
        ...state,
        posts: [...state.posts, action.payload],
        loading: false
      };
    case PictresqueActionTypes.CREATE_POST_FAILURE:
      // console.log("POSSIBLE ERROR -->", action.payload["error"]);
      return {
        ...state,
        error: action.payload["error"],
        loading: false
      };
    case PictresqueActionTypes.CREATE_POST_TEST:
      return {
        ...state,
        loading: true
      };
    case PictresqueActionTypes.CREATE_POST_TEST_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        posts: [...state.posts, action.payload],
        loading: false
      };

    case PictresqueActionTypes.GET_PIXABAY_POSTS:
      return {
        ...state,
        loading: true
      };
    case PictresqueActionTypes.GET_PIXABAY_POSTS_SUCCESS:
      return {
        ...state,
        pixabayPosts: action.payload,
        loading: false
      };
    case PictresqueActionTypes.GET_PIXABAY_POSTS_FAILURE:
      return {
        ...state,
        error: action.payload["error"],
        loading: false
      };
    case PictresqueActionTypes.GET_SEARCHWORD:
      return {
        ...state,
        loading: true
      };
    case PictresqueActionTypes.GET_SEARCHWORD_SUCCESS:
      return {
        ...state,
        searchTerm: action.payload,
        loading: false
      };
    case PictresqueActionTypes.GET_CATEGORY_POSTS:
      return {
        ...state,
        loading: true
      };
    case PictresqueActionTypes.GET_CATEGORY_POSTS_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    case PictresqueActionTypes.TOGGLE_FORM_SUCCESS:
      return {
        ...state,
        toggleForm: action.payload
      };
    default:
      return state;
  }
}
