import { rerenderEntireThree } from "./render";
import { updateNewPostText } from "./state/state";
import state from "./state/state";
import { addPost } from "./state/state";
import './index.css';

rerenderEntireThree(state, addPost, updateNewPostText);
