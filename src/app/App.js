import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch} from 'react-router-dom'
import Header from '../components/header'
import Content from '../components/content'

function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path={"/"} render={() => 
          <div>
          <Header />
          <Content />
          </div>
        }/>
      </Switch>
    </div>
  );
}

export default App;
