import React from 'react';
import AddFishForm from './AddFishForm'

var Inventory = React.createClass({
  handleInput: function(param, e) {
    var value = e.target.value,
        key = e.target.parentNode.getAttribute('name');

    this.props.updateInventory(key, param, value);
  },
  renderInventory: function(key) {
    var fish = this.props.fishes[key];
    return (
      <div className="fish-edit" name={key} key={key}>
        <input type="text" value={fish.name} onChange={this.handleInput.bind(this, 'name')}/>
        <input type="text" value={fish.price} onChange={this.handleInput.bind(this, 'price')}/>
        <select value={fish.available} onChange={this.handleInput.bind(this, 'available')}>
          <option value={false}>Sold Out!</option>
          <option value={true}>Fresh!</option>
        </select>
        <textarea value={fish.desc} onChange={this.handleInput.bind(this, 'desc')}></textarea>
        <input type="text" value={fish.image} onChange={this.handleInput.bind(this, 'image')}/>
        <button onClick={this.props.removeInventory.bind(null, key)}>Remove</button>
      </div>
    )
  },
  render: function() {
    return (
      <div>
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(this.renderInventory)}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSample}>Load Sample Data</button>
      </div>
    )
  },
});

Inventory.propTypes = {
  removeInventory: React.PropTypes.func.isRequired,
  updateInventory: React.PropTypes.func.isRequired,
  fishes: React.PropTypes.object.isRequired,
  loadSample: React.PropTypes.func.isRequired,
  addToOrder: React.PropTypes.func.isRequired,
  addFish: React.PropTypes.func.isRequired
}

export default Inventory;