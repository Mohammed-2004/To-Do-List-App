let input = document.querySelector("input");
let btn = document.getElementById("btn");
let container = document.getElementById("container");
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value == "") {
        alert("Please enter a task !");
    }
    else {
        let div = `
    <div class="task">
    <span class="icon star">⭐️</span>
    <p>${input.value}</p>
    <div><span class="icon trash">🗑️</span><span class="icon emoji-greet">🫡</span></div>
    </div>
    `;
        container.innerHTML += div;
        input.value = "";
    }
})
// I added a switch case as I have multiple else if

container.addEventListener("click", (eo) => {
    if (eo.target.className == "icon trash") {
        eo.target.parentElement.parentElement.remove();
    }
    else if (eo.target.className == "icon emoji-greet") {
        eo.target.classList.add("dn");
        let span = `<span class="icon emoji-heart">❤️</span>`;
        eo.target.outerHTML = span;
    }
    else if (eo.target.className == "icon emoji-heart") {
        eo.target.classList.add("dn");
        let span = `<span class="icon emoji-greet">🫡</span>`;
        eo.target.outerHTML = span;
    }
    else if (eo.target.className == "icon star") {
        eo.target.classList.add('colored');
        container.prepend(eo.target.parentElement);
    }
    else if (eo.target.className == "icon star colored") {
        eo.target.classList.remove('colored');
    }
});


switch (eo.target.className) {
    case "icon trash":
        eo.target.parentElement.parentElement.remove();
        break;

    case "icon emoji-greet":
        eo.target.classList.add("dn");
        let span1 = `<span class="icon emoji-heart">❤️</span>`;
        eo.target.outerHTML = span1;
        break;

    case "icon emoji-heart":
        eo.target.classList.add("dn");
        let span2 = `<span class="icon emoji-greet">🫡</span>`;
        eo.target.outerHTML = span2;
        break;

    case "icon star":
        eo.target.classList.add('colored');
        container.prepend(eo.target.parentElement);
        break;

    case "icon star colored":
        eo.target.classList.remove('colored');
        break;

    default:
        console.log("Not Targetted Click !");
        break;
}