import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Switch, Route} from 'react-router-dom'
//COMPONENTS
import Navbar from './components/Navbar'
import Footer from './components/Footer'

//PAGES
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path = "/">
          <Home/>
        </Route>
        <Route path = "/portfolio">
          <Portfolio/>
        </Route>
        <Route path = "/about">
          <About/>
        </Route>
        <Route path = "/contact">
          <Contact/>
        </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
