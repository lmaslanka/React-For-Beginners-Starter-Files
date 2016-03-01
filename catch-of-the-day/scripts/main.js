var React = require('react');
var ReactDOM = require('react-dom');

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
          <Header />
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
      <h2>Header</h2>
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
        <input type="text" ref="storeId" />
        <input type="submit" />
      </form>
    )
  }
});

ReactDOM.render(<App />, document.querySelector('#main'));
