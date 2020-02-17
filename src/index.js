import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducers/reducer";

const store = createStore(reducer);

const update = () => {
    ReactDOM.render(<Provider store={store}><App/></Provider> , document.getElementById('root'));
};
update();
