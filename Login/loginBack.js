email = ""
pass = ""

if (localStorage.getItem("email")) {
    console.log("already logged in as: ", localStorage.getItem("email"))
    window.location.href = "../Dashboard/dashboard.html"
}

function handleEmail(event) {
    email = event.target.value;
}
function handlePass(event) {
    pass = event.target.value;
}

async function postJSON(data) {
    try {
        const response = await fetch("http://localhost:8000/api/v1/auth/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const result = await response.json();
        console.log("Success: ", result);
        if (result.success) {
            localStorage.setItem("email", data.email)
            window.location.href = "../Dashboard/dashboard.html"
        }
    }
    catch(error) {
        console.error("Error: ", error);
    }
}

function handleSubmission(event) {
    event.preventDefault();
    console.log("email: ", email)
    console.log("pass: ", pass);
    data = {email: email, password: pass}
    postJSON(data);
}

document.getElementById("inputEmail").addEventListener("change", handleEmail);
document.getElementById("inputPass").addEventListener("change", handlePass);
document.getElementById("mainForm").addEventListener("submit", handleSubmission);