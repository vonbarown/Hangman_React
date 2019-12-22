import React from 'react';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import gameApp from './components/gameApp'
import Home from './Home.jsx'


class App extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {


    return (
      <div className="App">
        <nav>
          <Link to="/">Home</Link>{" "}
          <Link to="/hangman/general">General Game</Link>{" "}
        </nav>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/hangman/general' component={gameApp}></Route>
        </Switch>
        <ToastContainer />
      </div>
    );
  }
}

export default App;
