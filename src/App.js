'use strict';
import React, { Component } from 'react';
import Cards, { Card } from 'react-swipe-card'
import './App.css';
import RestaurantList from './RestaurantList';
import ReactDOM from 'react-dom'
import Carousel from './RestaurantList';


class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      cuisine: '', 
    price: '1',
    showing: false};

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: event.target.value
    });

  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.onFormSubmit(this.state.cuisine, this.state.price, this.state.showing)
  } 



  render() {
    return (
      <form onSubmit={(e) => this.handleFormSubmit(e)}>

        <label>
          Cuisine (Asian, Mediterranean, etc.):    
          <select value={this.state.cuisine} onChange={this.handleChange} name = 'cuisine'>
            <option value="african">African</option>
            <option value="newamerican">American (new)</option>
            <option value="tradamerican">American (Traditional)</option>
            <option value="bbq">Barbeque</option>
            <option value="breakfast_brunch">Breakfast/Brunch</option>
            <option value="caribbean">Caribbean</option>
            <option value="chinese">Chinese</option>
            <option value="greek">Greek</option>
            <option value="indpak">Indian</option>
            <option value="italian">Italian</option>
            <option value="japanese">Japanese</option>
            <option value="mediterranean">Mediterranean</option>
            <option value="mexican">Mexican</option>
            <option value="mideastern">Middle Eastern</option>
            <option value="pizza">Pizza</option>
            <option value="sandwiches">Sandwiches</option>
            <option value="vegetarian">Vegetarian</option>
          </select>
<br />
           <label>
          Pick your price range:

          <select value={this.state.price} onChange={this.handleChange} name = 'price'>
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
          </select>
        </label>
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
      cuisine: null,
      price: null,
      showing: false
    };
  }
    onFormSubmit = (cuisine, price, showing) => {
    this.setState({
      cuisine: cuisine,
      price: price,
      showing: true
    })
  }

  render() {
    const { showing } = this.state;
    return (
      <div className="App">
        <header className="App-header">

      {<img src={require("./donut.png")} className="App-logo" alt = ""/>}
      <h1> Welcome! </h1>
          <h6>
            Your personalized Philly Restaurant recommender: bringing you the best Philly restaurants!
            <br />
            <br />
            <div class="boxed">
            <br />
            <h2> How it works: </h2>
            <br />
            1. Select your cuisine type
            <br />
            2. Select your price range
            <br />
            3. You will be presented with the highest rated restaurants matching your preferences. <br />
            Click HEART if you are interested in the restaurant, and ANGRY FACE if you are not.<br />
             <br />
            At the end, you will be presented with all of your interested restaurants and<br />
            a STAR restaurant recommendation similar to ALL the restaurants you are interested in!<br />
            <br />
            </div>
          </h6>
      <InputForm onFormSubmit = {this.onFormSubmit}/>

{ showing && ( <RestaurantList 
          cuisine = {this.state.cuisine} price = {this.state.price}/>)}
                    
        </header>

      </div>

    );
 

  
}
}



export default App;