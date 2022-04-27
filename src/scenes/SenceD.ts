export default class SenceD extends Phaser.Scene {
  constructor() {
    super({ key: "SenceD" });
  }
  preload() {
    
  }

  create() {
    // bgc color
    Phaser.Display.Color.HexStringToColor("#00151C");
    this.add.image(500, 360, "done");
    let over = this.add.image(500, 560, "again").setScale(0.5, 0.5);
    // over.setInteractive();
    // over.on(
    //   "pointerdown",
    //    () => {
    //     this.scene.start('LevelOneScene')
    //   },
      
    // );
  }
}
