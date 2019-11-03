import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

// Layout Components 
import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';

//Page Specific Components
import HomeContent from './HomeContent';
import PortfolioContent from './PortfolioContent';
import AboutContent from './AboutContent';
import Blog from './Blog';

class Wrapper extends Component {

	state = {
		path: 'test'
	}

	routeNameFixer(route){
		return(route.substring(1))
	}
	componentDidMount(){
		
		if(this.props.location.pathname === '/') {
			this.setState({
				path: 'home'
			})
		} else {
			this.setState({
				path: this.routeNameFixer(this.props.location.pathname)
			})
		}
	}
	componentDidUpdate(route){
		if(route.history.location.pathname !== route.location.pathname) {
			let pageClass = null;
			if(route.history.location.pathname === '/') {
				pageClass = 'home'
			} else {
				pageClass = this.routeNameFixer(route.history.location.pathname)
			}
			this.setState({
				path: pageClass
			})
		}
	}
    render() {
        return(
            <div className={this.state.path}>
				<div className="App">
					<div className="headerContainer">
					<Header />
					<Navigation />
					</div>
					<div className="contentWrapper">
						<Switch>
							<Route path="/portfolio">
								<PortfolioContent />
							</Route>
							<Route path="/about">
								<AboutContent />
							</Route>
							<Route exact path="/">
								<HomeContent />
							</Route>
							<Route exact path="/blog">
								<Blog />
							</Route>
						</Switch>
					</div>
				</div>
				<Footer />
			</div>
        )
    }
}

export default withRouter(Wrapper)