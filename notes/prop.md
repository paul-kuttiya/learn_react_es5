### Prop  
* One React way of passing data to component  
* passed in data as component attribute  
```html
<Header tagline="SeaFood Market" num="5000" />
```

* retrive inside component `this.prop.propName` with `{}`   
```javascript
//Inside Header component instance
render: function() {
  return (
    <h3>{this.props.tagline}</h3>
  )
}
```