//Set the splash screen
game.splash("Blockout", "Made by Jackson W")
let tile: Sprite = null
info.setScore(0)
scene.setBackgroundColor(8)
let direction = 0
direction = 1
namespace SpriteKind {
    export const block = SpriteKind.create()
}
function getPos(sprite: Sprite, otherSprite: Sprite){
    if (sprite.x < otherSprite.x - 8 || sprite.x > otherSprite.x + 8 ){
        direction = 1
    } else{
        direction = 0
    }
}



//Add the paddle and controls for it
let Paddle = sprites.create(assets.image`CyanPaddle`, SpriteKind.Player)
Paddle.setPosition(79, 100)
Paddle.setStayInScreen(true)
controller.moveSprite(Paddle, 100, 0)

//add the ball projectile
let Ball = sprites.createProjectileFromSprite(assets.image`RedBall`, Paddle, 50, -55)
Ball.setPosition(50, -55)
Ball.setFlag(SpriteFlag.DestroyOnWall, false)
Ball.setBounceOnWall(true)

sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite: Sprite, otherSprite: Sprite) {
    sprite.setVelocity(sprite.vx, -1 *sprite.vy)
})

let x = 0
let tilepick = 0
for (let index = 0; index <= 9; index++) {
    for (let index2 = 0; index2 <= 2; index2++) {
        x = index * 18
        if (index2 % 2 == 1) {
            x = index * 18 + 8
        }
        tilepick = randint(0, 2)
        if (tilepick == 0) {
            tile = sprites.create(assets.image`block1`, SpriteKind.block)
        } else if (tilepick == 1) {
            tile = sprites.create(assets.image`block2`, SpriteKind.block)
        } else {
            tile = sprites.create(assets.image`block3`, SpriteKind.block)
        }
        tile.setPosition(x, index2 * 18 + 20)
    }
}
