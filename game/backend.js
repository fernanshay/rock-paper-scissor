function suffleNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function selection(play) {
    let result = ""
    if (play == 1) {
        result = "rock šŖØ"
    } else if (play == 2) {
        result = "paper š"
    } else if (play == 3) {
        result = "scissor ā"
    } else {
        result = "the right option to LOSE. š”\nRELOAD THE PAGE."
    }
    return result
}

function battle(userOption, pcOption) {
    if (userOption == 1 && pcOption == 3 || userOption == 2 && pcOption == 1 || userOption == 3 && pcOption == 2) {
        alert("YOU WIN! š")
        wins++
    } else if (userOption == pcOption) {
        alert("You tie š")
    } else {
        alert("You lose š¤¢")
        loses++
    }
}

let wins = 0
let loses = 0 

while (wins < 3 && loses < 3) {
    let userData = prompt("Select a number:\n1 = Rock šŖØ\n2 = Paper š\n3 = Scissor ā") // 1 = Piedra | 2 = Papel | 3 = Tijera
    let pcData = suffleNumber(1, 3)

    alert("š You have selected " + selection(userData))
    alert("š» Computer have selected " + selection(pcData))
    battle(userData, pcData)
}
alert("š Wins = " + wins + " times \nš¤¢ Loses = " + loses + " times")
document.write("š Wins = " + wins + " times | š¤¢ Loses = " + loses + " times")
