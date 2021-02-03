namespace SpriteKind {
    export const Projectile2 = SpriteKind.create()
    export const Snake = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Projectile2, SpriteKind.Player, function (sprite, otherSprite) {
    Falling = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . 7 7 7 7 7 7 7 7 7 7 . . . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    Falling.setBounceOnWall(true)
    Falling.setPosition(Sprite2.x, Sprite2.y - 5)
    Falling.setVelocity(50, 50)
    Falling.ay = Sprite2.ay
    Sprite2.destroy()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    info.setScore(info.score() + 1)
    Sprite2.destroy()
})
scene.onHitWall(SpriteKind.Projectile2, function (sprite, location) {
    if (tiles.tileAtLocationEquals(location, img`
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        `)) {
        info.changeLifeBy(-1)
        Sprite2.destroy()
    }
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    if (tiles.tileAtLocationEquals(location, img`
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        `)) {
        info.changeLifeBy(-1)
        Sprite2.destroy()
    }
})
let Limit = 0
let Sprite2: Sprite = null
let Falling: Sprite = null
let s4Dir = 1
info.setLife(3)
let Basket = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 2 2 2 2 . . . 
    . . . . 2 1 2 1 2 1 2 1 2 . . . 
    . . . . 2 1 2 1 2 1 2 1 2 . . . 
    . . . . 2 1 2 1 2 1 2 1 2 . . . 
    . . . . 2 1 2 1 2 1 2 1 2 . . . 
    . . . . 2 1 2 1 2 1 2 1 2 . . . 
    . . . . 2 2 2 2 2 2 2 2 2 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
Basket.setPosition(80, 100)
controller.moveSprite(Basket, 160, 0)
let mySprite4 = sprites.create(img`
    . . . 8 8 8 8 8 8 1 1 1 1 1 1 . 
    . . 8 8 8 8 8 8 8 1 1 1 1 1 1 1 
    . 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 
    . 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 
    . 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 
    . 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 
    . 8 8 8 8 8 1 8 8 1 1 1 1 1 1 1 
    . 8 8 8 8 8 1 1 8 1 1 1 1 1 1 1 
    . 8 8 8 8 8 1 1 1 1 1 1 1 1 1 1 
    . 8 8 8 8 8 1 1 8 1 1 1 1 1 1 1 
    . 8 8 8 8 8 1 8 8 1 1 1 1 1 1 1 
    . 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 
    . 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 
    . 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 
    . . 8 8 8 8 8 8 8 1 1 1 1 1 1 1 
    . . . 8 8 8 8 8 8 1 1 1 1 1 1 . 
    `, SpriteKind.Snake)
mySprite4.setFlag(SpriteFlag.Ghost, true)
mySprite4.setPosition(-7, 100)
tiles.setTilemap(tilemap`level1`)
game.onUpdateInterval(2200, function () {
    mySprite4.vx = 10 * s4Dir
    s4Dir = s4Dir * -1
})
game.onUpdateInterval(2000, function () {
    if (info.score() < 10 || randint(1, Math.min(50, info.score())) < 10) {
        Falling = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 7 7 7 7 . . . . . . 
            . . . . 7 7 7 7 7 7 7 7 . . . . 
            . . . 7 7 7 7 7 7 7 7 7 7 . . . 
            . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
            . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
            . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
            . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
            . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
            . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
            . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
            . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
            . . . 7 7 7 7 7 7 7 7 7 7 . . . 
            . . . . 7 7 7 7 7 7 7 7 . . . . 
            . . . . . . 7 7 7 7 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
    } else {
        Falling = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . a a a a . . . . . . 
            . . . . a a a a a a a a . . . . 
            . . . a a a a a a a a a a . . . 
            . . a a a a a a a a a a a a . . 
            . . a a a a a a a a a a a a . . 
            . a a a a a a a a a a a a a a . 
            . a a a a a a a a a a a a a a . 
            . a a a a a a a a a a a a a a . 
            . a a a a a a a a a a a a a a . 
            . . a a a a a a a a a a a a . . 
            . . a a a a a a a a a a a a . . 
            . . . a a a a a a a a a a . . . 
            . . . . a a a a a a a a . . . . 
            . . . . . . a a a a . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile2)
    }
    Falling.setPosition(randint(20, 140), 20)
    Limit = Math.min(10, info.score())
    Falling.setVelocity(randint(-100, 100), randint(0 - Limit, 5))
    Falling.ay = 20
    Falling.setBounceOnWall(true)
})
