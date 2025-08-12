class Character {
    constructor(name, type) {
        if(typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Имя должно быть строкой длиной от 2 до 10 символов.')
        };

        const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
        if (!validTypes.includes(type)) {
            throw new Error('Недопустимый тип персонажа');
        };

        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;

        switch(type) {
            case 'Swordsman':
                this.attack = 40;
                this.defence = 10;
                break;
            case 'Magician':
                this.attack = 10;
                this.defence = 40;
                break;
            case 'Daemon':
                this.attack = 25;
                this.defence = 25;
                break;
            case 'Undead':
                this.attack = 40;
                this.defence = 10;
                break;
            case 'Zombie':
                this.attack = 10;
                this.defence = 40;
                break;
            default:
                this.attack = 25;
                this.defence = 25;
        }
    };

    levelUp() {
        if(this.health <= 0) {
            throw new Error('Нельзя повысить уровень умершего');
        };

        this.level += 1;
        this.health = 100;
        this.attack += this.attack / 100 * 20;
        this.defence += this.defence / 100 * 20;
    };

    damage(points) {
        if(this.health <= 0) {
            throw new Error('Персонаж мертв');
        };
        this.health -= points * (1 - this.defence / 100)
    };
};

export class Bowerman extends Character {
    constructor(name, type) {
        super(name, type)
        this.name = name;
        this.type = type;
    }
};

export class Swordsman extends Character {
    constructor(name, type) {
        super(name, type)
        this.name = name;
        this.type = type;
    }
};

export class Magician extends Character {
    constructor(name, type) {
        super(name, type)
        this.name = name;
        this.type = type;
    }
};

export class Daemon extends Character {
    constructor(name, type) {
        super(name, type)
        this.name = name;
        this.type = type;
    }
};

export class Undead extends Character {
    constructor(name, type) {
        super(name, type)
        this.name = name;
        this.type = type;
    }
};

export class Zombie extends Character {
    constructor(name, type) {
        super(name, type)
        this.name = name;
        this.type = type;
    }
};

export default Character;
