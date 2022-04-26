

function clickfunction(){
    var text = document.getElementById('textbox');
    let inputText = text.value;
    if (inputText == "") {
        alert("Öncə sözü yazın!!")
      } else {
        let array = [];
        for (let i = 0; i < inputText.length; i++) {
            array.push(inputText[i]);
        }
        array.reverse();
        let reverseText = array.join("");
        document.getElementById("word").innerHTML = reverseText;
      }
}