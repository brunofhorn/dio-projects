const heroName = "Super DIO Hero";
const heroXp = 6526;
let levelName = "";

//Se XP for menor do que 1.000 = Ferro
//Se XP for entre 1.001 e 2.000 = Bronze
//Se XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 5.001 e 6.000 = Ouro
//Se XP for entre 6.001 e 7.000 = Platina
//Se XP for entre 7.001 e 8.000 = Diamante
//Se XP for entre 8.001 e 9.000 = Diablo
//Se XP for entre 9.001 e 10.000= Imortal
//Se XP for maior ou igual a 10.001 = God of War

switch (true) {
    case (heroXp <= 1000):
        levelName = "Ferro";
        break;
    case (heroXp > 1000 && heroXp <= 2000):
        levelName = "Bronze";
        break;
    case (heroXp > 2000 && heroXp <= 5000):
        levelName = "Prata";
        break;
    case (heroXp > 5000 && heroXp <= 6000):
        levelName = "Ouro";
        break;
    case (heroXp > 6000 && heroXp <= 7000):
        levelName = "Platina";
        break;
    case (heroXp > 7000 && heroXp <= 8000):
        levelName = "Diamante";
        break;
    case (heroXp > 8000 && heroXp <= 9000):
        levelName = "Diablo";
        break;
    case (heroXp > 9000 && heroXp <= 10000):
        levelName = "Imortal";
        break;
    default:
        levelName = "God Of War";
        break;
}

//Mensagem final com o nível atual de herói
console.log("O herói de nome " + heroName + " está no nível " + levelName);