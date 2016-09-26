var React = require('react')

var Link = require('react-router').Link


var Other = React.createClass({

  render: function () {
    return (
      <div>
        <h1>Another Page</h1>
        <Link to={'/'}>Go home</Link>
      </div>
    )
  }
})

module.exports = Other
