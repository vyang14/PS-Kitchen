import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import CreateContract from './pages/CreateContract/CreateContract'
import ContactUs from './pages/ContactUs/ContactUs'
import Profile from './pages/Menu/menu'
import Homepage from './pages/Homepage/Homepage'
import Contracts from './pages/Order/Order'

import './App.css'
import { Menu } from 'react-bootstrap/lib/Dropdown'
const client = new ApolloClient({
  uri: 'https://devbids-gp4.herokuapp.com/graphql',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        {/* Routes */}
        <Switch>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/contactUs">
            <ContactUs />
          </Route>
          
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
    </ApolloProvider>
  )
}
export default App
