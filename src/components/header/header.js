import React from 'react';
import './header.css';
import image from './sort.svg';

class Header extends React.Component{
    render() {
        const {headerItems,onSort}=this.props;
    const items = headerItems.map((el,k) => {
        return (
            <td  key={k} className='title'>
                <span>{el}</span>
                <img src={image} alt='!' onClick={()=>{onSort(headerItems.indexOf(el))}}/>
            </td>
        )
    });
    return (
        <tr >
           {items}
        </tr>
    );
    }
}

export default Header;
