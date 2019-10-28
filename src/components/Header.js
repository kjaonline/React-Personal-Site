import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return(
            <div className="logo">
                <Link to='/'><h1>Kris Alcordo</h1></Link>
            </div>
        )
    }
}
export default Header