/*jshint esnext: true */

class Tweet extends React.Component {
  render() {
    var tweet = this.props.tweet;

    return (
      <li key={this.props.key} className={'tweet' + (tweet.blueKeyword ? ' teamBlue' : '') + (tweet.redKeyword ? ' teamRed' : '')}>
        <img className='avatar' src={tweet.avatar} />
        <span className='text'>
          <span className='screen-name'>@{tweet.screenname}</span>
          <span className='name'>{tweet.author}</span>
          <span className='content'>{tweet.body}</span>
        </span>
      </li>
    );
  }
}
