let start = document.querySelector("#start");
let bt = document.querySelectorAll(".bt");

let main = document.querySelector("#main");
let change = document.querySelector("#change");
let box = document.querySelectorAll(".box");

let win = document.querySelector("#win");
let winner = document.querySelector("#winner");
let close = document.querySelector("#close");

let chng = true;
bt.forEach(choosing => {
    choosing.addEventListener("click", () => {
        if (choosing.id === "playerX") {
            chng = false;
            change.style.left = `0px`;
        }
        else {
            chng = true;
            change.style.left = `150px`;

        }
        start.style.display = "none";
        main.style.display = "block";
    })
});

box.forEach(items => {
    items.addEventListener("click", () => {
        if (chng == false) {
            items.innerHTML = `<i class="fas fa-times"></i>`;
            items.id = "X";
            items.style.pointerEvents = "none";
            change.style.left = `150px`;
            chng = true;
        }
        else {
            items.innerHTML = `<i class="far fa-circle"></i>`;
            items.id = "O";
            items.style.pointerEvents = "none";
            change.style.left = `0px`;
            chng = false;
        }
        winnerdecider();
        drawn();
    })
});
let combination = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [0, 3, 6], [2, 4, 6], [1, 4, 7], [2, 5, 8]
]
let winnerdecider = () => {
    for (let x = 0; x <= 7; x++) {
        let y = combination[x];
        if (box[y[0]].id == "" || box[y[1]].id == "" || box[y[2]].id == "") {
            continue;
        }
        else if (box[y[0]].id == "X" && box[y[1]].id == "X" && box[y[2]].id == "X") {
            winner.innerText = `Player X won the game`;
            main.style.display = "none";
            win.style.display = "block";
        }
        else if (box[y[0]].id == "O" && box[y[1]].id == "O" && box[y[2]].id == "O") {
            winner.innerText = `Player O won the game`;
            main.style.display = "none";
            win.style.display = "block";
        }
        else {
            continue;
        }
    }
}
let drawn= () => {
    if (box[0].id != "" && box[1].id != "" &&
     box[2].id != "" && box[3].id != "" &&
     box[4].id != "" && box[5].id != "" &&
     box[6].id != "" && box[7].id != "" && box[8].id != ""){
        winner.innerText = `Match Draw`;
        main.style.display = "none";
        win.style.display = "block";
    }
}

close.addEventListener("click",()=>{
    window.location.reload();
})