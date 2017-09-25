###React router  
* navigate to the page url without reload page  

* require `'react-router'` to use  
~> needs `Router`, `Route` and `Navigation`  
```javascript
var ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route;
    Navigation = ReactRouter.Navigation; 
``` 

* Create route
~> supply path and component for that path  
~> create variable `routes` as JSX instance   
~> create route component with `path="/path"` `component={component}`  
~> nest route path for nested path  
~> can use dynamic path as `/:id`  
~> pass `routes` in `ReactDOM.render()`  
```javascript
var routes = (
  <Router>
    <Route path="/" component={StorePicker} />
    <Route path="/store/:storeId" component={App} />
  </Router>
)

ReactDOM.render(routes, document.querySelector('#main'));
```

> old browser does not have push state, hence react need token to track history  

* clean up url without token history      
~> use `history` npm dependency  
~> require `history/lib/createBrowserHistory`  
~> call in router JSX  
```javascript
//routes
var createBrowserHistory = require('history/lib/createBrowserHistory');

var routes = (
  <Router history={createBrowserHistory()}>
    <Route path="/" component={StorePicker} />
    <Route path="/store/:storeId" component={App} />
  </Router>
)
```

* not found 404  
~> create `NotFound` component  
~> add not found to route JSX; match others with `*`  
```javascript
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
```
