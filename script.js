const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("pwd");
const btn = document.getElementById("btn");
const errorDiv = document.getElementById("errorDiv");

btn.addEventListener("click", async (e) => {
  e.preventDefault();

  if (email.value !== "" && password.value !== "") {

    const da = await loginPost(email.value, password.value);
    if (da.success) {
      await loginGet(da.data.user.token)
    }
    if (da.success) {
      // if (localStorage.getItem('token')) {
      // console.log("hi dashboard");
      window.location.href = "/dashboard.html"
      // }
    } else {
      errorDiv.innerHTML = da.message;
      errorDiv.classList.add("color");
    }
  } else {
    errorDiv.innerHTML = "Plz fill data";
    errorDiv.classList.add("color");
  }
});

const loginPost = async (a, b) => {
  const resp = await fetch("https://abad9fe48b48.ngrok.io/login", {
    method: "POST",

    body: JSON.stringify({
      email: a,
      password: b,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const response = await resp.json();
  return response;
};

// const loginGet = async (token) => {
//   localStorage.setItem('token', token)
//   const resp = await fetch(`https://abad9fe48b48.ngrok.io/validate?token=${token}`);
//   const response = await resp.json();
//   return response;
// }

const loginGet = (token) => {
  axios.get(`https://abad9fe48b48.ngrok.io/validate?token=${token}`).then(response => console.log(response)).catch(error => console.log(error));
}