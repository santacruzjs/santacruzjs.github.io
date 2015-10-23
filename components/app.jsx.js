var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render () {
    return (
      <div>
        <h1>App</h1>
        <RouteHandler/>
      </div>
    )
  }
});

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root/>, document.querySelector('main'));
});
