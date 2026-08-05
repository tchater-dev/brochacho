statusbars.onZero(StatusBarKind.Health, function (status) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbar.value += -1
})
let statusbar: StatusBarSprite = null
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 3 . . . . . 
    . . . 3 3 . . . 3 3 . . . . . . 
    . . . . 3 . . . . 3 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . 3 . . . . . . . . . . . . . . 
    . 3 . . . . . . . . . 3 3 . . . 
    . . 3 . . . . . . . . 3 . . . . 
    . . 3 . . . . . . . . 3 . . . . 
    . . . 3 3 . . . . . 3 3 . . . . 
    . . . . 3 3 . . . 3 . . . . . . 
    . . . . . . 3 3 3 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
controller.moveSprite(mySprite, 50, 50)
statusbar.attachToSprite(mySprite)
scene.cameraFollowSprite(mySprite)
let BeanBomb = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . f . . . . . . . . . . . . 
    . . . . f f f f . . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . f f f 2 f f 2 f f . . . 
    . . . f f f f f f f f f f . . . 
    . f f f f f f f f f f f f . . . 
    . f f 2 2 f 2 2 f f f f . . . . 
    . f f f 2 2 2 f f f . . . . . . 
    . f f f f f f . . . . . . . . . 
    . . . f f . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
BeanBomb.follow(mySprite, 45)
BeanBomb.setPosition(16, 12)
tiles.setCurrentTilemap(tilemap`level1`)
