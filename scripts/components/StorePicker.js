import React from "react";
import { History } from 'react-router';
import h from "../helpers.js";

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

export default StorePicker;