//Set the splash screen
game.splash("Blockout","Made by Jackson W")

//Add the paddle and controls for it
let Paddle = sprites.create(assets.image`CyanPaddle`, SpriteKind.Player)
Paddle.setPosition(79,100)
Paddle.setStayInScreen(true)
controller.moveSprite(Paddle,100,0)

//add the ball projectile
let Ball = sprites.create(assets.image`RedBall`, SpriteKind.Projectile)
Ball.setPosition(50, -55)
Ball.setFlag(SpriteFlag.DestroyOnWall, false)
Ball.setBounceOnWall(true)