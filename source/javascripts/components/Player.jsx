/*jshint esnext: true */

class Player extends React.Component {
  render() {
    var player = this.props.player;

    return (
      // <section id='player' className={'player-' + this.props.team}>
      //   <div className='avatar'>
      //     <img src={player.avatar} />
      //     <span>{player.name}</span>
      //   </div>
      //
      //   <div className='twitter'>
      //     <span>@{player.screenname}</span>
      //   </div>
      //
      //   <p className='button'>Vote ou RT avec #TaFeuille{this.team()}</p>
      // </section>

      <div class="profile" className={'player-' + this.props.team}><img src={player.avatar} class="avatar"/>
    <div class="infos">
      <p class="name">{player.name}</p>
      <p class="twitter">@{player.screenname}</p>
    </div>
  </div>
    );
  }

  team(){
    var team;
    if (this.props.team == 'red'){
      team = 'rouge';
    };
    if (this.props.team == 'blue') {
      team = 'bleu'
    };
    return team;
  }
}
