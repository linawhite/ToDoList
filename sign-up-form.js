const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repeatPassword = document.getElementById("repeatPassword");

form.addEventListener("submit", (event) => {
  //cancels the event
  event.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  // pattern for input email made by regular expression
  const patternEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const emailToLowerCase = String(email).toLowerCase();

  return patternEmail.test(emailToLowerCase);
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const repeatPasswordValue = repeatPassword.value.trim();

  let count_false = 4;

  if (usernameValue === "") {
    setError(username, "Name is required");
  } else {
    setSuccess(username);
    count_false--;
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Not a valid email address");
  } else {
    setSuccess(email);
    count_false--;
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 character.");
  } else {
    setSuccess(password);
    count_false--;
  }

  if (repeatPasswordValue != passwordValue) {
    setError(repeatPassword, "Passwords don't match");
  } else {
    setSuccess(repeatPassword);
    count_false--;
  }

  console.log(count_false);

  const redirect = () => {
    window.location.href = "make-list.html";
  };

  if (count_false == 0) redirect();
};
