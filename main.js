var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    recognition.start();
}

function rickroll() {
    window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
}

function speak2() {
    var synth = window.speechSynthesis;

    speak_data = "ok, wait, an error has occured wait five seconds";
    
    var utterthis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterthis);

    var num = num+1

    setTimeout(function(){
        rickroll();
    }, 5000);
}

function speak() {
    var synth = window.speechSynthesis;

    speak_data = "Hello I am your assistant today, how are you?";
    
    var utterthis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterthis);

    start();

    setTimeout(function(){
        speak2();
    }, 5000);
}

function work(){
    speak();
}
recognition.onresult = function(event) {
    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);

    if (Content == "great") {
        console.log("rick rolling");
        if (num < 1) {
            speak2();
        }
    }
}