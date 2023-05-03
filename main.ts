let variable_5 = 0
let variable_2 = 0
let variable_1 = 0
let variable_4 = 0
let variable_3 = 0
input.onPinPressed(TouchPin.P0, function () {
    let variable_6 = 0
    variable_5 = 5
    basic.showNumber(0)
    variable_5 = randint(0, 10)
    basic.showNumber(variable_5)
    basic.showNumber(variable_5 * variable_6)
})
input.onButtonPressed(Button.A, function () {
    variable_2 = 2
    basic.showNumber(variable_2)
    variable_1 = randint(0, 10)
    basic.showNumber(variable_1)
    basic.showNumber(variable_2 * variable_1)
})
input.onButtonPressed(Button.AB, function () {
    variable_4 = 4
    basic.showNumber(variable_4)
    variable_4 = randint(0, 10)
    basic.showNumber(variable_4)
    basic.showNumber(variable_4 * variable_5)
})
input.onButtonPressed(Button.B, function () {
    variable_3 = 3
    basic.showNumber(variable_3)
    variable_4 = randint(0, 10)
    basic.showNumber(variable_4)
    basic.showNumber(variable_4 * variable_3)
})
basic.forever(function () {
	
})
