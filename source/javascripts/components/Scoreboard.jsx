/*jshint esnext: true */

class Scoreboard extends React.Component {
  handleClick(event) {
    event.preventDefault();

    $('#scoreboard').hide();
  }

  render() {
    if (this.props.timer == 0) {
      $('#scoreboard').show();
    }

    return (
      <section id='scoreboard'>
        <a className='close' href='#' onClick={this.handleClick.bind(this)}>close</a>
        <p>{this.props.blueCount} points !</p>
        <p>{this.props.redCount} points !</p>
      </section>
    );
  }
}
