import React from 'react';
import h from '../helpers';
import CSSTransitionGroup from 'react-addons-css-transition-group';

var Order = React.createClass({
  orderIds: function() { return Object.keys(this.props.order) },
  findFish: function(key) { return this.props.fishes[key] },
  findQuantity: function(key) { return this.props.order[key] },
  total: function() {
    var total = 0;

    this.orderIds().forEach(function(order_key) {
      var fish = this.findFish(order_key), //get fish with order key
          order_count = this.findQuantity(order_key); //get order value count

      //if fish is available      
      if (fish && (fish.available)) {
        total += (parseInt(order_count, 10) * parseInt(fish.price, 10));
      }
    }.bind(this));

    return total;
  },
  renderOrder: function(order_key, i) {
    var count = this.findQuantity(order_key),
        fish = this.findFish(order_key),
        name, price;
    
    var removeButton = <button onClick={this.props.removeOrder.bind(null, order_key)}>&times;</button>

    if (fish) {
        name = this.findFish(order_key).name,
        price = this.findFish(order_key).price;

      return (
        <li key={i}>
          <CSSTransitionGroup
            className="count"
            component="span"
            transitionName="count"
            transitionEnterTimeout={250}
            transitionLeaveTimeout={250}
          >
            <span key={count}>{count}</span>
          </CSSTransitionGroup>
          <span>Ibs</span>
          <span>{name}</span>
          <span className="price">{h.formatPrice(price)}</span>
          {removeButton}
        </li>
      )
    }
  },
  render: function() {
    var total = this.total();

    return (
      <div className="order-wrap">
        <h2 className="order-title">Your Order</h2>
        <CSSTransitionGroup
          className="order"
          component="ul"
          transitionName="order"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {this.orderIds().map(this.renderOrder)}
          <li className="total">
            <strong>Total: </strong>
            <span>{h.formatPrice(total)}</span>
          </li>
        </CSSTransitionGroup>
      </div>
    )
  },
});

Order.propTypes = {
  removeOrder: React.PropTypes.func.isRequired,
  fishes: React.PropTypes.object.isRequired,
  order: React.PropTypes.object.isRequired
}

export default Order;