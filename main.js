document.getElementById("Login").addEventListener("click", function () {
  validate();
});

function validate() {
  var username = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if ((email = "admin@gmail.com" && password == "admin")) {
    alert("Login successfully");
    return false;
  } else {
    alert("Login failed");
  }
}
