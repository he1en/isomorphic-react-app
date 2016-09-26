var React = require('react')
var ReactRouter = require('react-router')
var IndexRoute = ReactRouter.IndexRoute
var Route = ReactRouter.Route

var App = require('./components/app.js')
var Home = require('./components/home.js')
var NotFoundPage = require('./components/not-found.js')
var OtherPage = require('./components/other.js')

var routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='otherpage' component={OtherPage} />
    <Route path='*' component={NotFoundPage} />
  </Route>
)

module.exports = routes
