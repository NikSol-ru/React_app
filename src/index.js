import store from "./redux/redux-store";
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
const rerenderEntireThree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} dispatch={store.dispatch.bind(store)} />
            </BrowserRouter>
        </React.StrictMode>
    );
}

rerenderEntireThree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireThree(state);
});