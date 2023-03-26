input.onButtonPressed(Button.A, function () {
    if (tijd == 0) {
        project += 1
        if (project == 4) {
            project = 1
        }
        basic.showNumber(project)
    } else {
        if (project == 1) {
            basic.showIcon(IconNames.Happy)
        }
        if (project == 2) {
            basic.showIcon(IconNames.Sad)
        }
        if (project == 3) {
            basic.showIcon(IconNames.Confused)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (tijd == 0) {
        tijd = 1
        basic.showIcon(IconNames.Yes)
        basic.pause(100)
        basic.clearScreen()
    } else {
        if (project == 1) {
            basic.showLeds(`
                # . # . #
                # . # . #
                # . # . #
                # . # . #
                # . # . #
                `)
        }
        if (project == 2) {
            basic.showLeds(`
                # # # # #
                . . . . .
                # # # # #
                . . . . .
                # # # # #
                `)
        }
        if (project == 3) {
            basic.showLeds(`
                # # # # #
                # . # . #
                # # # # #
                # . # . #
                # # # # #
                `)
        }
    }
})
let tijd = 0
let project = 0
project = 0
tijd = 0
