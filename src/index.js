import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducers/reducer";

// Создаем хранилище с помощью Redux.createStore()
// и передадим редьюсеры в качестве аргументов
// второй параметр функции createStore(), в котором передается «начальное состояние»
const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

