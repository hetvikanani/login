const data = localStorage.getItem("token")


const loginGet = async (data) => {
    const resp = await fetch(`https://abad9fe48b48.ngrok.io/validate?token=${data}`);
    const response = await resp.json();
    return response;
}

const just = async (data) => {
    const checkToken = await loginGet(data);
    console.log(checkToken);
    if (!checkToken.success) {
        window.location.href = "/index.html"
    }
}


just(data)

// if (data) {

//     // if (!checkToken.success) {
//     //     console.log("index file ma jas");
//     //
//     // }
// } else {
//     window.location.href = "/index.html"
// }


