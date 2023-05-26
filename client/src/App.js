import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Header from './components/Navbar';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import QuickBooks from './pages/QuickBooks';
import Accounting from './pages/Accounting';
import TaxServices from './pages/TaxServices';
import ContactUs from './pages/ContactUs';
import QuickBooksTraining from './pages/QuickBooksTraining';
import OtherServices from './pages/OtherServices';
import TaxForms from './pages/TaxForms';
import AccountingDictionary from './pages/AccountingDictionary';





// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


// create connection to the socket server that WON'T try to connect more than once

function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/quickbooks" 
                element={<QuickBooks />} 
              />
              <Route 
                path="/accounting" 
                element={<Accounting />} 
              />
              <Route 
                path="/taxservices" 
                element={<TaxServices />} 
              />
               <Route 
                path="/contact" 
                element={<ContactUs />} 
              />
              <Route 
                path="/quickbookstraining" 
                element={<QuickBooksTraining />} 
              />
              <Route 
                path="/services" 
                element={<OtherServices />} 
              />
              <Route 
                path="/taxforms" 
                element={<TaxForms />} 
              />
              <Route 
                path="/accountingdictionary" 
                element={<AccountingDictionary />} 
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/signup" 
                element={<Signup />} 
              />
              <Route
                path='/users/:userId'
                element={<Profile />}
              />   
              </Routes>
            </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
