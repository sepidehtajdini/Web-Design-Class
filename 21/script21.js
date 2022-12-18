const body = $("body");
const add = $(".add");
const input = $("input");
const div = $("div");
const ul = $("<ul></ul>");
let li = $("<li></li>");
$(div).append(ul);
const local = $(li).text(localStorage.getItem("toDo"));

if (li.text() != "") {
    $(ul).append(li);
    const del = $('<button class="delete">Delete</button>');
    $(li).append(del);
    $(del).click(function () {
        $(li).remove();
        localStorage.removeItem("toDo", input.val())
    });
}
$(add).click(function () {
    if (input.val() === "") { alert("Invalid input"); }
    else {
        let li = $("<li></li>")
        $(ul).append(li);
        $(li).text(input.val());
        const del = $('<button class="delete">Delete</button>');

        $(li).append(del);
        localStorage.setItem("toDo", input.val());

        $(del).click(function () {
            $(li).remove();
            localStorage.removeItem("toDo", input.val())
        });

        $(input.val()) === "";
    }
})


