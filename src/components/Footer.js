import React, { Component } from 'react';

class Footer extends Component {
    state = {
        date: ''
    }
    getDate(){
        let year = new Date().getFullYear();
        this.setState({
            date: year
        })
    }
    componentDidMount(){
        this.getDate();
    }
    render() {
        return(
            <div className="footer">
                Kris Alcordo. &copy; 2019 - {this.state.date}
            </div>
        )
    }
}

export default Footer