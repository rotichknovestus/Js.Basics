let displayValue = ''; //*store the current input
 function appendToDisplay(value){
   displayValue += value;
   document.getElementById('display').value =  displayValue;
 }

 function clearDisplay(){
  displayValue = '';
  document.getElementById('display').value = '';
 }

 function calculateResult(){
  try{
    const result = eval(displayValue);
    displayValue = result;
    document.getElementById('display').value = result;
  } catch (error) {
    displayValue = 'Error';
    document.getElementById('display').value = 'Error';
  }
 }