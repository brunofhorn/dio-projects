const victories = 65;
const defeats = 3;
let rankName = "";

function winningBalance(victories, defeats){
    return victories - defeats;
}

function calculateActualRank(){
    const actualRank = winningBalance(victories, defeats);

    switch (true) {
        case (actualRank < 10):
            rankName = "Ferro";
            break;
        case (actualRank <= 20):
            rankName = "Bronze";
            break;
        case (actualRank <= 50):
            rankName = "Prata";
            break;
        case (actualRank <= 80):
            rankName = "Ouro";
            break;
        case (actualRank <= 90):
            rankName = "Diamante";
            break;
        case (actualRank <= 100):
            rankName = "Lendário";
            break;
        default:
            rankName = "Imortal";
            break;
    }

    console.log(`O herói tem um saldo de ${actualRank} vitórias e está no rank ${rankName}`)
}

calculateActualRank();