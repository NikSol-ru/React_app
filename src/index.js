import { rerenderEntireThree } from "./render";
import state from "./state/state";
import { addPost } from "./state/state";
import './index.css';


rerenderEntireThree(state, addPost);

