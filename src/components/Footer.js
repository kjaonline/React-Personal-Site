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
	copyEmail(){
		let emailCopy = document.getElementById('emailCopy')
		emailCopy.select();
		emailCopy.setSelectionRange(0, 99999);
		document.execCommand('copy')
		console.log('copied')
	}
    render() {
        return(
            <div className="footer">
                Kris Alcordo. &copy; 2019 - {this.state.date} <br />
				<div className="footerLinks">
					<a href="mailto:kris@alcordo.com">kris@alcordo.com</a>
				</div>
            </div>
        )
    }
}

export default Footer