### React events  
* React events are inline  
~> attach event with JSX  
```javascript
//some React component
goToStore: function(e) {
  e.preventDefault();
},
render: function() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Select Store</h2>
        <input type="text" ref="storeId" required />
        <input type="submit" />        
      </form>
    )
  },
```

* To get data(value) from input  
~> add `ref="attributeName"` to specified element that needed value from  
~> will store in component as `attributeName: HTMLelement`  
```javascript
//in render JSX
//other code...
<form onSubmit={this.goToStore}>
  <input ref="storeId">
</form>
```

```javascript
//To access
goToStore: function(e) {
  //other code ...
  var storeID = this.refs.storeId.value; //value of the reference input
}
```

### react navigate url  
* use `History` library `pushState`  
~> use as componnent mixins array    
~> mixins will include method in array for component  
~> `var History = ReactRouter.History`  

```javascript
var ReactRouter = require('react-router'),
    History = ReactRouter.History;
    
//react component
//...
mixins = [History],
goToStore: function(e) {
  //...
  //navigate url
  this.history.pushState(null, 'some url');
},
```