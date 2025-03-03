//Set the splash screen
game.splash("Blockout","Made by Jackson W")
info.setScore(0)
scene.setBackgroundColor(0)
namespace SpriteKind {
    export const block = SpriteKind.create()
}
let tile: Sprite = null
let direction = 0
direction = 1

//Add the paddle and controls for it
let Paddle = sprites.create(assets.image`CyanPaddle`, SpriteKind.Player)
Paddle.setPosition(79, 100)
Paddle.setStayInScreen(true)
controller.moveSprite(Paddle, 100, 0)

//add the ball projectile
let Ball = sprites.createProjectileFromSprite(assets.image`RedBall`,Paddle,50,-55)
Ball.setPosition(50, -55)
Ball.setFlag(SpriteFlag.DestroyOnWall, false)
Ball.setBounceOnWall(true)