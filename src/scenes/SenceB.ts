export default class ScenceB extends Phaser.Scene {
  constructor() {
    super({ key: "SceneB" });
  }
  preload() {
    this.load.image("gameover", "assets/img/game-over.png");
    this.load.image("platagain", "assets/img/play-again-button.png");
  }

  create() {
    // bgc color

      Phaser.Display.Color.HexStringToColor("#00151C");
    this.add.image(500, 360, "gameover");
    let over = this.add.image(500, 560, "platagain").setScale(0.5, 0.5);
    over.setInteractive();
    over.on(
      "pointerdown",
      () => {
        this.scene.start('LevelOneScene')
      },
    
    );
  }
}
