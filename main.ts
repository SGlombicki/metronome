input.onButtonPressed(Button.A, function () {
    bpm += 1
    displayBPM()
})
input.onButtonPressed(Button.AB, function () {
    bpm = 60
    displayBPM()
})
input.onButtonPressed(Button.B, function () {
    bpm += -1
    displayBPM()
})
function displayBPM () {
    basic.showString("" + bpm + "bpm")
}
let bpm = 0
music.setBuiltInSpeakerEnabled(true)
music.setVolume(127)
bpm = 60
displayBPM()
basic.forever(function () {
    music.play(music.tonePlayable(349, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.pause(bpm * (100 / 6))
})
