basic.showIcon(IconNames.Happy)
basic.forever(function () {
    while (mbit_Robot.Avoid_Sensor(mbit_Robot.enAvoidState.NOOBSTACLE)) {
        if (mbit_Robot.Ultrasonic_Car() > 30) {
            mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 128)
            mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Green)
        } else if (mbit_Robot.Ultrasonic_Car() < 30) {
            mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Left, 255)
            basic.pause(50)
        }
    }
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Back, 100)
    music.playMelody("C5 - C5 - C5 - C5 - ", 2000)
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Left, 255)
    basic.pause(50)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Red)
})
