prediction1 = ""
prediction2 = ""

Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 100
})
camera = document.getElementById("camera")
Webcam.attach("#camera")
function capturephoto()
{
    Webcam.snap(function(dataurl)
    {
        document.getElementById("result").innerHTML= "<img id='image' src='"+dataurl+"'>"
    })
}
console.log(ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/6YAV1rjQt/model.json", modelloaded)
function modelloaded()
{
    console.log("Model loaded succesfully!")
}
function speak()
{
    var speak = window.speechSynthesis
    speakdata1 = "Prediction 1 is " + prediction1
    speakdata2 = "Prediction 2 is " + prediction2
    var texttospeech = new SpeechSynthesisUtterance(speeakdata1 + speakdata2)
    speak.speak[texttospeech]
}