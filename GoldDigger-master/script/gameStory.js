let backGroundStory

let welcome

let pressEnterToCon

let event

let content;
var line = [];
var wordIndex = 0;
var lineIndex = 0;
var wordDelay = 120;
var lineDelay = 50;
var text

var timer=0.2;


let gameStory ={
    create: function(){

        game.stage.backgroundColor = "#fff"
        
        backGroundStory = game.add.tileSprite(
            this.world.centerX , this.world.centerY, window.innerWidth , window.innerHeight, 'bg'
        );
        backGroundStory.anchor.set(0.5)
        // moveBackgroundStory();

        welcome = game.add.text(
            this.world.centerX, 100, "Добре дошли в Gold Digger", { fontSize: '50px', fontWeight: "bold", fill: '#ffdf00'}
        )
        welcome.anchor.set(0.5)
        welcome.alpha=0.65
        

        let title = game.add.text(
            this.world.centerX, 220, "История на играта", {fontSize: '30px', fill: '#ffffff'}
        )
        title.anchor.set(0.5)

        content=[
            "____________________________________________________________________",
            "Брок и Еди са двама братя, които цял живот работят като миньори.",
            "Те винаги се състезават кой е по-добър от двамата и кой ще стане по-богат.",
            "И сега, когато и двамата попадат на залеж от златни монети, ",
            "битката между тях става все по-съсредоточена.",
            "Нека надпреварата кой ще събере повече златно да започне!",
            "",
            "",
            "А ти коя стана ще избереш?",
            "",
            "Брок или Еди?"
        ];
        text = game.add.text(
            this.world.centerX, 250, '', { font: "30px Arial", fontWeight: "bold", fill: "rgba(204, 122, 0)", align:"left", backgroundColor: "rgba(0, 0, 0, 0.5)"}
        );
        text.anchor.x = 0.5;
        text.lineSpacing = -4
        nextLine();

        pressEnterToCon = game.add.text(
            game.world.width - 280 , game.world.height - 80, 'Натисни ENTER, за да продължиш', {fill:"black"}
        );
        pressEnterToCon.anchor.x = 0.5
        pressEnterToCon.anchor.y = 0.5
        color1();
        let enter = game.input.keyboard.addKey(Phaser.Keyboard.ENTER)
        enter.onDown.addOnce(this.next,this)
    },
    update: function(){
        backGroundStory.tilePosition.x-=2;
        
    },


    next: function(){
        game.state.start('tutorial', false, false)
    }
}

const nextLine = function () {
    event = game.time.events.add(Phaser.Timer.SECOND * 25, nextLine, this);
    if (lineIndex === content.length)
    {
        return;
    }

    line = content[lineIndex].split(' ');

    wordIndex = 0;

    game.time.events.repeat(wordDelay, line.length, function(){
        text.text = text.text.concat(line[wordIndex] + " ");
        wordIndex++;

        if (wordIndex === line.length)
        {
            text.text = text.text.concat("\n");
            game.time.events.add(lineDelay, nextLine, this);
        }
    }, this);

    lineIndex++;
}

const color1 = function () {
    game.time.events.add(Phaser.Timer.SECOND * timer, color2, this);
    welcome.addColor('#ffdf00', 0);
    pressEnterToCon.addColor("#ffdf00", 8).addColor("black", 13);

}
const color2 = function () {
    game.time.events.add(Phaser.Timer.SECOND * timer, color3, this);
    welcome.addColor('#ff0000', 0);
    pressEnterToCon.addColor("#ff0000", 8)

}
const color3 = function () {
    game.time.events.add(Phaser.Timer.SECOND * timer, color4, this);
    welcome.addColor('#11ff00', 0);
    pressEnterToCon.addColor("#11ff00", 8)

}
const color4 = function () {
    game.time.events.add(Phaser.Timer.SECOND * timer, color5, this);
    welcome.addColor('#0091ff', 0);
    pressEnterToCon.addColor("#0091ff", 8)

}
const color5 = function () {
    game.time.events.add(Phaser.Timer.SECOND * timer, color6, this);
    welcome.addColor('#bfbfbf', 0);
    pressEnterToCon.addColor("#bfbfbf", 8)

}
const color6 = function () {
    game.time.events.add(Phaser.Timer.SECOND * timer, color1, this);
    welcome.addColor('#cc00cc', 0);
    pressEnterToCon.addColor("#cc00cc", 8)
}
