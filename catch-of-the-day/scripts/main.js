var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigation = ReactRouter.Navigation;
var History = ReactRouter.History;
var createBrowserHistory = require('history/lib/createBrowserHistory');

var h = require('./helpers');

/*
 * <App />
 * Custom Element for the Entire Application
 *
 */

var App = React.createClass({

  getInitialState: function() {
    return {
      fishes: {},
      order: {}
    }
  },

  addFish: function(fish) {

    var timestamp = (new Date()).getTime();
    this.state.fishes['fish0' + timestamp] = fish;
    this.setState({ fishes: this.state.fishes });
  },

  loadSamples: function() {
    console.log('called loadSamples');
    this.setState({
      fishes: require('./sample-fishes')
    });
  },

  renderFish: function(key) {
    return <Fish key={key} index={key} details={this.state.fishes[key]} />
  },

  render: function() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="list-of-fishes">
            {Object.keys(this.state.fishes).map(this.renderFish)}
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
      </div>
    )
  }
});

/*
 * <Fish />
 * Custom Element for Displaying an Fish
 *
 */
var Fish = React.createClass({

  render: function() {
    return (
      <li>
        <img src={this.props.details.image} alt="" />
      </li>
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
      <div>
        <h2>Inventory</h2>
        <AddFishForm {...this.props} />
        <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
      </div>
    )
  }
});

/*
 * <AddFishForm />
 * Custom Element for Adding Fish
 *
 */
var AddFishForm = React.createClass({

  createFish: function(event) {

    event.preventDefault();
    var fish = {
      name: this.refs.name.value,
      price: this.refs.price.value,
      status: this.refs.status.value,
      desc: this.refs.desc.value,
      image: this.refs.image.value
    };

      this.props.addFish(fish);
      this.refs.fishForm.reset();
  },

  render: function() {
    return (
      <form className="fish-edit" ref="fishForm" onSubmit={this.createFish}>
        <input type="text" ref="name" placeholder="Fish Name" />
        <input type="text" ref="price" placeholder="Fish Price" />
        <select ref="status">
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea type="text" ref="desc" placeholder="Desc"></textarea>
        <input type="text" ref="image" placeholder="URL to Image" />
        <button type="submit">+ Add Item</button>
      </form>
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
 * <StorePicker />
 * Custom Element for Picking a store
 *
 */

var StorePicker = React.createClass({

  mixins: [History],

  goToStore: function(event) {

    event.preventDefault();
    var storeId = this.refs.storeId.value;
    this.history.pushState(null, '/store/' + storeId);
  },

  render: function() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
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
