/*jshint esnext: true */

class Countdown extends React.Component {
  render() {
    var minutesRemaining = Math.floor(this.props.timer / 60);
    var secondsRemaining = String( '0' + (this.props.timer - minutesRemaining * 60)).slice(-2);

    return (
      <section id='countdown'>
        <div className="logo"><img src="../../image/logo.jpg"></img></div>
        <p className="countdown">{minutesRemaining} : {secondsRemaining}</p>
      </section>
    );
  }
}
