import {
  PictresqueActionTypes,
  AddPostAction
} from "../actions/pictresque.actions";
import { Post } from "../models/Post";

const initialState: Array<Post> = [];

export function PictresqueReducer(
  state: Array<Post> = initialState,
  action: AddPostAction
) {
  switch (action.type) {
    case PictresqueActionTypes.ADD_POST:
      return [...state, action.payload];
    default:
      return state;
  }
}
