var players = [
  {
    avatar: 'https://tristanwright.files.wordpress.com/2010/09/self-portrait-gif.gif',
    name: 'Jean Gueux',
    screenname: 'xX-Dark_Jean-Xx'
  },
  {
    avatar: 'https://tristanwright.files.wordpress.com/2010/09/self-portrait-gif.gif',
    name: 'Goerges',
    screenname: 'goerge-du-64'
  }
]

React.render(
  <App players={players}/>,
  document.getElementById('app')
);
