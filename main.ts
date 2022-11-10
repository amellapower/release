input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        # . . . #
        . . # . .
        . # . # .
        `)
    music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        # . . . #
        . # # # .
        `)
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
})
