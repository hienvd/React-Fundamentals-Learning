var React = require('react');

var Router = require('react-router-dom');
var HashRouter = Router.HashRouter;
var Route = Router.Route;

var Main = require('../components/Main');
var Home = require('../components/Home');

var routes = (
  <HashRouter>
    <div>
      <Route path='/' component={Main} />
      <Route path='/home' component={Home} />
    </div>
  </HashRouter>
)

module.exports = routes;