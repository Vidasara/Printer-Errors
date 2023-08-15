const input = document.getElementById('inputString');
const button = document.getElementById('checkButton');
const result = document.getElementById('result');

button.addEventListener('click',() => {
    if (input.value != '' && input.value.length != 0){
        let resultText = printer_error(input.value);
        result.innerHTML = resultText;
    }
})

function printer_error(s) {
    const badCharacterCount = s.split('').filter(char => char > 'm').length;
    const totalLength = s.length;
    return `${badCharacterCount}/${totalLength}`;
  }
  