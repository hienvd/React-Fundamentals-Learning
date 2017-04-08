var React = require('react');
var ReactDom = require('react-dom');

var FriendContainer = React.createClass({
  render: function() {
    let name = 'Hien Vuong';
    let friends = ['Hong Pham', 'Khanh An'];
    return (
      <div>
        <h3>Name: {name} </h3>
        <FriendList friends={friends} />
      </div>
    )
  }
})

var FriendList = React.createClass({
  render: function() {
    let listNames = this.props.friends.map( friend => {
      return <li> {friend} </li>
    })

    return (
      <div>
        <h3>Friends</h3>
        <ul>
          {listNames}
        </ul>
      </div>
    )
  }
})

ReactDom.render(
  <FriendContainer/>,
  document.getElementById('app')
)

//--- React function composition

var ProfilePic1 = React.createClass({
  render: function() {
    return (
      <img src={'https://twitter.com/' + this.props.username + '/profile_image?size=normal'}/>
    )
  }
})

var ProfilePic = function (props) {
  return <img src={'https://twitter.com/' + props.username + '/profile_image?size=normal'}/>
}

var ProfileLink = function(props) {
  return (
    <a href={'https://www.twitter.com/' + props.username}>
     Go to Twitter
    </a>
  )
}

var Avatar = function(props) {
  return (
    <div>
      <ProfilePic username={props.username} />
      <ProfileLink username={props.username} />
    </div>
  )
}

ReactDom.render(
  <Avatar username='duchienvuong' />,
  document.getElementById('twitter')
)