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
function check()
{
    img = document.getElementById("image")
    classifier.classify(img, gotResult)
}
function gotResult(error, results)
{
    if(error)
    {
        console.log("An error occurred. Details: " + error)
    }
    else
    {
        console.log(results)
        document.getElementById("resultemotion1").innerHTML = results[0].label
        document.getElementById("resultemotion2").innerHTML = results[1].label
        prediction1 = results[0].label
        prediction2 = results[1].label
        speak()
        if(prediction1 == "Thumps Up")
        {
            document.getElementById("resultemoji1").innerHTML = "👍"
        }
        if(prediction1 == "Thumbs Down")
        {
            document.getElementById("resultemoji1").innerHTML = "👎"
        }
        if(prediction1 == "Palm")
        {
            document.getElementById("resultemoji1").innerHTML = "✋"
        }
        if(prediction1 == "Crossing Fingers")
        {
            document.getElementById("resultemoji1").innerHTML = "🤞"
        }
        if(prediction1 == "Victory")
        {
            document.getElementById("resultemoji1").innerHTML = "✌️"
        }
        if(prediction1 == "OK")
        {
            document.getElementById("resultemoji1").innerHTML = "👌"
        }
        if(prediction2 == "Thumps Up")
        {
            document.getElementById("resultemoji2").innerHTML = "👍"
        }
        if(prediction2 == "Thumbs Down")
        {
            document.getElementById("resultemoji2").innerHTML = "👎"
        }
        if(prediction2 == "Palm")
        {
            document.getElementById("resultemoji2").innerHTML = "✋"
        }
        if(prediction2 == "Crossing Fingers")
        {
            document.getElementById("resultemoji2").innerHTML = "🤞"
        }
        if(prediction2 == "Victory")
        {
            document.getElementById("resultemoji2").innerHTML = "✌️"
        }
        if(prediction2 == "OK")
        {
            document.getElementById("resultemoji2").innerHTML = "👌"
        }
    }
}
function speak()
{
    var speak = window.speechSynthesis
    speakdata1 = "Prediction 1 is " + prediction1
    speakdata2 = "Prediction 2 is " + prediction2
    var texttospeech = new SpeechSynthesisUtterance(speakdata1 + speakdata2)
    speak.speak[texttospeech]
}