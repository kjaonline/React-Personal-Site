import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";

class Navigation extends Component {
    render() {
        return(
            <div className="navigation">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                   <Link to="/blog">Blog</Link>
                </li>
                <li>
                   <Link to="/about">About</Link>
                </li>
            </ul>
        </div>
        )
    }
}

export default Navigation