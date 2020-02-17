import React from 'react';
import './result.css';

const result = ({items}) => {
    let values = [];
    for (let v of items) {
        const tmp = [];
        for (let v2 of v) {
            tmp.push(v2['value']);
        }
        values.push(tmp);
    }
    let sum = [];
    for (let i = 0; i < values[0].length - 1; i++) {
        sum[i] = 0;
    }
    for (let i = 1; i < values[0].length; i++) {
        for (let j = 0; j < values.length; j++) {
            sum[i - 1] += Number.parseFloat(values[j][i]);
        }
    }
    sum = sum.map(el => {
        return el.toFixed(1);
    });
    sum.unshift('Total :');
    const v = sum.map((el,k) => {
        return (<td key={k} /*className='items'*/>{el}</td>);
    });
    return (
        <tr>
            {v}
        </tr>
    );
};

export default result;
