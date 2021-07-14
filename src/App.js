import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import ResolutionBoard from './components/ResolutionBoard'
import CreateBoard from './components/CreateBoard'
import AboutPage from './components/AboutPage'

import './assets/css/stylesheet.css'
import logo from './assets/art/logo.svg'

const App = () => {

  return (
    <Router>
      <header className="app-header">
        <Link to="/">
          <img src={logo} alt="Home" />
        </Link>
        <Link to="/about">About</Link>
      </header>
      <Switch>
        <Route exact path="/">
          <ResolutionBoard />
        </Route>
        <Route exact path="/new-resolution">
          <CreateBoard />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App