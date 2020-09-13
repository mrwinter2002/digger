scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    tiles.setWallAt(location, false)
    tiles.setTileAt(location, sprites.dungeon.darkGroundCenter)
})
tiles.setTilemap(tiles.createTilemap(hex`1000100002020202020202020202020202020202010101010101010101010101010101010103010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tilePath2,sprites.dungeon.darkGroundCenter], TileScale.Sixteen))
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 5 5 5 . . . . . . . 
    . . . . . 1 5 2 5 1 6 . . . . . 
    . . . . 1 6 6 6 6 6 1 6 . . . . 
    . . . . 6 6 f f f f 6 1 . . . . 
    . . . . 6 f f d d f f 6 . . . . 
    . . . 6 f d f d d f d f 6 . . . 
    . . . 6 f d 3 d d 3 d f 6 . . . 
    . . . 6 6 f d d d d f 6 6 . . . 
    . . 6 6 f 3 f f f f 3 f 6 6 . . 
    . . . . 3 3 5 3 3 5 3 d f . . . 
    . . . . d f 3 5 5 3 3 d d 1 . . 
    . . . . d f 3 3 3 3 3 3 . . . . 
    . . . . . 3 5 3 3 5 3 3 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 2))
scene.cameraFollowSprite(mySprite)
pause(2000)
let mySprite2 = sprites.create(img`
    ......ffff..............
    ....fff22fff............
    ...fff2222fff...........
    ..fffeeeeeefff..........
    ..ffe222222eef..........
    ..fe2ffffff2ef..........
    ..ffffeeeeffff......ccc.
    .ffefbf44fbfeff....cddc.
    .ffefbf44fbfeff...cddc..
    .fee4dddddd4eef.ccddc...
    fdfeeddddd4eeffecddc....
    fbffee4444ee4fddccc.....
    fbf4f222222f1edde.......
    fcf.f222222f44ee........
    .ff.f445544f............
    ....ffffffff............
    .....ff..ff.............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(1, 2))
pause(2000)
mySprite2.follow(mySprite)
