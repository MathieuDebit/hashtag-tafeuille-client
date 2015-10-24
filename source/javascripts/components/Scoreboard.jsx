/*jshint esnext: true */

class Scoreboard extends React.Component {
  handleClick(event) {
    event.preventDefault();

    $('#scoreboard').hide();
  }

  render() {
    if (this.props.timer == 0) {
      $('#scoreboard').addClass('animated fadeInDownBig');
      $('#overlay').addClass('active');
    }

    return (
      <div>

      <section id='scoreboard'>
        <h1>Le public a voté !</h1>
        <h2>#TaFeuilleBleue : <span className="bleu">{this.props.blueCount} voix</span></h2>
        <h2>#TaFeuilleNoire : <span className="noir">{this.props.blackCount} voix</span></h2>

      </section>
          <div id='overlay'></div>
      </div>
    );
  }
}
