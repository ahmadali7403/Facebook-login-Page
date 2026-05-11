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
