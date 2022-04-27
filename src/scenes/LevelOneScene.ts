import FrogSprite from "../objects/FrogSprite";
import FireflySprite from "../objects/FireflySprite";

export default class LevelOneScene extends Phaser.Scene {
  frog!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
  player!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
  cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  score = 0;
  scoreUI!: Phaser.GameObjects.Text;
  // a : new Phaser.Game({
  //   type: Phaser.AUTO, 
  //   width : 1000 ,
  //   height: 720 ,
  //   backgroundColor: '#000'
    
  // })
  frog1!: FrogSprite;
  frog2!: FrogSprite;
  firefly!: FireflySprite;
  // light1!: LightSprite
  // light2!: LightSprite

  constructor() {
    super({ key: "LevelOneScene" });
    
  }
  preload() {}
  create() {
    //bg image
    this.add.image(0, 0, "forest").setOrigin(0.0);

    //frog
    // this.frog = this.physics.add.sprite(500, 620, 'frog')
    this.frog1 = new FrogSprite(this, 200, 480).setScale(1 / 2).refreshBody();
    this.frog2 = new FrogSprite(this, 700, 550).setScale(1 / 2).refreshBody();

    // lights
    // console.log(lights);

    let lights = this.physics.add.group();
    // 测试：只能添加一个固定位置的球
    //  let lights = this.physics.add.group({
    //     key: "light1",
    //     repeat: 11,
    //     setXY: { x: 12, y: 0, stepX: 70 },
    //   });
    // lights.children.iterate(function (child) {
    //   child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    // });

    // 随机分布的球
    for (let x = 1; x < 4; x++) {
      for (let i = 1; i < 7; i++) {
        let xx = Phaser.Math.Between(0, 1000);
        let yy = Phaser.Math.Between(0, 720);
        // 一开始的思路，不行，添加到对象里面了，但是Overlap监听不到
        // lights.children.entries.push(this.add.image(xx, yy, "light" + i));
        // 第二次添加随机 , 成功了。。。
        lights.create(xx, yy, "light" + i);
      }
    }
    lights.children.iterate((child) => {
      // key
      // console.log(child.texture.key);
    });
    // console.log(lights.children);

    // something happens
    this.frog1.prey();
    this.frog2.prey();

    //firefly
    this.firefly = new FireflySprite(this, 20, 400)
      .setScale(1 / 2)
      .refreshBody();
    // this.firefly.fly();

    //keyboard
    this.cursors = this.input.keyboard.createCursorKeys();

    // light & firely

    this.physics.add.overlap(
      this.firefly,
      lights.children.entries,
      this.collectStar,
      null,
      this
    );
    this.physics.add.overlap(
      this.firefly,
      this.frog1,
      this.TouchedFrog,
      null,
      this
    );
    this.physics.add.overlap(
      this.firefly,
      this.frog2,
      this.TouchedFrog,
      null,
      this
    );

    //score
    
    this.scoreUI = this.add.text(32, 32, "TOTAL SCORE: ", {
      fontSize: "32px",
      color: "#fff",
      fontFamily: 'Amatic SC'
    });
  }

  update() {
    if (this.cursors.left.isDown) {
      this.firefly.setVelocityX(-100);
    } else if (this.cursors.right.isDown) {
      this.firefly.setVelocityX(100);
    } else {
      this.firefly.setVelocityX(0);
    }

    if (this.cursors.down.isDown) {
      this.firefly.setVelocityY(100);
    } else if (this.cursors.up.isDown) {
      this.firefly.setVelocityY(-100);
    } else {
      this.firefly.setVelocityY(0);
    }
  }

  collectStar(firefly, lights) {
    lights.disableBody(true, true);
    switch (lights.texture.key) {
      case 'light1':
        this.score += 5
        this.scoreUI.setText('TOTAL SCORE: ' + this.score);
        break;
      case 'light2':
        this.score += 4
        this.scoreUI.setText('TOTAL SCORE: ' + this.score);
        break;
      case 'light3':
        this.score += 4
        this.scoreUI.setText('TOTAL SCORE: ' + this.score);
        break;
      case 'light4':
        this.score += 3
        this.scoreUI.setText('TOTAL SCORE: ' + this.score);
        break;
      case 'light5':
        this.score += 2
        this.scoreUI.setText('TOTAL SCORE: ' + this.score);
        break;
      case 'light6':
        this.score += 1
        this.scoreUI.setText('TOTAL SCORE: ' + this.score);
        break;

      default:
        break;
    }
    


    if( this.score === 57){

      this.scene.start('SenceD');
    }
    
  }

  TouchedFrog(firefly, frog){
    firefly.disableBody(true, true);

    this.scene.start('SceneB');
  

    // this.a.play()
  }
  
}
