let displayField = document.querySelector('.display');

const display = (value)=>{
  displayField.value = displayField.value + value;
}

const displayClear = ()=>{
  displayField.value = "";
}

const displayDelete = ()=>{
  displayField.value = displayField.value.slice(0,-1);
}

const calculate = ()=>{
  displayField.value = eval(displayField.value);
}