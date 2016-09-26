var React = require('react')

var Link = require('react-router').Link

var Home = React.createClass({

  propTypes: {
    route: React.PropTypes.object
  },

  render: function () {
    return (
      <div className='home-container'>
        <div>My react app!</div>
        <Link to={'/otherpage'}>Go to another page</Link>
      </div>
      )
  }
})

module.exports = Home
