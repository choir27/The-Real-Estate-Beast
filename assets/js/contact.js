document.querySelector("#submit").addEventListener("click", submit);

let user = {
  first: "",
  last: "",
  email: "",
  number: "",
  message: "",
};

function submit() {
  let first = document.querySelector("#firstName").value;
  let last = document.querySelector("#lastName").value;
  let email = document.querySelector("#email").value;
  let number = document.querySelector("#phoneNumber").value;
  let message = document.querySelector("#message").value;
  let inputs = [first, last, email, number, message];
  let data = ["first", "last", "email", "number", "message"];
  for (let i = 0; i < inputs.length; i++) {
    user[data[i]] = inputs[i];
  }
  console.log(user);
}
