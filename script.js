const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("pwd");
const btn = document.getElementById("btn");
const errorDiv = document.getElementById("errorDiv");

btn.addEventListener("click", async (e) => {
  e.preventDefault();

  if (email.value !== "" && password.value !== "") {
    const da = await login(email.value, password.value);
    console.log(da);
    if (da.success) {
      window.location.href = "/dashboard.html";
    } else {
      errorDiv.innerHTML = da.message;
      errorDiv.classList.add("color");
    }
  } else {
    errorDiv.innerHTML = "Plz enter valid data";
    errorDiv.classList.add("color");
  }
});

const login = async (a, b) => {
  const resp = await fetch("https://48be74bd44a6.ngrok.io/login", {
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
  //   console.log(response.data.user);

  return response;
};
