### React component

* In React all piece of UI html is component.  

* in order to use react, need to import react library.  

* Running JS or interpolation in JSX goes in `{...}`

* JSX is a React preprocessor that adds XML syntax to JavaScript.  
~> transform by Babel from `React.createElement`  
~> JSX allows dev to write html inside JS  
~> Babel is a transpiler turns ES6 into JS  

* Create component by `React.createClass({})`  
~> think as returning html UI binds with react  
~> all components need render method  
~> actually returns function constructor  
```javascript
var StorePicker = React.createClass({
  render: function() {
    return (
      <p>hi</p>
    )
  },
});
```  

* in render we can combine component with component  
```javascript
//inside render function
<div>
  <Order />
  <Inventory />
</div>
```

* require `react-dom` to use react dom  
~> stick component into page using react dom  
```javascript
ReactDOM.render(<StorePicker/>, document.querySelector('#main'));

```

### JSX  
* always wrap JSX element inside a parent element `<div>...</div>`  

* assign class to html with `className="someClass"`  

* comments in jsx `{/* comments */}`  