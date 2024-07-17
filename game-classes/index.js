class Hero{
    constructor(name, age, type) {
        this.nome = name;
        this.age = age;
        this.type = type;
    }

    attack () {
        let attackType = "";

        switch (this.type) {
            case "guerreiro":
                attackType = "espada";
                break;
            case "mago":
                attackType = "magia";
                break;
            case "monge":
                attackType = "artes marciais";
                break;
            case "ninja":
                attackType = "shuriken";
                break;
            default:
                attackType = "apenas os punhos";
                break;
        }

        return attackType;
    }
}

const hero = new Hero("Super DIO", 22, "mago");
const heroAttackType = hero.attack();

const otherHero = new Hero("Cursos PRO", 44, "ninja")
const otherHeroAttackType = otherHero.attack();

console.log(`O ${hero.type} atacou usando ${heroAttackType}`);
console.log(`O ${otherHero.type} atacou usando ${otherHeroAttackType}`);