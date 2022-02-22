let collect = 0
let player1collect = 0
let player2collect = 0
let gameplay ={
    create: function(){

        jump=game.add.audio('jump')
        pickup=game.add.audio('pickup')
        ouch=game.add.audio('ouch')


        game.physics.startSystem(Phaser.Physics.ARCADE);

        mapBg=game.stage.backgroundColor = "#ffffb3"


        map = game.add.tilemap('tilemap')
        map.addTilesetImage("Cavee",'tileset')
        map.addTilesetImage('spike','spike')
        map.setCollisionByExclusion([21,22,158,159,160,161,162,163,164,165,184,185,186,187,305,304,303,302,301,300,299,298,297,296,295,294,293,292,291,290,289,288,329,328,327,326,325,324,323,322,321,320,319,318,317,316,315,314,313,312,353,352,351,350,349,348,347,346,345,344,343,342,341,340,339,338,337,336,360,361,362,375,376,377,380, 385, 386,384, 400, 401,399,404,405, 409, 410,408,420, 422, 423, 424, 425, 421, 428, 429, 430,427, 433, 434, 435, 436, 437,432,444, 445, 446, 447, 448, 449,451, 452, 453, 454,456, 457, 458, 459, 460, 461,468, 469, 470, 471, 472, 473,476,477,481, 482, 483, 484, 485,480,492, 493, 494, 495, 496, 497,500,504, 505, 506, 507, 508, 509, 510,516, 517, 518, 519, 520, 521,529, 530, 531, 532, 533, 534,528,540, 541, 542, 543, 544, 545,553, 554, 555, 556, 557, 558,552,564, 565, 566, 567, 568, 569])
        spikes = game.add.group()
        spikes.enableBody = true
        
        groundLayer = map.createLayer(0)
        map.createFromObjects('Object Layer 1', 577, 'spike', 0, true, false, spikes)
        map.createFromObjects('Object Layer 2', 578, 'spike2', 0, true, false, spikes)
        map.createFromObjects('Object Layer 3', 579, 'spike2', 1, true, false, spikes)
        map.createFromObjects('Object Layer 4', 580, 'spike3', 0, true, false, spikes)

        // groundLayer.scale.setTo(1.2)
        // spikes.scale.setTo(1.2)

        groundLayer.fixedToCamera=false
        groundLayer.x= this.world.centerX-(1056/2)
        groundLayer.y=this.world.centerY-(640/2)
        // groundLayer.anchor.setTo(0.5)
        spikes.x=this.world.centerX-(1056/2)
        spikes.y=this.world.centerY-(640/2)
        //512*512
        //1056*640

        player1 = game.add.sprite(1*16+this.world.centerX-(512/2),29*16+this.world.centerY-(512/2),'miner1')
        game.physics.arcade.enable(player1)
        player1.body.gravity.y = 650
        player1.animations.add('walkRight', [0, 1, 2, 3, 4, 5, 6, 7], 24, true);
        player1.animations.add('walkLeft', [8, 9, 10, 11, 12, 13, 14, 15], 24, true);
        player1.scale.setTo(1)
        player1.body.collideWorldBounds = true;

        player2 = game.add.sprite(30*16+this.world.centerX-(512/2),29*16+this.world.centerY-(512/2),'miner2')
        game.physics.arcade.enable(player2)
        player2.body.gravity.y = 650
        player2.animations.add('walkRight', [0, 1, 2, 3, 4, 5, 6, 7], 24, true);
        player2.animations.add('walkLeft', [8, 9, 10, 11, 12, 13, 14, 15], 24, true);
        player2.scale.setTo(1)
        player2.body.collideWorldBounds = true;

        let coinspawnsx = [4*16,16.5*16,29*16, 10*16, 23*16, 8*16, 25*16]
        let coinspawnsy = [13*16,25*16, 20*16]

        coins = game.add.physicsGroup()
        coins.enableBody = true
        
        coin = coins.create(16.5*16+this.world.centerX-(540/2),10*16+this.world.centerY-(640/2),'coin')
        coin.animations.add('spin',[0,1,2,3,4,5],12,true).play()
        coin.scale.setTo(1)

        coin = coins.create(440, 220 ,'coin')
        coin.animations.add('spin',[0,1,2,3,4,5],12,true).play()
        coin.scale.setTo(1)

        coin = coins.create(game.world.width-450, 220 ,'coin')
        coin.animations.add('spin',[0,1,2,3,4,5],12,true).play()
        coin.scale.setTo(1)

        coin = coins.create(440, game.world.height-320 ,'coin')
        coin.animations.add('spin',[0,1,2,3,4,5],12,true).play()
        coin.scale.setTo(1)

        coin = coins.create(game.world.width-450, game.world.height-320 ,'coin')
        coin.animations.add('spin',[0,1,2,3,4,5],12,true).play()
        coin.scale.setTo(1)

        coin = coins.create(770, 190 ,'coin')
        coin.animations.add('spin',[0,1,2,3,4,5],12,true).play()
        coin.scale.setTo(1)

        coin = coins.create(game.world.width-780, 190 ,'coin')
        coin.animations.add('spin',[0,1,2,3,4,5],12,true).play()
        coin.scale.setTo(1)

        coin = coins.create(470, game.world.height-220 ,'coin')
        coin.animations.add('spin',[0,1,2,3,4,5],12,true).play()
        coin.scale.setTo(1)

        coin = coins.create(game.world.width-490, game.world.height-220 ,'coin')
        coin.animations.add('spin',[0,1,2,3,4,5],12,true).play()
        coin.scale.setTo(1)



        // for(i=0;i<4;i++){

        //     coin = coins.create(game.rnd.pick(coinspawnsx)+this.world.centerX-(512/2),game.rnd.pick(coinspawnsy)+this.world.centerY-(512/2),'coin')
        //     coin.animations.add('spin',[0,1,2,3,4,5],12,true).play()
        //     coin.scale.setTo(1)
        // }
        
        

        cursors = game.input.keyboard.createCursorKeys()
        w = game.input.keyboard.addKey(Phaser.Keyboard.W)
        a = game.input.keyboard.addKey(Phaser.Keyboard.A)
        d = game.input.keyboard.addKey(Phaser.Keyboard.D)
    },
    update: function(){
        
        game.physics.arcade.collide(player1, groundLayer)
        game.physics.arcade.collide(player2, groundLayer)
        game.physics.arcade.overlap(spikes, player1,
             function(player1){
                player1.kill()
                ouch.play()
                player1.reset(1*16+this.world.centerX-(512/2),29*16+this.world.centerY-(512/2))
             }, 
             null, this)
        game.physics.arcade.overlap(spikes, player2,
            function(player2){
                player2.kill()
                ouch.play()
                player2.reset(30*16+this.world.centerX-(512/2),29*16+this.world.centerY-(512/2))
            }, 
            null, this)
        game.physics.arcade.overlap(player1, coins, 
            function(sprite,coin){
                coin.kill()
                pickup.play()
                player1collect++
                collect++                
            }, null, this)
        game.physics.arcade.overlap(player2, coins, 
            function(sprite,coin){
                coin.kill()
                pickup.play()
                player2collect++
                collect++
            }, null, this)
        if(collect>=7){
            if(player1collect>player2collect){
                this.victory1()
            }else{
                this.victory2()
            }
        }
        if (cursors.left.isDown) {
            player2.body.velocity.x = -150
            player2.animations.play('walkLeft')
        } else if (cursors.right.isDown) {
            player2.body.velocity.x = 150
            player2.animations.play('walkRight')
        } else {
            player2.body.velocity.x = 0
            player2.animations.stop()
            player2.frame = 0
        }    
        if (cursors.up.isDown && player2.body.onFloor()) {
            player2.body.velocity.y = -300
            jump.play()
        }
        if (a.isDown) {
            player1.body.velocity.x = -150
            player1.animations.play('walkLeft')
        } else
        if (d.isDown) {
            player1.body.velocity.x = 150
            player1.animations.play('walkRight')
        } else {
            player1.body.velocity.x = 0
            player1.animations.stop()
            player1.frame = 0
        }    
        if (w.isDown && player1.body.onFloor()) {
            player1.body.velocity.y = -300
            jump.play()
        }
    },
    victory1: function(){
        game.state.start('player1win')
    },
    victory2: function(){
        game.state.start('player2win')
    }
}