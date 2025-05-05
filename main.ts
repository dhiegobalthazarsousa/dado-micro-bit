input.onButtonPressed(Button.A, function () {
    led.setBrightness(20)
    for (let index = 0; index < 10; index++) {
        basic.showNumber(randint(1, 6))
    }
    led.setBrightness(255)
    basic.showNumber(randint(1, 6))
})
