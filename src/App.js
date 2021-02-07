import React from 'react'
import './App.css';

import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import SearchPages from './pages/SearchPage'
import Home from './pages/Home'
function App() {
  return (
    <div className="app">
      <Router>
       <Switch>
          <Route path="/search">
             <SearchPages/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
     
     </Router>
    </div>
  );
}

export default App;
