### React State  
* A object that holds component data    
* state is dynamic way of passing data  
~> only for interactivity, that is, data that changes over time  
* determine how component behave  
~> create dynamic component  

### Working with state  
* set App state with `getInitialState`  
~> will get initial state for App  
```javascript
// App component
getInitialState: function() {
    return {
      fishes: {},
      order: {}
    }
  },
```