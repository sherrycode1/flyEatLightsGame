export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super({ key: "PreloaderScene" });
  }
  preload() {
    this.load.image("forest", "assets/img/forest.png");
    //  load light

    for (let i = 1; i < 7; i++) {
      this.load.image("light" + i, "assets/img/light-round-" + i + ".png");
    }

    // frog
    this.load.atlas(
      "frog",
      "assets/img/frog/frog.png",
      "assets/img/frog/frog.json"
    );

    this.load.atlas(
      "firefly",
      "assets/img/firefly/firefly.png",
      "assets/img/firefly/firefly.json"
    );

    //

    this.load.image("done", "assets/img/nicely-down.png");
    this.load.image("again", "assets/img/play-again-button.png");
  }

  create() {
    this.scene.start("SenceC");
  }
}
