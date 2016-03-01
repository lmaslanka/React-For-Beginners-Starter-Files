var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigation = ReactRouter.Navigation;
var createBrowserHistory = require('history/lib/createBrowserHistory');

var h = require('./helpers');

/*
 * <App />
 * Custom Element for the Entire Application
 *
 */

var App = React.createClass({

  render: function() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory />
      </div>
    )
  }
});

/*
 * <Header />
 * Custom Element for Displaying a Header
 *
 */

var Header = React.createClass({

  render: function() {
    return (
      <header className="top">
        <h1>Catch
          <span className="ofThe">
            <span className="of">of</span>
            <span className="the">the</span>
          </span>
          Day
        </h1>
        <h3 className="tagline"><p>{this.props.tagline}</p></h3>
      </header>
    )
  }
});

/*
 * <Order />
 * Custom Element for Displaying an Order
 *
 */

var Order = React.createClass({

  render: function() {
    return (
      <h2>Order</h2>
    )
  }
});

/*
 * <Inventory />
 * Custom Element for Displaying an Inventory
 *
 */

var Inventory = React.createClass({

  render: function() {
    return (
      <h2>Inventory</h2>
    )
  }
});

/*
 * <StorePicker />
 * Custom Element for Picking a store
 *
 */

var StorePicker = React.createClass({

  render: function() {
    return (
      <form className="store-selector">
        <h2>Please Enter A Store</h2>
        <input type="text" ref="storeId" defaultValue={h.getFunName()} />
        <input type="submit" />
      </form>
    )
  }
});

/*
 * <NotFound />
 * Custom Element for NotFound page
 *
 */

var NotFound = React.createClass({

  render: function() {
    return (
      <h1>Not Found!</h1>
    )
  }
});

/*
 * Routes
 *
 */
var routes = (
  <Router history={createBrowserHistory()}>
    <Route path="/" component={StorePicker} />
    <Route path="/store/:storeId" component={App} />
    <Route path="*" component={NotFound} />
  </Router>
)

ReactDOM.render(routes, document.querySelector('#main'));
