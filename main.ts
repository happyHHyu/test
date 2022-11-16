basic.forever(function () {
    serial.writeValue("TEMP", input.temperature())
    serial.writeValue("LIGHT", input.lightLevel())
})
