import React, { Component } from 'react';
import { NavBarStyled } from '../style/StyleGlobal';
import {Link, NavLink} from 'react-router-dom'
class NavBar extends Component {
    render() {
        return (
            <div>
                <NavBarStyled>
                    <Link to="/quiz">Home</Link>

                </NavBarStyled>
            </div>
        );
    }
}

export default NavBar;