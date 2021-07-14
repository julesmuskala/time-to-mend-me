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
        <Link to="/time-to-mend-me">
          <img src={logo} alt="Home" />
        </Link>
        <Link to="/time-to-mend-me/about">About</Link>
      </header>
      <Switch>
        <Route exact path="/time-to-mend-me">
          <ResolutionBoard />
        </Route>
        <Route exact path="/time-to-mend-me/new-resolution">
          <CreateBoard />
        </Route>
        <Route exact path="/time-to-mend-me/about">
          <AboutPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App