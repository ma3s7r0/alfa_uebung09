import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

function Nav(props) {
    return (
        <nav className="clearfix">
        <NavLink to="/shop"><div>Shop</div></NavLink>
        <NavLink to="/cart"><div>Warenkorb ({props.cart.length})</div></NavLink>
    </nav>

    );
}

const mapStateToProps = (state, props) => {
    return {
        ...props,
        ...state
    }
}



export default connect(mapStateToProps) (Nav);