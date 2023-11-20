//your JS code here. If required.
function btnClick() {
  let number = document.getElementById('counter');
  let value = number.innerText;
  alert(value);
  number.innerText = ++value;
}