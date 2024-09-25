let player1 = ""
let player2 = ""
let vez = 0
let i = 0
const buttonPlayer1 = document.querySelectorAll(".escolha1")
const buttonPlayer2 = document.querySelectorAll(".escolha2")
const tables = document.querySelectorAll(".table")
const b1 = document.getElementById("1")
const b2 = document.getElementById("2")
const b3 = document.getElementById("3")
const b4 = document.getElementById("4")
const b5 = document.getElementById("5")
const b6 = document.getElementById("6")
const b7 = document.getElementById("7")
const b8 = document.getElementById("8") 
const b9 = document.getElementById("9")

function messageDraw(){ //USANDO A MESMOS STYLES DA SHOWWINNING
        const screen = document.createElement("div")
        const alinhar = document.createElement("div")
        const h1 = document.createElement("h1")
        h1.classList.add("alinhar")
        h1.innerText = "EMPATOU!"
        screen.classList.add("winnerBackground")
        alinhar.classList.add("alinhar")
        const resetBtn = document.createElement("button")
        resetBtn.innerText = "Restart"
        resetBtn.addEventListener("click", function(){
            reset()
            screen.remove()
        })
        alinhar.append(h1, resetBtn)
        screen.appendChild(alinhar)
        document.body.appendChild(screen) 
}

function showWinning(ganhador){
    const screen = document.createElement("div")
    const alinhar = document.createElement("div")
    const h1 = document.createElement("h1")
    h1.classList.add("alinhar")
    h1.innerText = "O Jogador " + "'" + ganhador + "'" + " ganhou a partida!"
    screen.classList.add("winnerBackground")
    alinhar.classList.add("alinhar")
    const resetBtn = document.createElement("button")
    resetBtn.innerText = "Restart"
    resetBtn.addEventListener("click", function(){
        reset()
        screen.remove()
    })
    alinhar.append(h1, resetBtn)
    screen.appendChild(alinhar)
    document.body.appendChild(screen) 
}

function reset() {
    tables.forEach(function (space) {
        space.innerText = ""
    })
    removeSelectedClass(buttonPlayer1)
    removeSelectedClass(buttonPlayer2)
    player1 = ""
    player2 = ""
    vez = 0
}

function removeSelectedClass(buttons) {
    buttons.forEach(function (elemento) {
        elemento.classList.remove("selected")
    });
}


function isVictory() {
    const winningParts = [
        [b1, b2, b3],
        [b4, b5, b6],
        [b7, b8, b9],
        [b1, b4, b7],
        [b2, b5, b8],
        [b3, b6, b9],
        [b1, b5, b9],
        [b3, b5, b7]
    ]


       for (const array of winningParts) {
        if (array[0].innerText === array[1].innerText && array[1].innerText === array[2].innerText && array[0].innerText !== "") {
            //alert("Jogador " + array[0].innerText + " ganhou!");
            showWinning(array[0].innerText);
            return true; // Vencedor encontrado
        }
    }
    return false; // Nenhum vencedor
}

function isDraw() {
    if (vez === 9) { // Se todas as 9 posições foram preenchidas
        messageDraw()
        reset();
    }
}


buttonPlayer1.forEach(function (elemento) {
    elemento.addEventListener("click", function () {
        removeSelectedClass(buttonPlayer1);
        player1 = elemento.innerText
        elemento.classList.add("selected")
        if (player1 === "X") {
            player2 = "O"
        } else {
            player2 = "X"
        }

        removeSelectedClass(buttonPlayer2);

        document.querySelectorAll(".escolha2").forEach(function (elemento) {
            if (elemento.innerText === player2) {
                elemento.classList.add("selected")
            }
        })
    })
})


buttonPlayer2.forEach(function (elemento) {
    elemento.addEventListener("click", function () {
        removeSelectedClass(buttonPlayer2);
        player2 = elemento.innerText
        elemento.classList.add("selected")
        if (player2 === "X") {
            player1 = "O"
        } else {
            player1 = "X"
        }

        removeSelectedClass(buttonPlayer1);

        document.querySelectorAll(".escolha1").forEach(function (elemento) {
            if (elemento.innerText === player1) {
                elemento.classList.add("selected")
            }
        })
    })
})

tables.forEach(function (space) {
    space.addEventListener("click", function () {
        if (space.innerText === "") {
            if (vez % 2 == 0) {
                space.innerText = player1
            } else {
                space.innerText = player2
            }
            vez++
            if(!isVictory()){
                isDraw()
            }
        }
    })
})



