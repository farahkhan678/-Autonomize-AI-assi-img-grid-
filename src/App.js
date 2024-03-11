import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'

import BlogItemDetails from './components/BlogItemDetails'

import './App.css'

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <div className="app-body">
        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/blogs/:id" component={BlogItemDetails} />
        </Switch>
      </div>
    </div>
  </div>
)

export default App
