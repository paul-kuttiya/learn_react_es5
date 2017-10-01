import React from "react";

var AddFishForm = React.createClass({
  createFish: function(e) {
    e.preventDefault();

    //build object
    var fish = {
      name: this.refs.name.value,
      price: this.refs.price.value,
      available: this.refs.available.value,
      desc: this.refs.desc.value,
      image: this.refs.image.value,
    }

    //call addFish() method from App as props  
    this.props.addFish(fish);
    this.refs.fishForm.reset(); //reset form
  },
  render: function() {
    return (
      <form className="fish-edit" ref="fishForm" onSubmit={this.createFish}>
        <input type="text" ref="name" placeholder="Fish Name"/>
        <input type="text" ref="price" placeholder="Fish Price"/>
        <select ref="available">
          <option value={true}>Fresh!</option>
          <option value={false}>Sold Out!</option>
        </select>
        <textarea type="text" ref="desc" placeholder="Desc"></textarea>
        <input type="text" ref="image" placeholder="image url"/>
        <button type="submit">+ Add Item</button>
      </form>
    )
  }
});

export default AddFishForm;