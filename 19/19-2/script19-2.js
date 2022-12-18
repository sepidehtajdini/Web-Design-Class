const body = document.querySelector("body")
const btn = document.querySelector(".add");
const input = document.querySelector("#list_items");
const ul = document.createElement("ul");
const div = document.querySelector("div");
btn.addEventListener("click", function () {
    if (input.value === "") { alert("Invalid input"); }
    else {
        div.append(ul);
        const li = document.createElement("li");
        const del = document.createElement("button");
        del.innerText = "Delete";
        del.setAttribute("class", "delete");

        del.addEventListener("click", function () {
            li.remove();
        })

        li.innerText = input.value;
        li.append(del)
        ul.append(li);
        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        li.prepend(checkbox);

        input.value = "";
    }
})

// function onclk2(){
// const li=document.querySelector("li");
// ul.removeChild(li);}

// function clk1(){
//     if (input.value === ""){btn.removeEventListener("click",clk1); return}
//     else{
//     div.append(ul);
//     const li=document.createElement("li");
//     li.innerText=input.value;
//     const del=document.createElement("button");
//     del.setAttribute("class","delete");
//     const checkbox=document.createElement("input");
//     checkbox.setAttribute("type","checkbox");
//     del.innerText="Delete";
//     li.append(checkbox);
//     li.append(del);
//     ul.append(li);
//     input.value= "";
//     del.addEventListener("click", onclk2);}}

// btn.addEventListener("click", clk1);
