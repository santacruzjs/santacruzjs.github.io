var Router = require('react-router');
var Route = Router.Route;

// declare our routes and their hierarchy
var routes = (
  <Route handler={App}>
    <Route path="/" handler={Home}/>
    <Route path="about" handler={Home}/>
  </Route>
);
