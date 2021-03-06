/*jshint esnext: true */

class Feed extends React.Component {
  render() {
    var content = this.props.tweets.map(tweet => {
      return (
        <Tweet key={tweet._id} tweet={tweet} />
      )
    });

    return (
      <div id='feed'>
        <ul>{content}</ul>
      </div>
    )
  }
};
