import React from 'react';
import './scss/main.scss';
import { BrowserRouter } from 'react-router-dom';

//GraphQL imports
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'

import Wrapper from './components/Wrapper'


//GraphQL client set-up
const client = new ApolloClient({
  uri: 'https://api.krisalcordo.com/graphql'
})

function App() {
	
  return ( 
    <ApolloProvider client={client}>
      <BrowserRouter>
		<Wrapper />
          
        </BrowserRouter>
      </ApolloProvider>
  );
  
}

export default App;
