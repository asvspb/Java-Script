// создание классов

class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type
    }
    introduce() {
        console.log(`Hi, I am ${this.name}, I am ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
    }
    play() {
        console.log(`Arrr I am ${this.type}`);
    }
}

const WizardOne = new Wizard('Agroz', 'Dark magic')
const WizardTwo = new Wizard('Sally', 'Elf')

