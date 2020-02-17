import React from 'react';
import './header.css';
import image from './sort.svg';
import {connect} from 'react-redux';
import {sort} from "../../actions/actions";

class Header extends React.Component {
    render() {
        const {headerItems} = this.props;
        const items = headerItems.map((el, k) => {
            return (
                <td key={k} className="title">
                    <span>{el}</span>
                    <img className='image' src={image} alt='!'
                         onClick={() => this.props.onSort(headerItems.indexOf(el))}/>
                </td>
            )
        });
        return (
            <tr>
                {items}
            </tr>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        headerItems: state.headerItems
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSort: (el) => dispatch(sort(el))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);