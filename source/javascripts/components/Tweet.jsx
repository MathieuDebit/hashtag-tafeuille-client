/*jshint esnext: true */

class Tweet extends React.Component {
  render() {
    var tweet = this.props.tweet;
    var tweet_url = 'http://www.twitter.com/' + tweet.screenname + '/status/' + tweet.id_str;

    return (
      <li key={this.props.key} className={'tweet' + (tweet.blueKeyword ? ' teamBlue' : '') + (tweet.blackKeyword ? ' teamBlack' : '')}>
        <img className='avatar' src={tweet.avatar} />
        <span className='text'>
          <a href={tweet_url} target='_blank'>
            <span className='screen-name'>@{tweet.screenname}</span>
          </a>
          <span className='name'>{tweet.author}</span>
          <span className='content'>{tweet.body}</span>
        </span>
      </li>
    );
  }
}
