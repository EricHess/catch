//React Itself
var React = require('react');
//Dom manipulation (ready in 0.14)	
var ReactDOM = require('react-dom');
//React Router for page routing
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigation = ReactRouter.Navigation;
var createBrowserHistory = require('history/lib/createBrowserHistory');

var h = require('./helpers');

/*
App

*/

var App = React.createClass({

  render: function(){
    return(
        <div className="catch-of-the-day">

          <div className="menu">
            <Header tagline="Fresh Seafood Market"/>
          </div>

          <Order />
          <Inventory />

        </div>
      )
  }
})

var Header = React.createClass({
  render : function(){
    return (
        <header className="top">
          <h1>Catch <span className="ofThe"><span className="of">Of</span> <span className="the">The</span></span> Day</h1>
          <h3 className="tagline"><span>{this.props.tagline}</span></h3>
        </header>
      )
  }
})

var Order = React.createClass({
  render : function(){
    return (
        <p>Order</p>
      )
  }
})

var Inventory = React.createClass({
  render : function(){
    return (
        <p>Inventory</p>
      )
  }
})


/*
Store Picker
This lets us make <StorePicker />
*/

var StorePicker = React.createClass({

	render: function(){
    var name = "Eric";
	  return (
      <form className="store-selector">
        <h2>Please Enter A Store, {name}</h2>
        <input type="text" ref="storeId" required defaultValue={h.getFunName()} />
        <input type="Submit" className="test"/>
      </form>
	  )
	}

});

var notFound = React.createClass({
  render : function(){ 
    return (
        <h1>Not Found!!!!</h1>
      )
  }
})

/*
Routes
*/

var routes = (

  <Router history={createBrowserHistory()}>
    <Route path="/" component={StorePicker} />
    <Route path="/store/:storeId" component={App} />
    <Route path="*" component={notFound} />
  </Router>

  )

ReactDOM.render(routes, document.querySelector("#main"))

