var response = null;

while (response !== "exit") {
  var response = prompt("Say something");
  var time = new Date();
  var returnMessage = time + ' | You said: "' + response + '! "';
  alert(returnMessage);
}

alert("Goodbye!");
