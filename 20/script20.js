const form = document.querySelector("form");
const input = document.querySelector("input");
const names = document.querySelector("#name");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");

function submit(event) {
    event.preventDefault();
    const body = {
        name: names.value,
        username: username.value,
        email: email.value,
        phone: phone.value,
        website: website.value,
        company: { name: company.value }
    };

    if (names.value === "" || username.value === "" || email.value === "" || phone.value === "" || website.value === "" ||
        company.value === "") {
        alert("Please complete all the fields");
        form.removeEventListener("submit", submit)
    }
    else {
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        }).then(function (response) {
            return response.json()
        }).then(function (data) {
            console.log(data)
            alert("You have been registered successfully!");
            console.log("yesss")
            names.value = ""; username.value = ""; email.value = ""; phone.value = ""; website.value = ""; company.value = "";
        })
    }
}
form.addEventListener("submit", submit);