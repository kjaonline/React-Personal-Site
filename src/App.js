import React from 'react';
import './scss/main.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//GraphQL imports
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'

// Layout Components 
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

//Page Specific Components
import HomeContent from './components/HomeContent';
import PortfolioContent from './components/PortfolioContent';
import AboutContent from './components/AboutContent';
import Blog from './components/Blog';

//GraphQL client set-up
const client = new ApolloClient({
  uri: 'https://content.krisalcordo.com/graphql'
})

function App() {
  return ( 
    <ApolloProvider client={client}>
      <BrowserRouter>
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
        </BrowserRouter>
      </ApolloProvider>
  );
}

export default App;
