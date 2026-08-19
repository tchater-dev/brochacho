sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbar.value += -1
})
function SpawnEnemies () {
    BB01 = sprites.create(img`
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
    BB01HP = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    BB01HP.attachToSprite(BB01)
    BB01.follow(mySprite, 45)
    BB01.setPosition(randint(1, 255), randint(1, 255))
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `, mySprite, 50, 50)
    projectile.follow(BB01)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.gameOver(false)
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    sprites.destroy(BB01, effects.fire, 200)
    pause(500)
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    BB01HP.value += -10
    sprites.destroy(sprite)
})
let projectile: Sprite = null
let BB01HP: StatusBarSprite = null
let BB01: Sprite = null
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
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
statusbar.attachToSprite(mySprite)
controller.moveSprite(mySprite, 50, 50)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
SpawnEnemies()
