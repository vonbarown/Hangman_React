import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import gameApp from "./components/gameApp";
import Home from "./Home.jsx";

import SideDrawer from "./components/navbar/sideDrawer";
import { Backdrop } from "./components/navbar/backdrop/backdrop";
import Navbar from "./components/navbar/navBar";

class App extends React.Component {
  state = {
    sideDrawerOpen: false,
  };

  backDropClick = () => this.setState({ sideDrawerOpen: false });

  drawerToggler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  render() {
    const { sideDrawerOpen } = this.state;

    let backDrop;

    if (sideDrawerOpen) {
      backDrop = <Backdrop clicked={this.backDropClick} />;
    }
    return (
      <div className="App">
        <SideDrawer show={sideDrawerOpen} drawerClick={this.drawerToggler} />
        {backDrop}
        <Navbar drawerClick={this.drawerToggler} show={sideDrawerOpen} />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/hangman/general" component={gameApp}></Route>
        </Switch>
        <ToastContainer />
      </div>
    );
  }
}

export default App;
