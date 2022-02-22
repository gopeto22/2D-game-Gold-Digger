let goForth = {
    create: function(){  
        
        jump=game.add.audio('jump')
        pickup=game.add.audio('pickup')
        ouch=game.add.audio('ouch')
        
        game.stage.backgroundColor = "#fff"
        
        backGroundTutorial = game.add.tileSprite(
            this.world.centerX , this.world.centerY, window.innerWidth , window.innerHeight, 'bg'
        );
        backGroundTutorial.anchor.set(0.5)
        moveBackgroundTutorial();

        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        miner1Map = game.add.tilemap('tutorial')
        miner1Map.addTilesetImage("cave",'tileset')
        miner1Map.addTilesetImage('spike','spike')
        miner1Map.setCollisionByExclusion([21,22,158,159,160,161,162,163,164,165,184,185,186,187,305,304,303,302,301,300,299,298,297,296,295,294,293,292,291,290,289,288,329,328,327,326,325,324,323,322,321,320,319,318,317,316,315,314,313,312,353,352,351,350,349,348,347,346,345,344,343,342,341,340,339,338,337,336,360,361,362,375,376,377,380, 385, 386,384, 400, 401,399,404,405, 409, 410,408,420, 422, 423, 424, 425, 421, 428, 429, 430,427, 433, 434, 435, 436, 437,432,444, 445, 446, 447, 448, 449,451, 452, 453, 454,456, 457, 458, 459, 460, 461,468, 469, 470, 471, 472, 473,476,477,481, 482, 483, 484, 485,480,492, 493, 494, 495, 496, 497,500,504, 505, 506, 507, 508, 509, 510,516, 517, 518, 519, 520, 521,529, 530, 531, 532, 533, 534,528,540, 541, 542, 543, 544, 545,553, 554, 555, 556, 557, 558,552,564, 565, 566, 567, 568, 569])

        miner1Spikes = game.add.group()
        miner1Spikes.enableBody = true
        
        miner1GroundLayer = miner1Map.createLayer(0)
        miner1Map.createFromObjects('Object Layer 1', 577, 'spike', 0, true, false, miner1Spikes)

        miner1GroundLayer.fixedToCamera = false;
        miner1GroundLayer.y = game.world.height-360;
        miner1GroundLayer.x = 320;
        miner1Spikes.y=game.world.height-360
        miner1Spikes.x=320
               
//-------------------------------------------------------------------------------------------

        miner2Map = game.add.tilemap('tutorial')
        miner2Map.addTilesetImage("cave",'tileset')
        miner2Map.addTilesetImage('spike','spike')
        miner2Map.setCollisionByExclusion([21,22,158,159,160,161,162,163,164,165,184,185,186,187,305,304,303,302,301,300,299,298,297,296,295,294,293,292,291,290,289,288,329,328,327,326,325,324,323,322,321,320,319,318,317,316,315,314,313,312,353,352,351,350,349,348,347,346,345,344,343,342,341,340,339,338,337,336,360,361,362,375,376,377,380, 385, 386,384, 400, 401,399,404,405, 409, 410,408,420, 422, 423, 424, 425, 421, 428, 429, 430,427, 433, 434, 435, 436, 437,432,444, 445, 446, 447, 448, 449,451, 452, 453, 454,456, 457, 458, 459, 460, 461,468, 469, 470, 471, 472, 473,476,477,481, 482, 483, 484, 485,480,492, 493, 494, 495, 496, 497,500,504, 505, 506, 507, 508, 509, 510,516, 517, 518, 519, 520, 521,529, 530, 531, 532, 533, 534,528,540, 541, 542, 543, 544, 545,553, 554, 555, 556, 557, 558,552,564, 565, 566, 567, 568, 569])

        miner2Spikes = game.add.group()
        miner2Spikes.enableBody = true

        miner2GroundLayer = miner2Map.createLayer(0)
        miner2Map.createFromObjects('Object Layer 1', 577, 'spike', 0, true, false, miner2Spikes)

        miner2GroundLayer.fixedToCamera = false; 
        miner2GroundLayer.y = game.world.height-360;
        miner2GroundLayer.x = game.world.width -704;
        miner2Spikes.y=game.world.height-360;
        miner2Spikes.x=game.world.width-704
                
//224*144


        miner1Coin = game.add.sprite(580, game.world.height-235,'coin')
        miner1Coin.scale.setTo(2)
        miner1Coin.animations.add('spin',[0,1,2,3,4,5],20,true).play()
        game.physics.arcade.enable(miner1Coin)


        miner2Coin = game.add.sprite(game.world.width - 444, game.world.height-235,'coin')
        miner2Coin.scale.setTo(2)
        miner2Coin.animations.add('spin',[0,1,2,3,4,5],20,true).play()
        game.physics.arcade.enable(miner2Coin)

        player1 = game.add.sprite(400, game.world.height-300,'miner1')
        game.physics.arcade.enable(player1)
        player1.body.gravity.y = 550
        player1.animations.add('walkRight', [0, 1, 2, 3, 4, 5, 6, 7], 24, true);
        player1.animations.add('walkLeft', [8, 9, 10, 11, 12, 13, 14, 15], 24, true);
        player1.scale.setTo(1.7)
        player1.body.collideWorldBounds = true;

        player2 = game.add.sprite(game.world.width-624, game.world.height-300,'miner2')
        game.physics.arcade.enable(player2)
        player2.body.gravity.y = 550
        player2.animations.add('walkRight', [0, 1, 2, 3, 4, 5, 6, 7], 24, true);
        player2.animations.add('walkLeft', [8, 9, 10, 11, 12, 13, 14, 15], 24, true);
        player2.scale.setTo(1.7)
        player2.body.collideWorldBounds = true;

        w = game.input.keyboard.addKey(Phaser.Keyboard.W)
        a = game.input.keyboard.addKey(Phaser.Keyboard.A)
        s = game.input.keyboard.addKey(Phaser.Keyboard.S)
        d = game.input.keyboard.addKey(Phaser.Keyboard.D)
        wSprite=game.add.sprite(105, game.world.height - 269, 'w')
        aSprite=game.add.sprite(38, game.world.height - 202, 'a')
        sSprite=game.add.sprite(105, game.world.height - 202, 's')
        dSprite=game.add.sprite(172, game.world.height - 202, 'd')
        
        //67

        cursors = game.input.keyboard.createCursorKeys();
        upSprite=game.add.sprite(game.world.width -165, game.world.height - 269, 'up')
        leftSprite=game.add.sprite(game.world.width -232, game.world.height - 202, 'left')
        downSprite=game.add.sprite(game.world.width -165, game.world.height - 202, 'down')
        rightSprite=game.add.sprite(game.world.width - 98, game.world.height - 202, 'right')
        controlsAnimation();

        let title = game.add.text(
            this.world.centerX, 100, "Как се играе", {fontSize: '30px', fill: '#ffffff'}
        )
        title.anchor.set(0.5)

        textT = game.add.text(
            this.world.centerX, 130, '________________________________________________________________________________________\nПравилата на играта са много прости.\nВ мината се генерират на случаен принцип златни монети, които играчите трябва да съберат. \nИграч 1 (Брок) използва W, A, S, D, за да се движи из картата, а Играч 2 (Еди) използва стрелките.\nИграчите трябва да внимават да не попаднат на шиповете. \nВ противен случай ще се върнат в началната си позиция.\nПечели този, който събре повече злато.', { font: "25px Arial", fontWeight: "bold", fill: "rgba(204, 122, 0)", align:"left", backgroundColor: "rgba(0, 0, 0, 0.5)"}
        );
        textT.anchor.x = 0.5;
        text.lineSpacing = -4
        
        pressEscToGoBack = game.add.text(
            this.world.centerX, this.world.centerY, 'Назад(ESC)', {fill: 'black'}
        );
        pressEscToGoBack.anchor.x = 3.8
        pressEscToGoBack.anchor.y = -8.7
        color1GoBack();

        let esc = game.input.keyboard.addKey(Phaser.Keyboard.ESC)
        esc.onDown.addOnce(this.goBack, this)

        pressEnterToCon = game.add.text(
            this.world.centerX , this.world.centerY, '  Старт(ENTER)', {fill:'black'}
        );
        pressEnterToCon.anchor.x = -1.8
        pressEnterToCon.anchor.y = -8.7
        color1();

        let enter = game.input.keyboard.addKey(Phaser.Keyboard.ENTER)        
        enter.onDown.addOnce(this.startGame, this)
    },
    update: function(){
        game.physics.arcade.collide(player1, miner1GroundLayer)
        game.physics.arcade.overlap(miner1Spikes, player1,
            function(player1){
               player1.kill()
               ouch.play() 
               player1.reset(400, game.world.height-300)
            }, 
            null, this)
        game.physics.arcade.collide(player1, miner1Coin, 
            function(){
                miner1Coin.kill()
                pickup.play()
            }, null, this)  

        game.physics.arcade.collide(player2, miner2GroundLayer)
        game.physics.arcade.overlap(miner2Spikes, player2,
            function(player2){
               player2.kill()
               ouch.play() 
               player2.reset(game.world.width-624, game.world.height-300)
            }, 
            null, this)
            game.physics.arcade.collide(player2, miner2Coin, 
                function(){
                    miner2Coin.kill()
                    pickup.play()
                }, null, this)  





        
    },
    goBack: function(){
        game.state.start('goBack')
    },
    startGame: function(){
        game.state.start('gameplay')
    }
}