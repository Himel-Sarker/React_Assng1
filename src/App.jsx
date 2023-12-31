
import React, { Component } from "react";
import { Nav, Navbar, NavbarBrand } from 'reactstrap';
import Menu from "./components/MenuComponent";
import DishDetail from "./components/DishdetailComponent";
import { DISHES } from './shared/dishes';


import './App.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
      <div className="App">
        
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Restaurant Con Fusion</NavbarBrand>
          </div>
        </Navbar>

        <Menu dishes={this.state.dishes}/>

        <DishDetail dishes={this.state.dishes}/>

      </div>
    );
  }
}
  

export default App
