function suffleNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function selection(play) {
    let result = ""
    if (play == 1) {
        result = "rock 🪨"
    } else if (play == 2) {
        result = "paper 🗌"
    } else if (play == 3) {
        result = "scissor ✂"
    } else {
        result = "the right option to LOSE. 😡\nRELOAD THE PAGE."
    }
    return result
}

function battle(userOption, pcOption) {
    if (userOption == 1 && pcOption == 3 || userOption == 2 && pcOption == 1 || userOption == 3 && pcOption == 2) {
        alert("YOU WIN! 🏆")
        wins++
    } else if (userOption == pcOption) {
        alert("You tie 😑")
    } else {
        alert("You lose 🤢")
        loses++
    }
}

let wins = 0
let loses = 0 

while (wins < 3 && loses < 3) {
    let userData = prompt("Select a number:\n1 = Rock 🪨\n2 = Paper 🗌\n3 = Scissor ✂") // 1 = Piedra | 2 = Papel | 3 = Tijera
    let pcData = suffleNumber(1, 3)

    alert("🙃 You have selected " + selection(userData))
    alert("💻 Computer have selected " + selection(pcData))
    battle(userData, pcData)
}
alert("🏆 Wins = " + wins + " times \n🤢 Loses = " + loses + " times")
document.write("🏆 Wins = " + wins + " times | 🤢 Loses = " + loses + " times")