document.getElementById("resumeForm").onsubmit = function(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if (name === "" || email === "") {
    document.getElementById("message").innerHTML = "Please fill all fields.";
  } else {
    document.getElementById("message").innerHTML = "Resume validated!";
  }
};