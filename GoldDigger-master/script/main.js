const game = new Phaser.Game(window.innerWidth , window.innerHeight , Phaser.CANVAS, 'gameDiv');

game.state.add('loading',loading)
game.state.add('gameStory',gameStory)
game.state.add('tutorial',tutorial)
game.state.add('goBack', goBack)
game.state.add('goForth', goForth)
game.state.add('gameplay',gameplay)
game.state.add('player1win', player1win)
game.state.add('player2win', player2win)

game.state.start('loading')




