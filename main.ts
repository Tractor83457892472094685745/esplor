basic.showIcon(IconNames.Happy)
basic.forever(function () {
    while (mbit_Robot.Avoid_Sensor(mbit_Robot.enAvoidState.NOOBSTACLE)) {
        if (mbit_Robot.Ultrasonic_Car() > 50) {
            mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 255)
            mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Green)
        } else if (mbit_Robot.Ultrasonic_Car() < 50) {
            mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Right, 100)
            mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Yellow)
        }
    }
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Back, 100)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Red)
    basic.pause(1000)
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Left, 100)
    basic.pause(1000)
})
