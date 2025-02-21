const gootainer = document.getElementById("gootainer");
const goocounter = document.getElementById("goocounter");

let count = 0;
let root = document.querySelector(":root")

function make_goo() {
    let new_goo = document.createElement("img")
    new_goo.src = "low_res_googoobie.jpg";
    count++;
    goocounter.innerHTML = `Mitosis Count: ${count}`;
    gootainer.appendChild(new_goo);

    let sqr = Math.sqrt(count);
    if(sqr == Math.floor(sqr)){
        root.style.setProperty("--grid", sqr + 1)
    }

    setTimeout(() => {
        make_goo();
    }, 10);
}

make_goo();

// document.querySelector("body").addEventListener("mouseleave", (_) => {
//     alert("why you leavin?")
// })