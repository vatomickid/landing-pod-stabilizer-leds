led.enable(false)
Environment.ledBrightness(AnalogPin.P1, true)
basic.pause(100)
Environment.ledBrightness(AnalogPin.P1, false)
Environment.ledBrightness(AnalogPin.P2, true)
basic.pause(100)
Environment.ledBrightness(AnalogPin.P2, false)
Environment.ledBrightness(AnalogPin.P3, true)
basic.pause(100)
Environment.ledBrightness(AnalogPin.P3, false)
basic.forever(function () {
    if (input.isGesture(Gesture.ScreenUp)) {
        Environment.ledBrightness(AnalogPin.P1, false)
        Environment.ledBrightness(AnalogPin.P2, false)
        Environment.ledBrightness(AnalogPin.P3, false)
    } else if (input.isGesture(Gesture.LogoDown)) {
        Environment.ledBrightness(AnalogPin.P1, true)
        Environment.ledBrightness(AnalogPin.P2, true)
        Environment.ledBrightness(AnalogPin.P3, false)
    } else if (input.isGesture(Gesture.TiltLeft)) {
        Environment.ledBrightness(AnalogPin.P1, true)
        Environment.ledBrightness(AnalogPin.P2, false)
        Environment.ledBrightness(AnalogPin.P3, true)
    } else if (input.isGesture(Gesture.TiltRight)) {
        Environment.ledBrightness(AnalogPin.P1, false)
        Environment.ledBrightness(AnalogPin.P2, true)
        Environment.ledBrightness(AnalogPin.P3, true)
    } else if (input.isGesture(Gesture.LogoUp)) {
        Environment.ledBrightness(AnalogPin.P1, false)
        Environment.ledBrightness(AnalogPin.P2, false)
        Environment.ledBrightness(AnalogPin.P3, true)
    }
})
