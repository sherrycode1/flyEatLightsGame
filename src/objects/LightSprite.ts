export default class LightSprite extends Phaser.Physics.Arcade.Sprite {
  points: number

  constructor(scene: Phaser.Scene, x: number, y: number, points: number = 1) {
    super(scene, x, y, 'light-round-1')
    super(scene, x, y, 'light2-round-2')

    this.points = points

    scene.add.existing(this)
    scene.physics.add.existing(this)

    this._makeAnimations()

    if (this.points == 1) {
      this.play('light-low')
    } else if (this.points == 5) {
      this.play('light-medium')
    } else if (this.points == 10) {
      this.play('light-high')
    }

  }

  
  _makeAnimations() {
    this.anims.create({
      key: 'frog-still',
      frames: [{ key: 'frog', frame: 'frog-still-10' }],
      frameRate: 10,
      repeat: -1,
    })

    this.anims.create({
      key: 'frog-lick',
      frames: this.anims.generateFrameNames('frog', {
        prefix: 'frog-still-',
        start: 1,
        end: 10,
      }),
      frameRate: 20,
      repeat: -1,
    })
  }
}
