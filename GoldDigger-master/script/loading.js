let loading ={
    preload: function(){
        game.load.spritesheet("miner1", "resources/miner1.png",512/16,32)
        game.load.spritesheet("miner2", "resources/miner2.png",512/16,32)
        game.load.tilemap('tilemap', 'tileMap/cavefinal.json', null, Phaser.Tilemap.TILED_JSON)
        game.load.image('tileset', 'tileMap/Cavee.png')
        game.load.image('gameStory', 'resources/gameStory.png')
        game.load.image('bg', 'resources/cave.png')
        game.load.spritesheet('coin','resources/coin_spin.png',96/6,16)
        game.load.image('spike','resources/spike.png')
        game.load.spritesheet('spike2', 'resources/spike2.png', 84/2,15)
        game.load.image('spike3', 'resources/spike3.png')
        game.load.tilemap('tutorial','tileMap/tutorial.json',null,Phaser.Tilemap.TILED_JSON)
        game.load.audio('jump','resources/Jump.wav');
        game.load.audio('pickup','resources/Pickup_Coin.wav');
        game.load.audio('ouch','resources/Hit_Hurt.wav');
        game.load.image('w', 'resources/controls/w.png')
        game.load.image('w1', 'resources/controls/w1.png')
        game.load.image('a', 'resources/controls/a.png')
        game.load.image('a1', 'resources/controls/a1.png')
        game.load.image('s', 'resources/controls/s.png')
        game.load.image('s1', 'resources/controls/s1.png')
        game.load.image('d', 'resources/controls/d.png')
        game.load.image('d1', 'resources/controls/d1.png')
        game.load.image('up', 'resources/controls/up.png')
        game.load.image('up1', 'resources/controls/up1.png')
        game.load.image('left', 'resources/controls/left.png')
        game.load.image('left1', 'resources/controls/left1.png')
        game.load.image('down', 'resources/controls/down.png')
        game.load.image('down1', 'resources/controls/down1.png')
        game.load.image('right', 'resources/controls/right.png')
        game.load.image('right1', 'resources/controls/right1.png')
    },
    create: function(){
        game.state.start('gameStory')
    }
}