/*jshint esnext: true */

class Scoreboard extends React.Component {
  render() {
    return (
      <section id='scoreboard'>
        <a className='close' href='#'>close</a>
        <p>{this.props.blueCount} points !</p>
        <p>{this.props.redCount} points !</p>
      </section>
    );
  }
}
