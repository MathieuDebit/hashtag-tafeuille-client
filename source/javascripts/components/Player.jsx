/*jshint esnext: true */

class Player extends React.Component {
  render() {
    var player = this.props.player;

    return (
      <div className={'profile ' + this.props.team}>
        <div>
          <img className='avatar' src={player.avatar}/>
          <p className="vote">Votez avec <span className="bold">#tafeuille{this.team()}</span></p>
        </div>

        <div className="infos">
          <p className="name">{player.name}</p>
          <p className="twitter">{player.screenname}</p>
        </div>
      </div>
    );
  }

  team() {
    var team;
    if (this.props.team == 'red') {
      team = 'Noir';
    };
    if (this.props.team == 'blue') {
      team = 'Bleu'
    };
    return team;
  }
}
