import React from 'react';
import './App.css';
import Table from "./components/table/Table";

const App = ({store}) => {
    return (
        <div className="App">
            <Table store={store}/>
        </div>
    );
};
export default App;

