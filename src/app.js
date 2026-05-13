let password = document.querySelector("#password");
let eyeBtn = document.querySelector("#eye-btn");

let passwordShow = false;

eyeBtn.addEventListener("click", () => {
  if (!passwordShow) {
    eyeBtn.classList.remove("line-through");
    password.type = "text";
    passwordShow = true;
  } else {
    passwordShow = false;
    eyeBtn.classList.add("line-through");
    password.type = "password";
  }
});

let phone = document.querySelector("#phone");

let loginBtn = document.querySelector("#login-btn");

loginBtn.addEventListener("click", () => {
  document.querySelectorAll(".error-msg").forEach((msg) => msg.remove());
  password.classList.remove("border-red-600");
  phone.classList.remove("border-red-600")
  if (!phone.value.includes("@")) {
    let p = document.createElement("p");
    p.className = "error-msg text-red-700 text-sm ml-2";
    p.innerText = " Incorrect email, must contain @ symbol";
    phone.insertAdjacentElement("afterend", p);
    phone.classList.add("border-red-600");
  }
  const hasUpperCase = /[A-Z]/.test(password.value);
  const hasLowerCase = /[a-z]/.test(password.value);
  const hasNumber = /[0-9]/.test(password.value);
  const hasLength = password.value.length >= 8;
  const hasSymbol = /[^A-Za-z0-9]/.test(password.value);
  if (hasUpperCase && hasLowerCase && hasNumber && hasSymbol && hasLength) {
  } else {
    let p = document.createElement("p");
    p.className = "error-msg text-red-700 text-sm ml-2";
    p.innerText =
      " Weak Password! Password must contain upeercase, lowercase, number, symbol and length of 8 character.";
    password.insertAdjacentElement("afterend", p);
    password.classList.add("border-red-600");
  }
});
