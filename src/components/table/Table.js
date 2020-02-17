import React from 'react';
import TableHeader from "../header/header";
import TableRow from "../items/items";
import TableResult from '../result/result';
import {connect} from 'react-redux';

const Table = ({store}) => {

    const items = store.items.map((el) => {
        const arr = [];
        for (let k in el) {
            arr.push({key: k, value: el[k]})
        }
        return arr;
    });
    return (
        <table className="table table-sm table-dark">
            <TableHeader headerItems={store.headerItems}/>
            <TableRow items={items}/>
            <TableResult items={items}/>
        </table>
    );
};
const mapStateToProps = (state) => {
    return {
        store: state
    }
};

export default connect(mapStateToProps)(Table);