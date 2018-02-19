var carRed, carBlue, messageWinner, btnRestart, userRed, userBlue, btnAccept;
var position1 = 32;
var position2 = 32;

carRed = document.querySelector('.js-car-red');
carBlue = document.querySelector('.js-car-blue');
messageWinner = document.querySelector('.js-message-winner');
btnRestart = document.querySelector('.js-btn-restart');
userRed = document.querySelector('.js-user-red');
userBlue = document.querySelector('.js-user-blue');
btnAccept = document.querySelector('.js-btn-accept');


btnAccept.addEventListener('click', function(){
    if ((userRed.value == "") || (userBlue.value == "")) {
      alert("Es obligatorio llenar todos los campos");
    }
    else{
      userRed.disabled = true;
      userBlue.disabled = true;
      btnAccept.style.backgroundColor = "#454444";
      btnAccept.style.borderColor = "#454444";
      btnAccept.disabled = true;
      btnRestart.focus();
    } 
});

document.addEventListener('keypress', (event) =>{

  if (btnAccept.disabled == true) {
      const key1 = event.key;
      var key = key1;
    
    if ((position1 == 1092) && (position1 > position2)) {
      messageWinner.innerHTML = "¡Felicidades! " + userRed.value + " has ganado.";
      messageWinner.style.bottom = "-14%";
      document.getElementById("js-message").classList.add("tada");
      key = "stop";
      btnRestart.focus();
    }
    else if((position2 >= 1092) && (position2 > position1)){
      messageWinner.innerHTML = "¡Felicidades! " + userBlue.value + " has ganado.";
      messageWinner.style.bottom = "-14%";
      document.getElementById("js-message").classList.add("tada");
      key = "stop";
      btnRestart.focus();
    }

    if ((key == "a") || (key == "A"))
    {
        if (position1 < 1092) {
            position1 += 10;
            carRed.style.left = position1 + "px";
        }           
    }

    if ((key == "l") || (key == "L"))
    {
        if (position2 < 1092) {
            position2 += 10;
            carBlue.style.left = position2 + "px";
        } 
    }  
  }

});
 

btnRestart.addEventListener('click', function(){
  position1 = 32;
  position2 = 32;
  carRed.style.left = position1 + "px";
  carBlue.style.left = position2 + "px";
  document.getElementById("js-message").classList.remove("tada");
  messageWinner.style.bottom = "75%";
  messageWinner.innerHTML = "";
  userRed.disabled = false;
  userBlue.disabled = false;
  btnAccept.style.backgroundColor = "#BD3131";
  btnAccept.disabled = false;
  btnAccept.focus();
  btnAccept.style.borderColor = "#910808"
});