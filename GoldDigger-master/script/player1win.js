let player1win ={
    create: function(){
        backGroundStory = game.add.tileSprite(
            this.world.centerX , this.world.centerY, window.innerWidth , window.innerHeight, 'bg'
        );
        backGroundStory.anchor.set(0.5)
        collect = 0
        player1collect = 0
        player2collect = 0
        textWin=game.add.text(
            this.world.centerX,this.world.centerY, "Брок спечели!\n Играй отново(R)",{ fontSize: '80px', fontWeight: "bold", fill: '#ffdf00', align:'center'}
        )
        textWin.anchor.set(0.5)
        color1Restart()
        restart = game.input.keyboard.addKey(Phaser.Keyboard.R)
        restart.onDown.addOnce(this.again,this)
    },
    update: function(){
        backGroundStory.tilePosition.x-=2;
        
    },
    again: function(){
        game.state.start('goBack')
    }
}
const color1Restart = function () {
    game.time.events.add(Phaser.Timer.SECOND * timer, color2Restart, this);
    textWin.addColor("#ffdf00", 0).addColor("#ffdf00", 13)
    
}

const color2Restart = function () {
    game.time.events.add(Phaser.Timer.SECOND * timer, color3Restart, this);
    textWin.addColor("#ff0000", 0)

}

const color3Restart = function () {
    game.time.events.add(Phaser.Timer.SECOND * timer, color4Restart, this);
    textWin.addColor("#11ff00", 0)
}

const color4Restart = function () {
    game.time.events.add(Phaser.Timer.SECOND * timer, color5Restart, this);
    textWin.addColor("#0091ff", 0)

}

const color5Restart = function () {
    game.time.events.add(Phaser.Timer.SECOND * timer, color6Restart, this);
    textWin.addColor("#bfbfbf", 0)

}

const color6Restart = function () {
    game.time.events.add(Phaser.Timer.SECOND * timer, color1Restart, this);
    textWin.addColor("#cc00cc", 0)

}