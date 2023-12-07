document.addEventListener('DOMContentLoaded', function() {
    let resultElement = document.getElementById('result');
    let buttons = document.querySelectorAll('#calculator button');
  
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var buttonText = button.innerText;
  
            if (buttonText === 'c') {
                resultElement.value = '';
            } else if (buttonText === '=') {
                try {
                    resultElement.value = eval(resultElement.value);
                } catch (error) {
                    resultElement.value = 'Error';
                }
            } else if (buttonText === '√x') {
               
                resultElement.value = Math.sqrt(eval(resultElement.value));
            } else if (buttonText === '%') {
               
                resultElement.value = eval(resultElement.value) / 100;
            } else if (buttonText === '÷') {
           
                resultElement.value += '/';
            } else if (buttonText === '×') {
                
                resultElement.value += '*';
            } else if (buttonText === '-') {
               
                resultElement.value += '-';
            } else {
                resultElement.value += buttonText;
            }
        });
    });
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  