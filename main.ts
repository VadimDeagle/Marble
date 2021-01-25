scene.onHitTile(SpriteKind.Player, 14, function (sprite) {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.starField, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    scene.placeOnRandomTile(mySprite, 2)
})
let MySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
color.setColor(11, color.rgb(100, 100, 100))
color.setColor(12, color.rgb(190, 190, 190))
color.setColor(14, color.rgb(255, 100, 100))
info.setLife(3)
scene.setBackgroundColor(13)
scene.setTile(5, img`
    4 4 4 e 4 e 4 4 
    4 e 4 4 4 e 4 4 
    4 e 4 e 4 4 4 e 
    4 e 4 4 4 4 4 4 
    4 4 4 e 4 e 4 4 
    4 4 4 e 4 4 4 e 
    4 e 4 e 4 4 4 e 
    4 4 4 4 4 e 4 4 
    `, true)
scene.setTile(15, img`
    . . b c c c . . 
    . b f f f f c . 
    b f f f f f f c 
    b f f f f f f c 
    b f f f f f f c 
    b f f f f f f c 
    . b f f f f c . 
    . . b c c c . . 
    `, false)
scene.setTile(2, img`
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    `, false)
scene.setTile(9, img`
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    `, false)
scene.setTile(14, img`
    . . . . . . . . 
    . . f f f f . . 
    . . f . . . . . 
    . . f . . . . . 
    . . f f f . . . 
    . . f . . . . . 
    . . f . . . . . 
    . . . . . . . . 
    `, false)
scene.setTileMap(img`
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 2 . . 9 f 5 . . . 5 9 f . . 9 5 f 9 5 
    5 5 5 . 5 5 5 . 5 9 5 . 5 . f . 5 5 . 5 
    5 9 . . 9 . . 9 5 . 5 . 5 . . . 5 . . 5 
    5 f 5 5 5 5 . 5 5 f 5 . . . 5 . 5 . 5 5 
    5 9 . . . f . . . . . . 5 . 9 . 5 9 . 5 
    5 5 5 5 . 5 5 5 . f 5 . f 9 5 . 5 5 . 5 
    5 f 5 . . . . . . 5 5 5 5 5 5 . 5 f . 5 
    5 . 9 . 5 9 f . . . 9 f 5 . . . . . . 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 . 5 f 5 f . 5 
    5 f 9 . . . . 5 f . . . 5 . 5 5 5 5 . 5 
    5 5 5 . 5 5 . 5 9 . 5 . . . . 5 f 5 . 5 
    5 f . . 5 f . . . . 5 . 5 5 9 . 9 . 9 5 
    5 e . 5 5 9 . 5 9 f 5 9 f 5 f 5 f 5 f 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    `, TileScale.Eight)
mySprite = sprites.create(img`
    . . b b b . . 
    . c f 1 f b . 
    c f f f 1 f b 
    c f f f f 1 b 
    c f f f f f b 
    . c f f f b . 
    . . c c c . . 
    `, SpriteKind.Player)
scene.placeOnRandomTile(mySprite, 2)
for (let value of scene.getTilesByType(9)) {
    mySprite2 = sprites.create(img`
        . . . 1 . . . 
        . . 1 9 6 . . 
        . 1 9 9 9 6 . 
        1 9 9 9 9 9 6 
        . 1 9 9 9 6 . 
        . . 1 9 6 . . 
        . . . 6 . . . 
        `, SpriteKind.Food)
    mySprite2.setPosition(value.x, value.y)
}
for (let value of scene.getTilesByType(15)) {
    MySprite3 = sprites.create(img`
        . . . . . . . 
        . . . . . . . 
        . . . f . . . 
        . . f f f . . 
        . . . f . . . 
        . . . . . . . 
        . . . . . . . 
        `, SpriteKind.Enemy)
    MySprite3.setPosition(value.x, value.y)
}
forever(function () {
    mySprite.setVelocity(controller.acceleration(ControllerDimension.X) / 2, controller.acceleration(ControllerDimension.Y) / 2)
})
