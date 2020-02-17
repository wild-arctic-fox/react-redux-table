import React from 'react';
import './item.css';

const item = ({itemRow}) => {
    const row = itemRow.map((el, k) => {
        return (
            <td key={k}>{el.toString()}</td>
        )
    });
    return (
        <tr>
            {row}
        </tr>
    );
};

export default item;
