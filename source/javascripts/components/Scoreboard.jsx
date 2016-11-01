/*jshint esnext: true */

class Scoreboard extends React.Component {
  handleClick(event) {
    event.preventDefault();

    $('#scoreboard').hide();
  }

  render() {
    if (this.props.timer == 0) {
      $('#scoreboard').addClass('animated fadeInDownBig');
      $('.overlay').addClass('active');
    }

    return (
      <div>

      <div className="overlay">
        <section id='scoreboard'>
          <h1>Le public a voté !</h1>
          <h2>#tafeuilleRose : <span className="bleu score">{this.props.blueCount} voix</span></h2>
          <h2>#tafeuilleJaune : <span className="noir score">{this.props.blackCount} voix</span></h2>
        </section>
      </div>
      </div>
    );
  }
}
