import React from 'react';
import h from '../helpers';

var Fish = React.createClass({
  clickButton: function(e) {
    e.preventDefault();

    var fish = this.props.index;
    this.props.addToOrder(fish);
  },
  render: function() {
    var fish = this.props.data;
    var isAvailable = h.stringBoolean(fish.available);
    var buttonText = (isAvailable ? "Add to Order" : "Sold Out!")
    return (
      <li className="menu-fish">
        <img src={fish.image} alt={fish.name} />
        <h3 className="fish-name">
          {fish.name}
          <span className="price">{h.formatPrice(fish.price)}</span>
        </h3>
        <p>{fish.desc}</p>
        <button disabled={!isAvailable} onClick={this.clickButton}>{buttonText}</button>
      </li>
    )
  },
});

export default Fish;