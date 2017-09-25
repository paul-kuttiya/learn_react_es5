//import react library with common.js
var React = require('react');
var ReactDOM = require('react-dom');

var h = require('./helpers');

var ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    History = ReactRouter.History;
    
var createBrowserHistory = require('history/lib/createBrowserHistory');

var App = React.createClass({
  getInitialState: function() {
    return {
      fishes: {},
      order: {}
    }
  },
  addfish: function(fish) {

  },
  render: function() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="SeaFood Market" />
        </div>
        <Order />
        <Inventory />
      </div>
    )
  },
});

var AddFishForm = React.createClass({
  createFish: function(e) {
    e.preventDefault();

    //build object
    var fish = {
      name: this.refs.name.value,
      price: this.refs.price.value,
      status: this.refs.status.value,
      desc: this.refs.desc.value,
      image: this.refs.image.value,
    }

    //set obj state
    // this.setState()
  },
  render: function() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input type="text" ref="name" placeholder="Fish Name"/>
        <input type="text" ref="price" placeholder="Fish Price"/>
        <select ref="status">
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea type="text" ref="desc" placeholder="Desc"></textarea>
        <input type="text" ref="image" placeholder="image url"/>
        <button type="submit">+ Add Item</button>
      </form>
    )
  }
});

var Header = React.createClass({
  render: function() {
    return (
      <header className="top">
        <h1>Catch
          <span className="ofThe">
            <span className="of">of</span>
            <span className="the">the</span>
          </span>
          Day
        </h1>
        <h3 className="tagline">
          <span>{this.props.tagline}</span>
        </h3>
      </header>
    )
  },
});

var Order = React.createClass({
  render: function() {
    return (
      <p>Order</p>
    )
  },
});

var Inventory = React.createClass({
  render: function() {
    return (
      <div>
        <h3>Inventory</h3>
        <AddFishForm />
      </div>
    )
  },
});

var StorePicker = React.createClass({
  mixins: [History],
  goToStore: function(e) {
    e.preventDefault();
    //get value from input  
    var storeID = this.refs.storeId.value;

    //navagate url to storeID
    this.history.pushState(null, "/store/" + storeID);
  },
  render: function() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Select Store</h2>
        <input type="text" ref="storeId" defaultValue={h.getFunName()} required />
        <input type="submit" />        
      </form>
    )
  },
});

var NotFound = React.createClass({
  render: function() {
    return (
      <h1>Not Found</h1>
    )
  },
});

//routes
var routes = (
  <Router history={createBrowserHistory()}>
    <Route path="/" component={StorePicker} />
    <Route path="/store/:storeId" component={App} />
    <Route path="*" component={NotFound} />
  </Router>
)


ReactDOM.render(routes, document.querySelector('#main'));