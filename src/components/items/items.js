import React from 'react';
import './items.css';
import Item from './item/item.js';
import AuxComp from "../auxX/AuxX";

const items = ({items}) => {
    let values = [];
    for (let v of items) {
        const tmp = [];
        for (let v2 of v) {
            tmp.push(v2['value']);
        }
        values.push(tmp);
    }
    const v = values.map((el, k) => {
        return (<Item key={k} itemRow={el}/>);
    });
    return (
        <AuxComp>
            {v}
        </AuxComp>
    );
};

export default items;
