var textInput = document.createElement('input');
document.body.append(textInput);

var btn = document.createElement('button');
btn.innerText = "Speak";
document.body.append(btn);

btn.addEventListener('click', ()=>{
playText();
});

function playText(){
var utterance = new SpeechSynthesisUtterance(inputText.value);
utterance.pitch = 0.5;
speechSynthesis.speak(utterance);
}
