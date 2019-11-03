import React, { Component } from 'react';
import {
    NavLink
} from "react-router-dom";

class Navigation extends Component {
	
    render() {
        return(
            <div className="navigation">
            <ul>
                <li>
                    <NavLink to="/" activeClassName="active">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
                </li>
                <li>
                   <NavLink to="/blog" activeClassName="active">Blog</NavLink>
                </li>
                <li>
                   <NavLink to="/about" activeClassName="active">About</NavLink>
                </li>
            </ul>
        </div>
        )
    }
}

export default Navigation