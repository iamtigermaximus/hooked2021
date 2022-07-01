import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
//COMPONENTS
import Navbar from './components/Navbar'
import Footer from './components/Footer'
//PAGES
import Home from './pages/Home'
import Trending from './pages/Trending'
import AllMovies from './pages/AllMovies'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/trending'>
            <Trending />
          </Route>
          <Route path='/allmovies'>
            <AllMovies />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
