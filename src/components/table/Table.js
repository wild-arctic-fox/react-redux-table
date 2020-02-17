import React from 'react';
import TableHeader from "../header/header";
import TableRow from "../items/items";
import TableResult from '../result/result';

export default class Table extends React.Component {
    state = {
        headerItems: ['Date', 'ZFT', 'Unique', 'Registrations', 'Demo registrations', 'Conversion', 'Deposit', 'Ftd', 'Deals', 'Profit'],
        items: [this.createElement('2009/12/12'), this.createElement('2010/12/12'), this.createElement('2011/10/01'), this.createElement('1999/06/08')],
        sort: true
    };

    createElement(val) {
        return {
            0: new Date(val).getFullYear(),
            1: (Math.random() * 100).toFixed(1),
            2: (Math.random() * 100).toFixed(1),
            3: (Math.random() * 100).toFixed(1),
            4: (Math.random() * 100).toFixed(1),
            5: (Math.random() * 100).toFixed(1),
            6: (Math.random() * 100).toFixed(1),
            7: (Math.random() * 100).toFixed(1),
            8: (Math.random() * 100).toFixed(1),
            9: (Math.random() * 100).toFixed(1),
        }
    };

    onSort = (el) => {
        let arr = this.state.items;
        if (this.state.sort) {
            arr = arr.sort((a, b) => (+a[el] - +b[el]));
            this.setState({
                sort: false
            })
        } else {
            arr = arr.sort((a, b) => (+b[el] - +a[el]));
            this.setState({
                sort: true
            })
        }
        this.setState({
            items: arr
        })
    };

    render() {
        const items = this.state.items.map((el) => {
            const arr = [];
            for (let k in el) {
                arr.push({key: k, value: el[k]})
            }
            return arr;
        });
        return (
            <table className="table table-sm table-dark">
                <TableHeader headerItems={this.state.headerItems} onSort={this.onSort}/>
                <TableRow items={items}/>
                <TableResult items={items}/>
            </table>
        );
    }
}

