let player2win ={
    create: function(){
        backGroundStory = game.add.tileSprite(
            this.world.centerX , this.world.centerY, window.innerWidth , window.innerHeight, 'bg'
        );
        backGroundStory.anchor.set(0.5)
        collect = 0
        player1collect = 0
        player2collect = 0
        textWin=game.add.text(
            this.world.centerX,this.world.centerY, "Еди спечели!\n Играй отново(R)", { fontSize: '80px', fontWeight: "bold", fill: '#ffdf00', align:'center'}
        )
        textWin.anchor.set(0.5)
        color1Restart()
        restart = game.input.keyboard.addKey(Phaser.Keyboard.R)
        restart.onDown.addOnce(this.again2,this)
    },
    update: function(){
        backGroundStory.tilePosition.x-=2;
        
    },
    again2: function(){
        game.state.start('goBack')
    }
}