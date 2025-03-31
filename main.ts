namespace SpriteKind {
    export const Block = SpriteKind.create()
    export const StatusBar = SpriteKind.create()
    export const HitboxM = SpriteKind.create()
    export const Brick = SpriteKind.create()
    export const Camra = SpriteKind.create()
    export const NPC = SpriteKind.create()
    export const Screen = SpriteKind.create()
    export const Goomba = SpriteKind.create()
    export const UNTANGABLE = SpriteKind.create()
    export const WALL = SpriteKind.create()
    export const UIKIND = SpriteKind.create()
    export const DeathEnemy = SpriteKind.create()
    export const HitboxMD = SpriteKind.create()
    export const GhitboxT = SpriteKind.create()
    export const CoinK = SpriteKind.create()
    export const Arcade_Logo = SpriteKind.create()
    export const Power_Up = SpriteKind.create()
    export const Weapon = SpriteKind.create()
}
function LuigiMoveanim () {
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`IdleR Luigi`,
    5000,
    characterAnimations.rule(Predicate.FacingRight, Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`IdleL Luigi`,
    5000,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Moving against wall R Luigi`,
    100,
    characterAnimations.rule(Predicate.FacingRight, Predicate.NotMoving, Predicate.HittingWallRight, Predicate.HittingWallDown)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Moving against wall L Luigi`,
    100,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.NotMoving, Predicate.HittingWallLeft, Predicate.HittingWallDown)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Luigi MoveR`,
    90,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Luigi MoveL`,
    90,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`FallingR Slide Luigi`,
    5000,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingDown, Predicate.HittingWallRight)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`FallingL Slide Luigi`,
    5000,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingDown, Predicate.HittingWallLeft)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`JumpR Luigi`,
    5000,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`JumpR Luigi`,
    5000,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingUp, Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`JumpR Luigi`,
    5000,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingUp, Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`JumpL Luigi`,
    5000,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`JumpL Luigi`,
    5000,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingUp, Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`JumpL Luigi`,
    5000,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingUp, Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Falling R Luigi`,
    5000,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Falling R Luigi`,
    5000,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingDown, Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Falling R Luigi`,
    5000,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingDown, Predicate.FacingLeft)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`FallingL Luigi`,
    5000,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`FallingL Luigi`,
    5000,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingDown, Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`FallingL Luigi`,
    5000,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingDown, Predicate.MovingRight)
    )
}
function DeadM () {
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Dead`,
    5000,
    characterAnimations.rule(Predicate.MovingUp, Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Dead`,
    5000,
    characterAnimations.rule(Predicate.MovingUp, Predicate.FacingLeft)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Dead`,
    5000,
    characterAnimations.rule(Predicate.MovingDown, Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Dead`,
    5000,
    characterAnimations.rule(Predicate.MovingDown, Predicate.FacingLeft)
    )
}
function HIUanims () {
    characterAnimations.loopFrames(
    Hammerin_hand,
    assets.animation`JM MoveRH2`,
    60,
    characterAnimations.rule(Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
    MHANIM,
    assets.animation`JM MoveRH`,
    60,
    characterAnimations.rule(Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
    Hammerin_hand,
    assets.animation`JM MoveLH2`,
    60,
    characterAnimations.rule(Predicate.FacingLeft)
    )
    characterAnimations.loopFrames(
    MHANIM,
    assets.animation`JM MoveLH`,
    60,
    characterAnimations.rule(Predicate.FacingLeft)
    )
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (StartGame == true) {
        if (!(Life == 0)) {
            if (Metal == true) {
                if (location.bottom == Main_Player.top) {
                    Jump = false
                    music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                    music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                    music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                    music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                }
            } else {
                if (location.bottom == Main_Player.top) {
                    Main_Player.vy = 120
                    music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                    music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                    music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                    music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                }
            }
        }
    }
})
function MarioMoveanimGOOMBA () {
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Goomba IdleR`,
    5000,
    characterAnimations.rule(Predicate.FacingRight, Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Goomba IdleL`,
    5000,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Goomba anim DEBUG1`,
    200,
    characterAnimations.rule(Predicate.FacingRight, Predicate.NotMoving, Predicate.HittingWallRight, Predicate.HittingWallDown)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Goomba anim DEBUG2`,
    200,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.NotMoving, Predicate.HittingWallLeft, Predicate.HittingWallDown)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Goomba animR`,
    200,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Goomba animL`,
    200,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Goomba Debug4`,
    5000,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Goomba Debug4`,
    5000,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingUp, Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Goomba Debug4`,
    5000,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingUp, Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Goomba Debug3`,
    5000,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Goomba Debug3`,
    5000,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingUp, Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Goomba Debug3`,
    5000,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingUp, Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Goomba Debug0`,
    5000,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Goomba Debug0`,
    5000,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingDown, Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Goomba Debug0`,
    5000,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingDown, Predicate.FacingLeft)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Goomba Debug1`,
    5000,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Goomba Debug1`,
    5000,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingDown, Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Goomba Debug1`,
    5000,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingDown, Predicate.MovingRight)
    )
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile53, function (sprite, location) {
    if (StartGame == true) {
        if (!(Life == 0)) {
            music.stopAllSounds()
            game.setGameOverMessage(true, "THANKS FOR PLAYING!")
            game.setGameOverEffect(true, effects.confetti)
            game.gameOver(true)
        }
    }
})
scene.onHitWall(SpriteKind.Arcade_Logo, function (sprite, location) {
    music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
    scene.cameraShake(2, 50)
    animation.runImageAnimation(
    sprite,
    assets.animation`Arcade Anim`,
    50,
    false
    )
    Arcade_Text = textsprite.create("MakeCode Arcade", 0, 4)
    Arcade_Text.setOutline(1, 1)
    tiles.placeOnTile(Arcade_Text, tiles.getTileLocation(8, 9))
})
function MetalMoveanim () {
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`IdleR Metal`,
    5000,
    characterAnimations.rule(Predicate.FacingRight, Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`IdleL Metal`,
    5000,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Moving against wall R Metal`,
    100,
    characterAnimations.rule(Predicate.FacingRight, Predicate.NotMoving, Predicate.HittingWallRight, Predicate.HittingWallDown)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Moving against wall L Metal`,
    100,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.NotMoving, Predicate.HittingWallLeft, Predicate.HittingWallDown)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`FallingR Slide Metal`,
    5000,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingDown, Predicate.HittingWallRight)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`FallingL Slide Metal`,
    5000,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingDown, Predicate.HittingWallLeft)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`JumpR Metal`,
    5000,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`JumpR Metal`,
    5000,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingUp, Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`JumpR Metal`,
    5000,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingUp, Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`JumpL Metal`,
    5000,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`JumpL Metal`,
    5000,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingUp, Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`JumpL Metal`,
    5000,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingUp, Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Falling R Metal`,
    5000,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Falling R Metal`,
    5000,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingDown, Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Falling R Metal`,
    5000,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingDown, Predicate.FacingLeft)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Falling L Metal`,
    5000,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Falling L Metal`,
    5000,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingDown, Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Falling L Metal`,
    5000,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingDown, Predicate.MovingRight)
    )
}
sprites.onOverlap(SpriteKind.HitboxM, SpriteKind.Goomba, function (sprite, otherSprite) {
    if (StartGame == true) {
        if (!(Life == 0)) {
            if (JM == true && controller.down.isPressed()) {
            	
            }
            if (!(Metal == true)) {
                if (!(JM == true && controller.down.isPressed())) {
                    if (!(characterAnimations.matchesRule(Main_Player, characterAnimations.rule(Predicate.MovingDown)))) {
                        if (Hit == true) {
                            Life += -1
                            if (Life > 0) {
                                music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.InBackground)
                            }
                            if (Life == 0) {
                                music.stopAllSounds()
                                music.play(music.createSong(assets.song`Death`), music.PlaybackMode.InBackground)
                            }
                            Hit = false
                            if (Hit == false) {
                                timer.after(50, function () {
                                    Main_Player.setFlag(SpriteFlag.Invisible, false)
                                    timer.after(50, function () {
                                        Main_Player.setFlag(SpriteFlag.Invisible, true)
                                        timer.after(50, function () {
                                            Main_Player.setFlag(SpriteFlag.Invisible, false)
                                            timer.after(50, function () {
                                                Main_Player.setFlag(SpriteFlag.Invisible, true)
                                                timer.after(50, function () {
                                                    Main_Player.setFlag(SpriteFlag.Invisible, false)
                                                    timer.after(50, function () {
                                                        Main_Player.setFlag(SpriteFlag.Invisible, true)
                                                        timer.after(50, function () {
                                                            Main_Player.setFlag(SpriteFlag.Invisible, false)
                                                            timer.after(50, function () {
                                                                Main_Player.setFlag(SpriteFlag.Invisible, true)
                                                                timer.after(50, function () {
                                                                    Main_Player.setFlag(SpriteFlag.Invisible, false)
                                                                    timer.after(50, function () {
                                                                        Main_Player.setFlag(SpriteFlag.Invisible, true)
                                                                        timer.after(50, function () {
                                                                            Main_Player.setFlag(SpriteFlag.Invisible, false)
                                                                            timer.after(50, function () {
                                                                                Main_Player.setFlag(SpriteFlag.Invisible, true)
                                                                                timer.after(50, function () {
                                                                                    Main_Player.setFlag(SpriteFlag.Invisible, false)
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                                timer.after(1000, function () {
                                    Main_Player.setFlag(SpriteFlag.Invisible, false)
                                    Hit = true
                                })
                            }
                        }
                    }
                }
            } else {
                GoombaMoveanimDEAD()
                otherSprite.setKind(SpriteKind.UNTANGABLE)
                otherSprite.setVelocity(0, 0)
                music.play(music.createSoundEffect(WaveShape.Noise, 1146, 312, 144, 10, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                music.play(music.createSoundEffect(WaveShape.Noise, 1146, 312, 144, 10, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                music.play(music.createSoundEffect(WaveShape.Noise, 1146, 312, 144, 10, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                music.play(music.createSoundEffect(WaveShape.Noise, 1146, 312, 144, 10, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                timer.after(200, function () {
                    sprites.destroy(otherSprite)
                    GoombaMoveanim()
                })
            }
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (StartGame == true) {
        if (!(Life == 0)) {
            if (Main_Player.isHittingTile(CollisionDirection.Bottom)) {
                controller.moveSprite(Main_Player, 120, 0)
            } else {
                controller.moveSprite(Main_Player, 90, 0)
            }
        }
    } else {
        if (Start2 == true) {
            if (Cursor.overlapsWith(AHead)) {
                AHead.setImage(assets.image`Final Supris`)
                timer.after(400, function () {
                    AHead.setImage(assets.image`Final`)
                })
            }
        }
    }
})
function MarioMoveanimP () {
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`IdleRP`,
    700,
    characterAnimations.rule(Predicate.FacingRight, Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`IdleLP`,
    700,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Moving against wall RP`,
    100,
    characterAnimations.rule(Predicate.FacingRight, Predicate.NotMoving, Predicate.HittingWallRight, Predicate.HittingWallDown)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Moving against wall LP`,
    100,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.NotMoving, Predicate.HittingWallLeft, Predicate.HittingWallDown)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Mario MoveRP`,
    90,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Mario MoveLP`,
    90,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`FallingR SlideP`,
    5000,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingDown, Predicate.HittingWallRight)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`FallingL SlideP`,
    5000,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingDown, Predicate.HittingWallLeft)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`JumpRP`,
    5000,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`JumpRP`,
    5000,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingUp, Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`JumpRP`,
    5000,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingUp, Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`JumpLP`,
    200,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`JumpLP`,
    200,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingUp, Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`JumpLP`,
    200,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingUp, Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Falling RP`,
    5000,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Falling RP`,
    5000,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingDown, Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Falling RP`,
    5000,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingDown, Predicate.FacingLeft)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Falling LP`,
    5000,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Falling LP`,
    5000,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingDown, Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Falling LP`,
    5000,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingDown, Predicate.MovingRight)
    )
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (blockMenu.isMenuOpen()) {
        if (blockMenu.selectedMenuOption() == "Reset") {
            game.reset()
        }
        if (blockMenu.selectedMenuOption() == "Luigi") {
            L_is_real = true
            LuigiMoveanim()
            blockMenu.closeMenu()
        }
        if (blockMenu.selectedMenuOption() == "Mario") {
            L_is_real = false
            JM = false
            MarioMoveanim()
            blockMenu.closeMenu()
        }
        if (blockMenu.selectedMenuOption() == "JM") {
            JM = true
            JMMoveanim()
            blockMenu.closeMenu()
        }
        if (blockMenu.selectedMenuOption() == "Close") {
            blockMenu.closeMenu()
        }
    } else {
        if (StartGame == true) {
            if (!(Life == 0)) {
                if (L_is_real == true) {
                    if (characterAnimations.matchesRule(Main_Player, characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingDown, Predicate.HittingWallLeft))) {
                        WJA = false
                        controller.moveSprite(Main_Player, 0, 0)
                        Main_Player.setVelocity(100, -190)
                        music.play(music.createSoundEffect(WaveShape.Triangle, 98, 932, 255, 0, 138, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                        music.play(music.createSoundEffect(WaveShape.Triangle, 98, 932, 255, 0, 138, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                        music.play(music.createSoundEffect(WaveShape.Triangle, 98, 932, 255, 0, 138, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                        music.play(music.createSoundEffect(WaveShape.Triangle, 98, 932, 255, 0, 138, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                        timer.after(400, function () {
                            Main_Player.setVelocity(0, 0)
                            Main_Player.vy = 120
                            WJA = true
                        })
                    }
                    if (characterAnimations.matchesRule(Main_Player, characterAnimations.rule(Predicate.FacingRight, Predicate.MovingDown, Predicate.HittingWallRight))) {
                        WJA = false
                        controller.moveSprite(Main_Player, 0, 0)
                        Main_Player.setVelocity(-100, -190)
                        music.play(music.createSoundEffect(WaveShape.Triangle, 98, 932, 255, 0, 138, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                        music.play(music.createSoundEffect(WaveShape.Triangle, 98, 932, 255, 0, 138, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                        music.play(music.createSoundEffect(WaveShape.Triangle, 98, 932, 255, 0, 138, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                        music.play(music.createSoundEffect(WaveShape.Triangle, 98, 932, 255, 0, 138, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                        timer.after(400, function () {
                            Main_Player.setVelocity(0, 0)
                            Main_Player.vy = 120
                            WJA = true
                        })
                    }
                    if (Main_Player.isHittingTile(CollisionDirection.Bottom)) {
                        Jump = true
                        Main_Player.vy = -215
                        music.play(music.createSoundEffect(WaveShape.Triangle, 400, 1417, 255, 0, 250, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                        music.play(music.createSoundEffect(WaveShape.Triangle, 400, 1417, 255, 0, 250, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                        music.play(music.createSoundEffect(WaveShape.Triangle, 400, 1417, 255, 0, 250, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                        music.play(music.createSoundEffect(WaveShape.Triangle, 400, 1417, 255, 0, 250, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                        timer.after(540, function () {
                            Main_Player.vy = 120
                            Jump = false
                        })
                    }
                } else if (Metal == true) {
                    if (Main_Player.isHittingTile(CollisionDirection.Bottom)) {
                        Jump = true
                        Main_Player.vy = -200
                        music.play(music.createSoundEffect(WaveShape.Square, 1, 1132, 255, 0, 250, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                        music.play(music.createSoundEffect(WaveShape.Square, 1, 1132, 255, 0, 250, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                        music.play(music.createSoundEffect(WaveShape.Square, 1, 1132, 255, 0, 250, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                        music.play(music.createSoundEffect(WaveShape.Square, 1, 1132, 255, 0, 250, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                        timer.after(500, function () {
                            Main_Player.vy = 120
                            Jump = false
                        })
                    }
                } else {
                    if (characterAnimations.matchesRule(Main_Player, characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingDown, Predicate.HittingWallLeft))) {
                        WJA = false
                        controller.moveSprite(Main_Player, 0, 0)
                        Main_Player.setVelocity(100, -170)
                        music.play(music.createSoundEffect(WaveShape.Triangle, 98, 526, 255, 0, 138, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                        music.play(music.createSoundEffect(WaveShape.Triangle, 98, 526, 255, 0, 138, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                        music.play(music.createSoundEffect(WaveShape.Triangle, 98, 526, 255, 0, 138, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                        music.play(music.createSoundEffect(WaveShape.Triangle, 98, 526, 255, 0, 138, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                        timer.after(400, function () {
                            Main_Player.setVelocity(0, 0)
                            Main_Player.vy = 120
                            WJA = true
                        })
                    }
                    if (characterAnimations.matchesRule(Main_Player, characterAnimations.rule(Predicate.FacingRight, Predicate.MovingDown, Predicate.HittingWallRight))) {
                        WJA = false
                        controller.moveSprite(Main_Player, 0, 0)
                        Main_Player.setVelocity(-100, -170)
                        music.play(music.createSoundEffect(WaveShape.Triangle, 98, 526, 255, 0, 138, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                        music.play(music.createSoundEffect(WaveShape.Triangle, 98, 526, 255, 0, 138, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                        music.play(music.createSoundEffect(WaveShape.Triangle, 98, 526, 255, 0, 138, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                        music.play(music.createSoundEffect(WaveShape.Triangle, 98, 526, 255, 0, 138, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                        timer.after(400, function () {
                            Main_Player.setVelocity(0, 0)
                            Main_Player.vy = 120
                            WJA = true
                        })
                    }
                    if (Main_Player.isHittingTile(CollisionDirection.Bottom)) {
                        Jump = true
                        Main_Player.vy = -200
                        music.play(music.createSoundEffect(WaveShape.Triangle, 400, 1132, 255, 0, 250, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                        music.play(music.createSoundEffect(WaveShape.Triangle, 400, 1132, 255, 0, 250, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                        music.play(music.createSoundEffect(WaveShape.Triangle, 400, 1132, 255, 0, 250, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                        music.play(music.createSoundEffect(WaveShape.Triangle, 400, 1132, 255, 0, 250, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                        timer.after(500, function () {
                            Main_Player.vy = 120
                            Jump = false
                        })
                    }
                }
            }
        }
        if (Start2 == true) {
            if (!(controller.left.isPressed() || controller.down.isPressed())) {
                music.stopAllSounds()
                Start2 = false
                color.FadeToWhite.startScreenEffect(500)
                music.setVolume(150)
                music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.InBackground)
                timer.after(600, function () {
                    color.clearFadeEffect()
                    Start()
                })
            }
        }
    }
})
sprites.onOverlap(SpriteKind.HitboxMD, SpriteKind.Goomba, function (sprite, otherSprite) {
    if (StartGame == true) {
        if (!(Life == 0)) {
            if (!(Metal == true)) {
                if (characterAnimations.matchesRule(Main_Player, characterAnimations.rule(Predicate.MovingDown))) {
                    if (!(Main_Player.isHittingTile(CollisionDirection.Bottom))) {
                        GoombaMoveanimDEAD()
                        otherSprite.setKind(SpriteKind.UNTANGABLE)
                        Main_Player.vy = -178
                        timer.after(100, function () {
                            Main_Player.vy = 0
                        })
                        otherSprite.setVelocity(0, 0)
                        music.play(music.createSoundEffect(WaveShape.Noise, 1146, 312, 144, 10, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                        music.play(music.createSoundEffect(WaveShape.Noise, 1146, 312, 144, 10, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                        music.play(music.createSoundEffect(WaveShape.Noise, 1146, 312, 144, 10, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                        music.play(music.createSoundEffect(WaveShape.Noise, 1146, 312, 144, 10, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                        timer.after(200, function () {
                            sprites.destroy(otherSprite)
                            GoombaMoveanim()
                        })
                    }
                }
            }
        }
    }
})
function DeadJM () {
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`DeadJM`,
    150,
    characterAnimations.rule(Predicate.MovingUp, Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`DeadJM`,
    150,
    characterAnimations.rule(Predicate.MovingUp, Predicate.FacingLeft)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`DeadJM`,
    150,
    characterAnimations.rule(Predicate.MovingDown, Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`DeadJM`,
    150,
    characterAnimations.rule(Predicate.MovingDown, Predicate.FacingLeft)
    )
}
function Start () {
    sprites.destroyAllSpritesOfKind(SpriteKind.UNTANGABLE)
    effects.none.startScreenEffect()
    music.stopAllSounds()
    music.setVolume(40)
    music.play(music.createSong(assets.song`Grass`), music.PlaybackMode.LoopingInBackground)
    music.setVolume(180)
    Hit = true
    game.setGameOverEffect(false, effects.dissolve)
    game.setGameOverPlayable(false, music.melodyPlayable(music.wawawawaa), false)
    game.setGameOverMessage(false, "GAME OVER")
    scene.setBackgroundImage(assets.image`GrassBG`)
    tiles.setCurrentTilemap(tilemap`Tutorial`)
    Main_Player = sprites.create(assets.image`Mario`, SpriteKind.Player)
    Main_Player.z = 2
    Mariocode()
    tiles.placeOnTile(Main_Player, tiles.getTileLocation(0, 32))
    Main_Player.ay = 377
    Screencode()
    WJA = true
    UI()
    for (let value of tiles.getTilesByType(myTiles.tile35)) {
        ToadST = sprites.create(assets.image`Toad`, SpriteKind.NPC)
        tiles.placeOnTile(ToadST, value)
        tiles.setTileAt(value, myTiles.transparency16)
    }
    for (let value of tiles.getTilesByType(myTiles.tile30)) {
        ToadRed = sprites.create(assets.image`Toad red`, SpriteKind.NPC)
        tiles.placeOnTile(ToadRed, value)
        tiles.setTileAt(value, myTiles.transparency16)
    }
    for (let value of tiles.getTilesByType(myTiles.tile32)) {
        ToadBlue = sprites.create(assets.image`Toad blue`, SpriteKind.NPC)
        tiles.placeOnTile(ToadBlue, value)
        tiles.setTileAt(value, myTiles.transparency16)
    }
    for (let value of tiles.getTilesByType(myTiles.tile33)) {
        ToadGreen = sprites.create(assets.image`Toad green`, SpriteKind.NPC)
        tiles.placeOnTile(ToadGreen, value)
        tiles.setTileAt(value, myTiles.transparency16)
    }
    for (let value of tiles.getTilesByType(myTiles.tile34)) {
        ToadYellow = sprites.create(assets.image`Toad yellow`, SpriteKind.NPC)
        tiles.placeOnTile(ToadYellow, value)
        tiles.setTileAt(value, myTiles.transparency16)
    }
    for (let value of tiles.getTilesByType(myTiles.tile36)) {
        Enemy_killer = sprites.create(assets.image`Hitbox`, SpriteKind.DeathEnemy)
        tiles.placeOnTile(Enemy_killer, value)
    }
    MarioMoveanim()
    Toadsanims()
    StartGame = true
}
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    if (StartGame == true) {
        if (JM == true) {
            JMMoveanim()
            characterAnimations.clearCharacterState(Hammerin_hand)
            characterAnimations.clearCharacterState(MHANIM)
            Hammerin_hand.setFlag(SpriteFlag.Invisible, true)
            MHANIM.setFlag(SpriteFlag.Invisible, true)
            Main_Player.setFlag(SpriteFlag.Invisible, false)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile42, function (sprite, location) {
    if (StartGame == true) {
        if (!(Life == 0)) {
            L2()
        }
    }
})
function Screencode () {
    Screen = sprites.create(assets.image`Screen`, SpriteKind.Screen)
    Screen.setFlag(SpriteFlag.StayInScreen, true)
    Screen.setFlag(SpriteFlag.Invisible, true)
    Screen_shade = shader.createImageShaderSprite(assets.image`Screen Overlay dark`, shader.ShadeLevel.One)
    Screen_shade.setFlag(SpriteFlag.RelativeToCamera, true)
    Screen_shade.z = 3
    Screen_shade.setFlag(SpriteFlag.Invisible, true)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.CoinK, function (sprite, otherSprite) {
    if (StartGame == true) {
        if (Life < 3) {
            music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
            Life += 1
            Coins += 1
            sprites.destroy(otherSprite)
        } else {
            music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
            Coins += 1
            sprites.destroy(otherSprite)
        }
    }
})
function DeadL () {
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Dead Luigi`,
    5000,
    characterAnimations.rule(Predicate.MovingUp, Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Dead Luigi`,
    5000,
    characterAnimations.rule(Predicate.MovingUp, Predicate.FacingLeft)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Dead Luigi`,
    5000,
    characterAnimations.rule(Predicate.MovingDown, Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Dead Luigi`,
    5000,
    characterAnimations.rule(Predicate.MovingDown, Predicate.FacingLeft)
    )
}
sprites.onOverlap(SpriteKind.Weapon, SpriteKind.Goomba, function (sprite, otherSprite) {
    if (StartGame == true) {
        if (!(Life == 0)) {
            if (JM == true && controller.down.isPressed()) {
                GoombaMoveanimDEAD()
                otherSprite.setKind(SpriteKind.UNTANGABLE)
                otherSprite.setVelocity(0, 0)
                music.play(music.createSoundEffect(WaveShape.Noise, 1146, 312, 144, 10, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                music.play(music.createSoundEffect(WaveShape.Noise, 1146, 312, 144, 10, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                music.play(music.createSoundEffect(WaveShape.Noise, 1146, 312, 144, 10, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                music.play(music.createSoundEffect(WaveShape.Noise, 1146, 312, 144, 10, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                timer.after(200, function () {
                    sprites.destroy(otherSprite)
                    GoombaMoveanim()
                })
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Goomba, SpriteKind.DeathEnemy, function (sprite, otherSprite) {
    if (StartGame == true) {
        sprites.destroy(sprite)
    }
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    if (StartGame == true) {
        if (!(Life == 0)) {
            if (Metal == true) {
                Jump = false
            } else {
                Main_Player.vy = 120
            }
        }
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (StartGame == true) {
        if (JM == true) {
            Hammerin_hand.setFlag(SpriteFlag.Invisible, false)
            MHANIM.setFlag(SpriteFlag.Invisible, false)
            Main_Player.setFlag(SpriteFlag.Invisible, true)
            HIUanims()
        }
    }
})
function L2 () {
    if (Metal == true) {
        music.stopAllSounds()
        music.setVolume(55)
        music.play(music.createSong(assets.song`Metal Mario`), music.PlaybackMode.LoopingInBackground)
        music.setVolume(180)
        scene.setBackgroundImage(assets.image`CaveBG`)
        tiles.setCurrentTilemap(tilemap`Level 1-2 Metal`)
        tiles.placeOnTile(Main_Player, tiles.getTileLocation(0, 23))
        Screen_shade.setFlag(SpriteFlag.Invisible, false)
        sprites.destroyAllSpritesOfKind(SpriteKind.NPC)
        sprites.destroyAllSpritesOfKind(SpriteKind.CoinK)
        sprites.destroyAllSpritesOfKind(SpriteKind.DeathEnemy)
        for (let value of tiles.getTilesByType(myTiles.tile41)) {
            Coin = sprites.create(assets.image`Coin`, SpriteKind.CoinK)
            tiles.placeOnTile(Coin, value)
            tiles.setTileAt(value, myTiles.transparency16)
            animation.runImageAnimation(
            Coin,
            assets.animation`Coin anim`,
            50,
            true
            )
        }
        for (let value of tiles.getTilesByType(myTiles.tile36)) {
            Enemy_killer = sprites.create(assets.image`Hitbox`, SpriteKind.DeathEnemy)
            tiles.placeOnTile(Enemy_killer, value)
        }
    } else {
        music.stopAllSounds()
        music.setVolume(55)
        music.play(music.createSong(assets.song`Cave`), music.PlaybackMode.LoopingInBackground)
        music.setVolume(180)
        scene.setBackgroundImage(assets.image`CaveBG`)
        tiles.setCurrentTilemap(tilemap`Level 1-2`)
        tiles.placeOnTile(Main_Player, tiles.getTileLocation(0, 23))
        Screen_shade.setFlag(SpriteFlag.Invisible, false)
        sprites.destroyAllSpritesOfKind(SpriteKind.NPC)
        sprites.destroyAllSpritesOfKind(SpriteKind.CoinK)
        sprites.destroyAllSpritesOfKind(SpriteKind.DeathEnemy)
        for (let value of tiles.getTilesByType(myTiles.tile41)) {
            Coin = sprites.create(assets.image`Coin`, SpriteKind.CoinK)
            tiles.placeOnTile(Coin, value)
            tiles.setTileAt(value, myTiles.transparency16)
            animation.runImageAnimation(
            Coin,
            assets.animation`Coin anim`,
            50,
            true
            )
        }
        for (let value of tiles.getTilesByType(myTiles.tile36)) {
            Enemy_killer = sprites.create(assets.image`Hitbox`, SpriteKind.DeathEnemy)
            tiles.placeOnTile(Enemy_killer, value)
        }
    }
}
function Start_Luigi () {
    sprites.destroyAllSpritesOfKind(SpriteKind.UNTANGABLE)
    effects.none.startScreenEffect()
    music.stopAllSounds()
    music.setVolume(40)
    music.play(music.createSong(assets.song`Grass`), music.PlaybackMode.LoopingInBackground)
    music.setVolume(180)
    Hit = true
    game.setGameOverEffect(false, effects.dissolve)
    game.setGameOverPlayable(false, music.melodyPlayable(music.wawawawaa), false)
    game.setGameOverMessage(false, "GAME OVER")
    scene.setBackgroundImage(assets.image`GrassBG`)
    tiles.setCurrentTilemap(tilemap`Tutorial`)
    Main_Player = sprites.create(assets.image`Luigi`, SpriteKind.Player)
    Main_Player.z = 3
    Mariocode()
    tiles.placeOnTile(Main_Player, tiles.getTileLocation(0, 32))
    Main_Player.ay = 377
    Screencode()
    WJA = true
    UI()
    for (let value of tiles.getTilesByType(myTiles.transparency16)) {
        ToadST = sprites.create(assets.image`Toad`, SpriteKind.NPC)
        tiles.placeOnTile(ToadST, value)
        tiles.setTileAt(value, myTiles.transparency16)
    }
    for (let value of tiles.getTilesByType(myTiles.transparency16)) {
        ToadRed = sprites.create(assets.image`Toad red`, SpriteKind.NPC)
        tiles.placeOnTile(ToadRed, value)
        tiles.setTileAt(value, myTiles.transparency16)
    }
    for (let value of tiles.getTilesByType(myTiles.transparency16)) {
        ToadBlue = sprites.create(assets.image`Toad blue`, SpriteKind.NPC)
        tiles.placeOnTile(ToadBlue, value)
        tiles.setTileAt(value, myTiles.transparency16)
    }
    for (let value of tiles.getTilesByType(myTiles.transparency16)) {
        ToadGreen = sprites.create(assets.image`Toad green`, SpriteKind.NPC)
        tiles.placeOnTile(ToadGreen, value)
        tiles.setTileAt(value, myTiles.transparency16)
    }
    for (let value of tiles.getTilesByType(myTiles.transparency16)) {
        ToadYellow = sprites.create(assets.image`Toad yellow`, SpriteKind.NPC)
        tiles.placeOnTile(ToadYellow, value)
        tiles.setTileAt(value, myTiles.transparency16)
    }
    for (let value of tiles.getTilesByType(myTiles.transparency16)) {
        Enemy_killer = sprites.create(assets.image`Hitbox`, SpriteKind.DeathEnemy)
        tiles.placeOnTile(Enemy_killer, value)
    }
    LuigiMoveanim()
    Toadsanims()
    L_is_real = true
    StartGame = true
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (DEV == true) {
        if (StartGame == true) {
            if (L_is_real == true) {
                blockMenu.showMenu([
                "Reset",
                "Mario",
                "Close"
                ], MenuStyle.List, MenuLocation.TopLeft)
                blockMenu.setColors(6, 15)
            } else if (JM == true) {
                blockMenu.showMenu([
                "Reset",
                "Luigi",
                "Mario",
                "Close"
                ], MenuStyle.List, MenuLocation.TopLeft)
                blockMenu.setColors(8, 15)
            } else {
                blockMenu.showMenu([
                "Reset",
                "Luigi",
                "JM",
                "Close"
                ], MenuStyle.List, MenuLocation.TopLeft)
                blockMenu.setColors(2, 15)
            }
            if (Metal == true) {
                blockMenu.showMenu(["Reset", "Close"], MenuStyle.List, MenuLocation.TopLeft)
                blockMenu.setColors(11, 15)
            }
        }
    }
})
function GoombaMoveanimDEAD () {
    characterAnimations.loopFrames(
    Goomba,
    assets.animation`Goomba Dead`,
    200,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    Goomba,
    assets.animation`Goomba Dead`,
    200,
    characterAnimations.rule(Predicate.FacingRight, Predicate.NotMoving)
    )
}
function JMMoveanim () {
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`IdleRJM`,
    5000,
    characterAnimations.rule(Predicate.FacingRight, Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`IdleLJM`,
    5000,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Moving against wall RJM`,
    100,
    characterAnimations.rule(Predicate.FacingRight, Predicate.NotMoving, Predicate.HittingWallRight, Predicate.HittingWallDown)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Moving against wall LJM`,
    100,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.NotMoving, Predicate.HittingWallLeft, Predicate.HittingWallDown)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`JM MoveR`,
    90,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`JM MoveL`,
    90,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`FallingR SlideJM`,
    5000,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingDown, Predicate.HittingWallRight)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`FallingL SlideJM`,
    5000,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingDown, Predicate.HittingWallLeft)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`JumpRJM`,
    5000,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`JumpRJM`,
    5000,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingUp, Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`JumpRJM`,
    5000,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingUp, Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`JumpLJM`,
    5000,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`JumpLJM`,
    5000,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingUp, Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`JumpLJM`,
    5000,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingUp, Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Falling RJM`,
    5000,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Falling RJM`,
    5000,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingDown, Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Falling RJM`,
    5000,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingDown, Predicate.FacingLeft)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Falling LJM`,
    5000,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Falling LJM`,
    5000,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingDown, Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Falling LJM`,
    5000,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingDown, Predicate.MovingRight)
    )
}
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    if (StartGame == true) {
        if (!(Life == 0)) {
            if (L_is_real == true) {
                if (Main_Player.isHittingTile(CollisionDirection.Bottom)) {
                    controller.moveSprite(Main_Player, 100, 0)
                } else {
                    controller.moveSprite(Main_Player, 64, 0)
                }
                if (Main_Player.overlapsWith(ToadST)) {
                    game.showLongText("Hey Luigi, \"SPACE\" to jump and \"E\" to sprint!", DialogLayout.Top)
                }
                if (Main_Player.overlapsWith(ToadBlue)) {
                    game.showLongText("You can also jump off of walls by holding \"RIGHT\" or \"LEFT\" on a wall and pressing \"SPACE\" to jump to another wall!", DialogLayout.Top)
                }
                if (Main_Player.overlapsWith(ToadGreen)) {
                    game.showLongText("Good Job Luigi! There's a Goomba down there be careful, make shure to jump on him!", DialogLayout.Top)
                }
                if (Main_Player.overlapsWith(ToadYellow)) {
                    game.showLongText("There's a Toad over there that will end the tutorial good luck!", DialogLayout.Top)
                }
                if (Main_Player.overlapsWith(ToadRed)) {
                    game.showLongText("Touch the flag pole to end the tutorial, good luck!", DialogLayout.Top)
                }
            } else if (Metal == true) {
                if (Main_Player.isHittingTile(CollisionDirection.Bottom)) {
                    controller.moveSprite(Main_Player, 100, 0)
                } else {
                    controller.moveSprite(Main_Player, 64, 0)
                }
                if (Main_Player.overlapsWith(ToadST)) {
                    game.showLongText("Hey Mario, nice metal suit, \"SPACE\" to jump and \"E\" to sprint!", DialogLayout.Top)
                }
                if (Main_Player.overlapsWith(ToadBlue)) {
                    game.showLongText("Sorry Mario, but your wearing the \"Metal Cap\", so you can't wall jump, because your too heavy! Luckily there's some platforms for you to jump on instead!", DialogLayout.Top)
                }
                if (Main_Player.overlapsWith(ToadGreen)) {
                    game.showLongText("Good Job Mario! There's a Goomba down there be careful, make shure to jump on him or just run into him!", DialogLayout.Top)
                }
                if (Main_Player.overlapsWith(ToadYellow)) {
                    game.showLongText("There's a Toad over there that will end the tutorial, I would give you a good luck but I think you already have it.", DialogLayout.Top)
                }
                if (Main_Player.overlapsWith(ToadRed)) {
                    game.showLongText("Touch the flag pole to end the tutorial, Have fun!", DialogLayout.Top)
                }
            } else {
                if (Main_Player.isHittingTile(CollisionDirection.Bottom)) {
                    controller.moveSprite(Main_Player, 100, 0)
                } else {
                    controller.moveSprite(Main_Player, 64, 0)
                }
                if (Main_Player.overlapsWith(ToadST)) {
                    game.showLongText("Hey Mario, \"SPACE\" to jump and \"E\" to sprint!", DialogLayout.Top)
                }
                if (Main_Player.overlapsWith(ToadBlue)) {
                    game.showLongText("You can also jump off of walls by holding \"RIGHT\" or \"LEFT\" on a wall and pressing \"SPACE\" to jump to another wall!", DialogLayout.Top)
                }
                if (Main_Player.overlapsWith(ToadGreen)) {
                    game.showLongText("Good Job Mario! There's a Goomba down there be careful, make shure to jump on him!", DialogLayout.Top)
                }
                if (Main_Player.overlapsWith(ToadYellow)) {
                    game.showLongText("There's a Toad over there that will end the tutorial good luck!", DialogLayout.Top)
                }
                if (Main_Player.overlapsWith(ToadRed)) {
                    game.showLongText("Touch the flag pole to end the tutorial, good luck!", DialogLayout.Top)
                }
            }
        }
    }
})
function MarioMoveanim () {
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`IdleR`,
    5000,
    characterAnimations.rule(Predicate.FacingRight, Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`IdleL`,
    5000,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Moving against wall R`,
    100,
    characterAnimations.rule(Predicate.FacingRight, Predicate.NotMoving, Predicate.HittingWallRight, Predicate.HittingWallDown)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Moving against wall L`,
    100,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.NotMoving, Predicate.HittingWallLeft, Predicate.HittingWallDown)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Mario MoveR`,
    90,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Mario MoveL`,
    90,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`FallingR Slide`,
    5000,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingDown, Predicate.HittingWallRight)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`FallingL Slide`,
    5000,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingDown, Predicate.HittingWallLeft)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`JumpR`,
    5000,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`JumpR`,
    5000,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingUp, Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`JumpR`,
    5000,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingUp, Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`JumpL`,
    5000,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`JumpL`,
    5000,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingUp, Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`JumpL`,
    5000,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingUp, Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Falling R`,
    5000,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Falling R`,
    5000,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingDown, Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`Falling R`,
    5000,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingDown, Predicate.FacingLeft)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`FallingL`,
    5000,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`FallingL`,
    5000,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingDown, Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    Main_Player,
    assets.animation`FallingL`,
    5000,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingDown, Predicate.MovingRight)
    )
}
function UI () {
    Life_Icon = sprites.create(assets.image`Life 3`, SpriteKind.UIKIND)
    Life = 3
    Life_Icon.setFlag(SpriteFlag.RelativeToCamera, true)
    Life_Icon.setPosition(141, 15)
    Life_Icon.z = 4
    Coins = 0
    Coin_Icon = sprites.create(assets.image`Coin UI`, SpriteKind.UIKIND)
    Coin_Icon.setFlag(SpriteFlag.RelativeToCamera, true)
    Coin_Icon.setPosition(9, 15)
    Coin_Icon.z = 4
    Coin_Ammount = textsprite.create("X0")
    Coin_Ammount.setFlag(SpriteFlag.RelativeToCamera, true)
    Coin_Ammount.setPosition(22, 15)
    Coin_Ammount.z = 4
    Coin_Ammount.setOutline(1, 15)
}
function GoombaMoveanim () {
    characterAnimations.loopFrames(
    Goomba,
    assets.animation`Goomba animL`,
    200,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    Goomba,
    assets.animation`Goomba animR`,
    200,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    Goomba,
    assets.animation`Goomba IdleF UNUSED`,
    200,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    Goomba,
    assets.animation`Goomba IdleF UNUSED`,
    200,
    characterAnimations.rule(Predicate.FacingRight, Predicate.NotMoving)
    )
}
function Start_Metal () {
    sprites.destroyAllSpritesOfKind(SpriteKind.UNTANGABLE)
    effects.none.startScreenEffect()
    music.stopAllSounds()
    music.setVolume(40)
    music.play(music.createSong(assets.song`Metal Mario`), music.PlaybackMode.LoopingInBackground)
    music.setVolume(180)
    Hit = true
    game.setGameOverEffect(false, effects.dissolve)
    game.setGameOverPlayable(false, music.melodyPlayable(music.wawawawaa), false)
    game.setGameOverMessage(false, "GAME OVER")
    scene.setBackgroundImage(assets.image`GrassBG`)
    tiles.setCurrentTilemap(tilemap`Tutorial M`)
    Main_Player = sprites.create(assets.image`Metal`, SpriteKind.Player)
    Main_Player.z = 3
    Mariocode()
    tiles.placeOnTile(Main_Player, tiles.getTileLocation(0, 32))
    Main_Player.ay = 500
    Screencode()
    WJA = true
    UI()
    for (let value of tiles.getTilesByType(myTiles.tile35)) {
        ToadST = sprites.create(assets.image`Toad`, SpriteKind.NPC)
        tiles.placeOnTile(ToadST, value)
        tiles.setTileAt(value, myTiles.transparency16)
    }
    for (let value of tiles.getTilesByType(myTiles.tile30)) {
        ToadRed = sprites.create(assets.image`Toad red`, SpriteKind.NPC)
        tiles.placeOnTile(ToadRed, value)
        tiles.setTileAt(value, myTiles.transparency16)
    }
    for (let value of tiles.getTilesByType(myTiles.tile32)) {
        ToadBlue = sprites.create(assets.image`Toad blue`, SpriteKind.NPC)
        tiles.placeOnTile(ToadBlue, value)
        tiles.setTileAt(value, myTiles.transparency16)
    }
    for (let value of tiles.getTilesByType(myTiles.tile33)) {
        ToadGreen = sprites.create(assets.image`Toad green`, SpriteKind.NPC)
        tiles.placeOnTile(ToadGreen, value)
        tiles.setTileAt(value, myTiles.transparency16)
    }
    for (let value of tiles.getTilesByType(myTiles.tile34)) {
        ToadYellow = sprites.create(assets.image`Toad yellow`, SpriteKind.NPC)
        tiles.placeOnTile(ToadYellow, value)
        tiles.setTileAt(value, myTiles.transparency16)
    }
    for (let value of tiles.getTilesByType(myTiles.tile36)) {
        Enemy_killer = sprites.create(assets.image`Hitbox`, SpriteKind.DeathEnemy)
        tiles.placeOnTile(Enemy_killer, value)
    }
    MetalMoveanim()
    Toadsanims()
    Metal = true
    StartGame = true
}
scene.onOverlapTile(SpriteKind.Screen, myTiles.tile29, function (sprite, location) {
    if (StartGame == true) {
        Goomba = sprites.create(assets.image`Goomba`, SpriteKind.Goomba)
        tiles.placeOnTile(Goomba, location)
        Goomba.vx = -40
        Goomba.ay = 500
        tiles.setTileAt(location, myTiles.transparency16)
        GoombaMoveanim()
    }
})
function Toadsanims () {
    characterAnimations.loopFrames(
    ToadST,
    assets.animation`Toad Anim`,
    240,
    characterAnimations.rule(Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    ToadRed,
    assets.animation`Toad AnimR`,
    240,
    characterAnimations.rule(Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    ToadBlue,
    assets.animation`Toad AnimB`,
    240,
    characterAnimations.rule(Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    ToadGreen,
    assets.animation`Toad AnimG`,
    240,
    characterAnimations.rule(Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    ToadYellow,
    assets.animation`Toad AnimY`,
    240,
    characterAnimations.rule(Predicate.NotMoving)
    )
}
function Mariocode () {
    Main_Player.setFlag(SpriteFlag.Invisible, false)
    Main_Player.setFlag(SpriteFlag.ShowPhysics, false)
    CAM = sprites.create(assets.image`Cam`, SpriteKind.HitboxM)
    scene.cameraFollowSprite(CAM)
    CAM.z = 1
    CAM.setFlag(SpriteFlag.Invisible, true)
    Hammerin_hand = sprites.create(assets.image`INVISHIH`, SpriteKind.Weapon)
    Hammerin_hand.z = 1
    Hammerin_hand.setFlag(SpriteFlag.Invisible, true)
    MHANIM = sprites.create(assets.image`INVISMH`, SpriteKind.UNTANGABLE)
    MHANIM.z = 2
    MHANIM.setFlag(SpriteFlag.Invisible, true)
    Hitbox_MD = sprites.create(assets.image`HitboxDM`, SpriteKind.HitboxMD)
    Hitbox_MD.z = 1
    Hitbox_MD.setFlag(SpriteFlag.Invisible, true)
    HitboxMario = sprites.create(assets.image`HitboxM`, SpriteKind.HitboxM)
    HitboxMario.z = 1
    HitboxMario.setFlag(SpriteFlag.Invisible, true)
}
let Mario_Columm = 0
let Mario_Row = 0
let HitboxMario: Sprite = null
let Hitbox_MD: Sprite = null
let CAM: Sprite = null
let Coin_Ammount: TextSprite = null
let Coin_Icon: Sprite = null
let Life_Icon: Sprite = null
let Goomba: Sprite = null
let Coin: Sprite = null
let Coins = 0
let Screen_shade: Sprite = null
let Screen: Sprite = null
let Enemy_killer: Sprite = null
let ToadYellow: Sprite = null
let ToadGreen: Sprite = null
let ToadBlue: Sprite = null
let ToadRed: Sprite = null
let ToadST: Sprite = null
let WJA = false
let L_is_real = false
let Hit = false
let JM = false
let Jump = false
let Metal = false
let Life = 0
let StartGame = false
let MHANIM: Sprite = null
let Hammerin_hand: Sprite = null
let Main_Player: Sprite = null
let Start2 = false
let Title_A: Sprite = null
let Logo_arcadeMove_Here: Sprite = null
let Cursor: Sprite = null
let Aeye2: Sprite = null
let Aeye1: Sprite = null
let Aeye2p2: Sprite = null
let Aeye1p2: Sprite = null
let AHead: Sprite = null
let TitleSP: Sprite = null
let Arcade_Text: TextSprite = null
let DEV = false
DEV = true
music.stopAllSounds()
music.setVolume(255)
tiles.setCurrentTilemap(tilemap`St1`)
scene.setBackgroundImage(assets.image`Background start2`)
let STCAM = sprites.create(assets.image`Invis`, SpriteKind.UNTANGABLE)
tiles.placeOnTile(STCAM, tiles.getTileLocation(8, 8))
scene.cameraFollowSprite(STCAM)
let Arcade_Logo = sprites.create(assets.image`Arcade logo Falling`, SpriteKind.Arcade_Logo)
tiles.placeOnTile(Arcade_Logo, tiles.getTileLocation(8, 1))
Arcade_Logo.setVelocity(0, 460)
timer.after(230, function () {
    timer.after(1500, function () {
        music.setVolume(96)
        color.FadeToWhite.startScreenEffect(500)
        timer.after(900, function () {
            color.clearFadeEffect()
            sprites.destroy(STCAM)
            sprites.destroy(Arcade_Logo)
            sprites.destroy(Arcade_Text)
            tiles.setCurrentTilemap(tilemap`level2`)
            scene.setBackgroundImage(assets.image`Background start`)
            TitleSP = sprites.create(assets.image`Title Main`, SpriteKind.UNTANGABLE)
            TitleSP.z = 2
            scene.cameraFollowSprite(TitleSP)
            TitleSP.setPosition(80, 55)
            timer.after(30, function () {
                TitleSP.changeScale(1, ScaleAnchor.Middle)
                timer.after(30, function () {
                    TitleSP.changeScale(1, ScaleAnchor.Middle)
                    timer.after(30, function () {
                        TitleSP.changeScale(1, ScaleAnchor.Middle)
                        timer.after(30, function () {
                            TitleSP.changeScale(1, ScaleAnchor.Middle)
                            timer.after(30, function () {
                                TitleSP.changeScale(1, ScaleAnchor.Middle)
                                music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
                                timer.after(30, function () {
                                    TitleSP.changeScale(1, ScaleAnchor.Middle)
                                    timer.after(30, function () {
                                        TitleSP.changeScale(-1, ScaleAnchor.Middle)
                                        timer.after(30, function () {
                                            TitleSP.changeScale(-1, ScaleAnchor.Middle)
                                            timer.after(30, function () {
                                                TitleSP.changeScale(-1, ScaleAnchor.Middle)
                                                timer.after(1000, function () {
                                                    tiles.setCurrentTilemap(tilemap`level7`)
                                                    AHead = sprites.create(assets.image`Final`, SpriteKind.UNTANGABLE)
                                                    tiles.placeOnTile(AHead, tiles.getTileLocation(6, 3))
                                                    AHead.changeScale(7, ScaleAnchor.Middle)
                                                    AHead.vy = 220
                                                    timer.after(21, function () {
                                                        AHead.vy = 0
                                                        tiles.setWallAt(tiles.getTileLocation(4, 3), true)
                                                        tiles.setWallAt(tiles.getTileLocation(6, 3), true)
                                                        tiles.setWallAt(tiles.getTileLocation(8, 3), true)
                                                        tiles.setWallAt(tiles.getTileLocation(5, 2), true)
                                                        tiles.setWallAt(tiles.getTileLocation(7, 2), true)
                                                        tiles.setWallAt(tiles.getTileLocation(5, 4), true)
                                                        tiles.setWallAt(tiles.getTileLocation(7, 4), true)
                                                        Aeye1p2 = sprites.create(assets.image`eye2`, SpriteKind.UNTANGABLE)
                                                        tiles.placeOnTile(Aeye1p2, tiles.getTileLocation(5, 3))
                                                        Aeye1p2.changeScale(4, ScaleAnchor.Middle)
                                                        Aeye2p2 = sprites.create(assets.image`eye2`, SpriteKind.UNTANGABLE)
                                                        tiles.placeOnTile(Aeye2p2, tiles.getTileLocation(7, 3))
                                                        Aeye2p2.changeScale(4, ScaleAnchor.Middle)
                                                        Aeye1 = sprites.create(assets.image`Eye`, SpriteKind.UNTANGABLE)
                                                        tiles.placeOnTile(Aeye1, tiles.getTileLocation(5, 3))
                                                        Aeye1.changeScale(5, ScaleAnchor.Middle)
                                                        Aeye2 = sprites.create(assets.image`Eye`, SpriteKind.UNTANGABLE)
                                                        tiles.placeOnTile(Aeye2, tiles.getTileLocation(7, 3))
                                                        Aeye2.changeScale(5, ScaleAnchor.Middle)
                                                        Cursor = sprites.create(assets.image`Cursor PH`, SpriteKind.UNTANGABLE)
                                                        Cursor.z = 1
                                                        tiles.placeOnTile(Cursor, tiles.getTileLocation(3, 4))
                                                        Cursor.setFlag(SpriteFlag.StayInScreen, true)
                                                        Cursor.setFlag(SpriteFlag.GhostThroughWalls, true)
                                                        Aeye1.follow(Cursor, 400)
                                                        Aeye1p2.follow(Cursor, 400)
                                                        Aeye2.follow(Cursor, 400)
                                                        Aeye2p2.follow(Cursor, 400)
                                                    })
                                                    Logo_arcadeMove_Here = sprites.create(assets.image`Invis`, SpriteKind.UNTANGABLE)
                                                    Logo_arcadeMove_Here.setPosition(16, 13)
                                                    TitleSP.follow(Logo_arcadeMove_Here, 280)
                                                    timer.after(50, function () {
                                                        TitleSP.changeScale(-1, ScaleAnchor.Middle)
                                                        timer.after(30, function () {
                                                            TitleSP.changeScale(-1, ScaleAnchor.Middle)
                                                            timer.after(30, function () {
                                                                TitleSP.changeScale(-1, ScaleAnchor.Middle)
                                                                Title_A = sprites.create(assets.image`Title1`, SpriteKind.UNTANGABLE)
                                                                Title_A.setPosition(80, 110)
                                                                Title_A.changeScale(1, ScaleAnchor.Middle)
                                                                animation.runImageAnimation(
                                                                Title_A,
                                                                assets.animation`myAnim0`,
                                                                270,
                                                                true
                                                                )
                                                                Start2 = true
                                                                music.setVolume(40)
                                                                music.play(music.createSong(assets.song`Title`), music.PlaybackMode.LoopingInBackground)
                                                                Cursor.z = 3
                                                                controller.moveSprite(Cursor, 90, 90)
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
game.onUpdate(function () {
    if (StartGame == true) {
        Mario_Row = Main_Player.y / 16
        Mario_Columm = Main_Player.x / 16
        if (Coins == 0) {
            Coin_Ammount.setText("X0")
        } else if (Coins == 1) {
            Coin_Ammount.setText("X1")
        } else if (Coins == 2) {
            Coin_Ammount.setText("X2")
        } else if (Coins == 3) {
            Coin_Ammount.setText("X3")
        } else if (Coins == 4) {
            Coin_Ammount.setText("X4")
        } else if (Coins == 5) {
            Coin_Ammount.setText("X5")
        } else if (Coins == 6) {
            Coin_Ammount.setText("X6")
        } else if (Coins == 7) {
            Coin_Ammount.setText("X7")
        } else if (Coins == 8) {
            Coin_Ammount.setText("X8")
        } else if (Coins == 9) {
            Coin_Ammount.setText("X9")
        } else if (Coins == 10) {
            Coin_Ammount.setText("X10")
        } else if (Coins == 11) {
            Coin_Ammount.setText("X11")
        } else if (Coins == 12) {
            Coin_Ammount.setText("X12")
        } else if (Coins == 13) {
            Coin_Ammount.setText("X13")
        } else {
            Coin_Ammount.setText("XERR")
        }
        if (Life == 0) {
            Life_Icon.setImage(assets.image`Life 0`)
        } else if (Life == 1) {
            Life_Icon.setImage(assets.image`Life 1`)
        } else if (Life == 2) {
            Life_Icon.setImage(assets.image`Life 2`)
        } else if (Life == 3) {
            if (Metal == true) {
                Life_Icon.setImage(assets.image`Life INF`)
            } else {
                Life_Icon.setImage(assets.image`Life 3`)
            }
        } else {
            Life_Icon.setImage(assets.image`Life ERR`)
        }
        if (Life == 0) {
            Main_Player.setFlag(SpriteFlag.Invisible, false)
            Main_Player.setFlag(SpriteFlag.Ghost, true)
            controller.moveSprite(Main_Player, 0, 0)
            if (L_is_real == true) {
                DeadL()
            } else if (JM == true) {
                DeadJM()
            } else {
                DeadM()
            }
            Main_Player.vy = -250
            timer.after(400, function () {
                Main_Player.vy = 250
                timer.after(400, function () {
                    game.gameOver(false)
                })
            })
        }
        if (!(Life == 0)) {
            if (Metal == true) {
                if (controller.B.isPressed()) {
                    characterAnimations.loopFrames(
                    Main_Player,
                    assets.animation`Metal Attack R`,
                    68,
                    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingRight)
                    )
                    characterAnimations.loopFrames(
                    Main_Player,
                    assets.animation`Metal Attack L`,
                    68,
                    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingLeft)
                    )
                } else {
                    characterAnimations.loopFrames(
                    Main_Player,
                    assets.animation`Metal MoveR`,
                    90,
                    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingRight)
                    )
                    characterAnimations.loopFrames(
                    Main_Player,
                    assets.animation`Metal MoveL`,
                    90,
                    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingLeft)
                    )
                }
            } else if (L_is_real == true) {
                if (controller.B.isPressed()) {
                    characterAnimations.loopFrames(
                    Main_Player,
                    assets.animation`Luigi MoveRs`,
                    80,
                    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingRight)
                    )
                    characterAnimations.loopFrames(
                    Main_Player,
                    assets.animation`Luigi MoveLs`,
                    80,
                    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingLeft)
                    )
                } else {
                    characterAnimations.loopFrames(
                    Main_Player,
                    assets.animation`Luigi MoveR`,
                    90,
                    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingRight)
                    )
                    characterAnimations.loopFrames(
                    Main_Player,
                    assets.animation`Luigi MoveL`,
                    90,
                    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingLeft)
                    )
                }
            } else if (JM == true) {
                if (controller.down.isPressed()) {
                    if (characterAnimations.matchesRule(Main_Player, characterAnimations.rule(Predicate.FacingRight))) {
                        characterAnimations.setCharacterState(Hammerin_hand, characterAnimations.rule(Predicate.FacingRight))
                        characterAnimations.setCharacterState(MHANIM, characterAnimations.rule(Predicate.FacingRight))
                    } else if (characterAnimations.matchesRule(Main_Player, characterAnimations.rule(Predicate.FacingLeft))) {
                        characterAnimations.setCharacterState(Hammerin_hand, characterAnimations.rule(Predicate.FacingLeft))
                        characterAnimations.setCharacterState(MHANIM, characterAnimations.rule(Predicate.FacingLeft))
                    }
                } else {
                    if (controller.B.isPressed()) {
                        characterAnimations.loopFrames(
                        Main_Player,
                        assets.animation`JM MoveRs`,
                        80,
                        characterAnimations.rule(Predicate.FacingRight, Predicate.MovingRight)
                        )
                        characterAnimations.loopFrames(
                        Main_Player,
                        assets.animation`JM MoveLs`,
                        80,
                        characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingLeft)
                        )
                    } else {
                        characterAnimations.loopFrames(
                        Main_Player,
                        assets.animation`JM MoveR`,
                        90,
                        characterAnimations.rule(Predicate.FacingRight, Predicate.MovingRight)
                        )
                        characterAnimations.loopFrames(
                        Main_Player,
                        assets.animation`JM MoveL`,
                        90,
                        characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingLeft)
                        )
                    }
                }
            } else {
                if (controller.B.isPressed()) {
                    characterAnimations.loopFrames(
                    Main_Player,
                    assets.animation`Mario MoveRs`,
                    80,
                    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingRight)
                    )
                    characterAnimations.loopFrames(
                    Main_Player,
                    assets.animation`Mario MoveLs`,
                    80,
                    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingLeft)
                    )
                } else {
                    characterAnimations.loopFrames(
                    Main_Player,
                    assets.animation`Mario MoveR`,
                    90,
                    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingRight)
                    )
                    characterAnimations.loopFrames(
                    Main_Player,
                    assets.animation`Mario MoveL`,
                    90,
                    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingLeft)
                    )
                }
            }
            if (Main_Player.tileKindAt(TileDirection.Center, myTiles.tile36)) {
                Life = 0
                music.stopAllSounds()
                music.play(music.createSong(assets.song`Death`), music.PlaybackMode.InBackground)
            }
            if (Main_Player.tileKindAt(TileDirection.Center, myTiles.tile37) || (Main_Player.tileKindAt(TileDirection.Center, myTiles.tile38) || (Main_Player.tileKindAt(TileDirection.Center, myTiles.tile39) || (Main_Player.tileKindAt(TileDirection.Center, myTiles.tile40) || Main_Player.tileKindAt(TileDirection.Center, myTiles.tile36))))) {
            	
            }
            if (!(Main_Player.tileKindAt(TileDirection.Center, myTiles.tile37) || (Main_Player.tileKindAt(TileDirection.Center, myTiles.tile38) || (Main_Player.tileKindAt(TileDirection.Center, myTiles.tile39) || (Main_Player.tileKindAt(TileDirection.Center, myTiles.tile40) || Main_Player.tileKindAt(TileDirection.Center, myTiles.tile36)))))) {
                CAM.setPosition(Main_Player.x, Main_Player.y)
            }
            MHANIM.setPosition(Main_Player.x, Main_Player.y)
            Hammerin_hand.setPosition(Main_Player.x, Main_Player.y)
            Hitbox_MD.setPosition(Main_Player.x, Main_Player.y)
            HitboxMario.setPosition(Main_Player.x, Main_Player.y)
            if (Main_Player.isHittingTile(CollisionDirection.Bottom)) {
                Main_Player.vy = 0
                if (!(controller.B.isPressed())) {
                    controller.moveSprite(Main_Player, 100, 0)
                }
            }
            if (Metal == true) {
                Main_Player.ay = 420
                if (Jump == false) {
                    Main_Player.vy = 220
                }
            } else {
                Main_Player.ay = 377
            }
            if (!(Main_Player.isHittingTile(CollisionDirection.Bottom))) {
                if (!(characterAnimations.matchesRule(Main_Player, characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingDown, Predicate.HittingWallLeft)) || characterAnimations.matchesRule(Main_Player, characterAnimations.rule(Predicate.FacingRight, Predicate.MovingDown, Predicate.HittingWallRight)))) {
                    if (WJA == true) {
                        if (!(controller.B.isPressed())) {
                            controller.moveSprite(Main_Player, 64, 0)
                        }
                    }
                }
                if (Metal == true) {
                    if (characterAnimations.matchesRule(Main_Player, characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingDown, Predicate.HittingWallLeft))) {
                        music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
                        Main_Player.vy = 60
                    }
                    if (characterAnimations.matchesRule(Main_Player, characterAnimations.rule(Predicate.FacingRight, Predicate.MovingDown, Predicate.HittingWallRight))) {
                        music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
                        Main_Player.vy = 60
                    }
                } else {
                    if (characterAnimations.matchesRule(Main_Player, characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingDown, Predicate.HittingWallLeft))) {
                        music.play(music.melodyPlayable(music.thump), music.PlaybackMode.InBackground)
                        Main_Player.vy = 50
                    }
                    if (characterAnimations.matchesRule(Main_Player, characterAnimations.rule(Predicate.FacingRight, Predicate.MovingDown, Predicate.HittingWallRight))) {
                        music.play(music.melodyPlayable(music.thump), music.PlaybackMode.InBackground)
                        Main_Player.vy = 50
                    }
                }
            }
            for (let value of sprites.allOfKind(SpriteKind.Goomba)) {
                if (value.isHittingTile(CollisionDirection.Left)) {
                    value.vx = 40
                }
                if (value.isHittingTile(CollisionDirection.Right)) {
                    value.vx = -40
                }
            }
        }
    }
})
