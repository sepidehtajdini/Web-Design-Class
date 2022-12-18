const body = document.querySelector("body");
const tbody = document.querySelector("tbody");
const users = [
    { number: 1, name: "Mohammadreza", age: "42", email: "moh.golzar@yahoo.com" },
    { number: 2, name: "Amirhosein", age: "35", email: "amirarman.66@gmail.com" },
    { number: 3, name: "Sahar", age: "34", email: "dolatshahi_sahar@gmail.com" },
    { number: 4, name: "Elham", age: "40", email: "elham_hmd@yahoo.com" },
    { number: 5, name: "Sara", age: "48", email: "khoeeniha@gmail.com" }
];

users.map(function (value, index) {
    const tr = document.createElement("tr");
    tbody.append(tr);
    tr.setAttribute("id", "index_" + index)
    let td = document.createElement("td");
    tr.append(td);
    let ab = users.slice(",");
    let cd = ab[index];
    td.innerText = users[index].number;

    td = document.createElement("td");
    tr.append(td);
    ab = users.slice(",");
    cd = ab[index];
    td.innerText = users[index].name;
    td = document.createElement("td");
    tr.append(td);
    ab = users.slice(",");
    cd = ab[index];
    td.innerText = users[index].age;
    td = document.createElement("td");
    tr.append(td);
    ab = users.slice(",");
    cd = ab[index];
    td.innerText = users[index].email;

})