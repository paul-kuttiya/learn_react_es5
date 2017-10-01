import React from 'react';

//components
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import Fish from "./Fish";

//sample data
import sampleData from '../sample-fishes';

// Firebase
import Rebase from 're-base';
import firebase from 'firebase';

var app = firebase.initializeApp({
    apiKey: "AIzaSyDelM234dsNpaFeCePPMBHSwWkaT0yhz1I",
    authDomain: "leaning-react-es5.firebaseapp.com",
    databaseURL: "https://leaning-react-es5.firebaseio.com",
    projectId: "leaning-react-es5",
    storageBucket: "leaning-react-es5.appspot.com",
    messagingSenderId: "932575414324"
});
var base = Rebase.createClass(app.database());

var App = React.createClass({
  getInitialState: function() {
    return {
      fishes: {},
      order: {}
    }
  },
  componentDidMount: function() {
    base.syncState(this.props.params.storeId + '/fishes', {
      context: this,
      state: 'fishes'
    });

    //store order in local storage
    var storage = localStorage.getItem('order-' + this.props.params.storeId);

    //check if exists
    if (storage) {
      this.setState({ order: JSON.parse(storage) })
    }
  },
  componentWillUpdate: function(nextProp, nextState) {
    localStorage.setItem('order-' + this.props.params.storeId, JSON.stringify(nextState.order));
  },
  addToOrder: function(fish) {
    this.state.order[fish] = this.state.order[fish] + 1 || 1;
    this.setState({ order: this.state.order });
  },
  addFish: function(fish) {
    var timestamp = (new Date()).getTime();
    
    //update state; fishes obj
    this.state.fishes['fish' + timestamp] = fish;

    //set state
    this.setState({ fishes: this.state.fishes });
  },
  removeInventory: function(key) {
    this.state.fishes[key] = null;
    this.removeOrder(key);

    this.setState({fishes: this.state.fishes});
  },
  removeOrder: function(key) {
    delete this.state.order[key];

    this.setState({order: this.state.order});
  },
  loadSample: function() {
    this.setState( {fishes: sampleData} );
  },
  renderFish: function(key, i) {
    return (
      <Fish key={i + 1} index={key} data={this.state.fishes[key]} addToOrder={this.addToOrder} />
    )
  },
  updateInventory: function(key, param, newValue) {
    this.state.fishes[key][param] = newValue
    this.setState({ fishes: this.state.fishes });
  },
  render: function() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="SeaFood Market" />
          <ul className="list-of-fishes">
            {Object.keys(this.state.fishes).map(this.renderFish)}
          </ul>
        </div>
        <Order 
        removeOrder={this.removeOrder}
        fishes={this.state.fishes} 
        order={this.state.order} />
        <Inventory 
        removeInventory={this.removeInventory} 
        updateInventory={this.updateInventory} 
        fishes={this.state.fishes} 
        loadSample={this.loadSample} 
        addToOrder={this.addToOrder} 
        addFish={this.addFish} />
      </div>
    )
  },
});

export default App;