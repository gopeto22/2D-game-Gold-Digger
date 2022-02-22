
let goBack ={
    create: function(){

        game.stage.backgroundColor = "#fff"
        
        backGroundStory = game.add.tileSprite(
            this.world.centerX , this.world.centerY, window.innerWidth , window.innerHeight, 'bg'
        );
        backGroundStory.anchor.set(0.5)
        moveBackground();

        welcome = game.add.text(
            this.world.centerX, 100, "Добре дошли в Gold Digger", { fontSize: '50px', fontWeight: "bold", fill: '#ffdf00'}
        )
        welcome.anchor.set(0.5)
        welcome.alpha=0.65
        

        let title = game.add.text(
            this.world.centerX, 220, "История на играта", {fontSize: '30px', fill: '#ffffff'}
        )
        title.anchor.set(0.5)
        
        text = game.add.text(
            this.world.centerX, 250, '____________________________________________________________________\nБрок и Еди са двама братя, които цял живот работят като миньори.\nТе винаги се състезават кой е по-добър от двамата и кой ще стане по-богат.\nИ сега, когато и двамата попадат на залеж от златни монети, \nбитката между тях става все по-съсредоточена.\nНека надпреварата кой ще събере повече златно да започне!\n\n\nА ти коя стана ще избереш?\n\nБрок или Еди?', { font: "30px Arial", fontWeight: "bold", fill: "rgba(204, 122, 0)", align:"left", backgroundColor: "rgba(0, 0, 0, 0.5)"}
        );
        text.anchor.x = 0.5;
        
        pressEnterToCon = game.add.text(
            game.world.width - 280 , game.world.height - 80, 'Натисни ENTER, за да продължиш', {fill:"black"}
        );
        pressEnterToCon.anchor.x = 0.5
        pressEnterToCon.anchor.y = 0.5
        color1();
        let enter = game.input.keyboard.addKey(Phaser.Keyboard.ENTER)
        enter.onDown.addOnce(this.next,this)
    },
    next: function(){
        game.state.start('goForth', false, false)
    }
}

const moveBackground = function () {
    game.time.events.add(Phaser.Timer.SECOND * 0.001, moveBackground, this);
    backGroundStory.tilePosition.x-=2;
}
