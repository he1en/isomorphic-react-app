var React = require('react')

var Link = require('react-router').Link

var Home = React.createClass({

  propTypes: {
    route: React.PropTypes.object
  },

  render: function () {
    return (
      <div className='home-container'>
        <h1>My react app!</h1>
        <Link to={'/otherpage'}>Go to another page</Link>
      </div>
      )
  }
})

module.exports = Home
