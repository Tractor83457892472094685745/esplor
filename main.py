basic.show_icon(IconNames.HAPPY)

def on_forever():
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.PINKISH)
    while mbit_Robot.Avoid_Sensor(mbit_Robot.enAvoidState.NOOBSTACLE):
        if mbit_Robot.Ultrasonic_Car() > 50:
            mbit_Robot.car_ctrl_speed(mbit_Robot.CarState.CAR_RUN, 100)
            mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.GREEN)
        elif mbit_Robot.Ultrasonic_Car() < 30:
            mbit_Robot.car_ctrl_speed(mbit_Robot.CarState.CAR_SPINLEFT, randint(25, 100))
            basic.pause(100)
            mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.BLUE)
            music.play_tone(988, music.beat(BeatFraction.DOUBLE))
    mbit_Robot.car_ctrl_speed(mbit_Robot.CarState.CAR_SPINRIGHT, 100)
    basic.pause(750)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.RED)
    music.play_tone(988, music.beat(BeatFraction.DOUBLE))
basic.forever(on_forever)
