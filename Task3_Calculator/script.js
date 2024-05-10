let displayValue = '';

    function Display(value) {
      displayValue += value;
      document.getElementById('display').value = displayValue;
    }

    function clearDisplay() {
      displayValue = '';
      document.getElementById('display').value = '';
    }

    function del() {
      displayValue = displayValue.slice(0, -1); 
      document.getElementById('display').value = displayValue;
    }
    
    function Percent(){
      displayValue = displayValue/100;
      document.getElementById('display').value = displayValue;

    }

    function Result() {
      try {
        let result = eval(displayValue);
        document.getElementById('display').value = result;
        displayValue = result.toString();
      } catch (error) {
        document.getElementById('display').value = 'Error';
        displayValue = '';
      }
    }