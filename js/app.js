var btn = document.querySelector("#btn");
var inputText = document.querySelector("#inputText");
var output = document.querySelector("#output");

var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
btn.addEventListener('click',()=> {
    console.log("button clicked");
    var textInput = inputText.value;
    fetch(`https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=${textInput}`)
        .then(res => res.json())
        .then(data => {
            output.innerText =  `went to server and returned: ${data.contents.text} \n Got translation also: ${data.contents.translated}`;
        })
        .catch(() => alert('Sorry :( something is wrong with server'))
});
