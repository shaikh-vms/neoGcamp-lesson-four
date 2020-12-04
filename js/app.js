var btn = document.querySelector('#btn');
var inputText = document.querySelector('#inputText');
var output = document.querySelector('#output');
btn.addEventListener('click',()=> {
    var textInput = inputText.value;
    output.innerText =  'you just written text: '+textInput;
    console.log(textInput)
});