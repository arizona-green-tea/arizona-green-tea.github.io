// Example
// Lets say you have a button element with the id="btn"
// const btn = document.getElementById("btn");
// btn.addEventListener("click", do_something);
// const do_something = () => {
//     console.log("The button has been clicked");
// }

var hidden = true;

document.getElementById("projects").addEventListener("click", function () {
    console.log("clicked");
    hidden = !hidden;

    const stuff = document.getElementsByClassName("intro-container");
    const other_stuff = document.getElementsByClassName("project-container");
    const btn = document.getElementById("projects");
    console.log(stuff);
    if (!hidden) {
        //shift(stuff, "container-visible", "container-hidden")
        btn.innerHTML = "Back";
        for (let i = 0; i < stuff.length; i++) {
            console.log(stuff[i]);
            stuff[i].classList.add("container-hidden");
            stuff[i].classList.add("test");
            stuff[i].classList.remove("container-visible");
            stuff[i].classList.remove("container");

        }

        for (let i = 0; i < other_stuff.length; i++) {
            other_stuff[i].classList.add("container");
            other_stuff[i].classList.add("container-visible");
            other_stuff[i].classList.remove("container-hidden");
            other_stuff[i].classList.remove("test");

        }


    } else {
        //shift(stuff, "container-hidden", "container-visible")
        btn.innerHTML = "Cool Stuff?";
        for (let i = 0; i < stuff.length; i++) {
            console.log(stuff[i]);
            stuff[i].classList.add("container-visible");
            stuff[i].classList.add("container");
            stuff[i].classList.remove("container-hidden");
            stuff[i].classList.remove("test");

        }

        for (let i = 0; i < other_stuff.length; i++) {
            other_stuff[i].classList.remove("container");
            other_stuff[i].classList.remove("container-visible");
            other_stuff[i].classList.add("container-hidden");
            other_stuff[i].classList.add("test");


        }
    }
})

function shift(elem, before, after) {

    for (let i = 0; i < elem.length; i++) {
        elem[i].classList.add(after);
        elem[i].classList.remove(before);

    }
}