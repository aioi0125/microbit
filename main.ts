basic.forever(function on_forever() {
    if (input.lightLevel() < 100) {
        basic.showLeds(`
            # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
        `)
    } else {
        basic.clearScreen()
    }
    
})
