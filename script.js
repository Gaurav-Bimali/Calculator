document.addEventListener('DOMContentLoaded', function() {
    const moonSunButton = document.querySelector('.moon-sun-button');
    const moonIcon = moonSunButton.querySelector('.fa-moon');
    const sunIcon = moonSunButton.querySelector('.fa-sun');
    const calculator = document.querySelector('.calculator');
    const buttons = document.querySelectorAll('.calculator button');
    const display = document.getElementById('disp');

    buttons.forEach(function(button) {
      if (button !== moonSunButton) {
        button.addEventListener('click', function() {
          const buttonText = button.textContent;
          handleButtonClick(buttonText);
        });
      }
    });
    function handleButtonClick(buttonText) {
      if (buttonText === 'AC') {
        display.value = '';
      } else if (buttonText === 'Del') {
        display.value = display.value.slice(0, -1);
      } else if (buttonText === '=') {
        try {
          const result = eval(display.value);
          display.value = result;
        } catch (error) {
          display.value = 'Error';
        }
      } else {
        display.value += buttonText;
      }
    }
    moonSunButton.addEventListener('click', function() {
      moonIcon.classList.toggle('active');
      sunIcon.classList.toggle('active');
      calculator.classList.toggle('dark-mode');
      buttons.forEach(function(button) {
        if (button !== moonSunButton) {
          button.classList.toggle('dark-mode');
        }
      });
    });
  });
  