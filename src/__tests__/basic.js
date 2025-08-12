import Character, { Bowerman, Swordsman, Magician, Daemon, Undead, Zombie } from '../index'

const characterList = [
    ['Bowman', 25, 25, Bowerman],
    ['Swordsman', 40, 10, Swordsman],
    ['Magician', 10, 40, Magician],
    ['Daemon', 25, 25, Daemon],
    ['Undead', 40, 10, Undead],
    ['Zombie', 10, 40, Zombie],
]


test.each(characterList)('Testing creation character with type %s', (classType, attack, defence, CharacterClass) => {
    const name = 'test Name';
    const character = new CharacterClass(name, classType);

    expect(character).toEqual({
        'name': name,
        'type': classType,
        'health': 100,
        'level': 1,
        'attack': attack,
        'defence': defence
    })
});

test('Testing levelUp function', () => {
    const result = 2;
    const character = new Character('Name', 'Bowman');
    character.levelUp();

    expect(character.level).toBe(result);
})

test('Testing damage function', () => {
    const result = 55;
    const character = new Character('Name', 'Swordsman');
    character.damage(50);
    
    expect(character.health).toBe(result);
})


test('Testing creation character with error type', () => {
  expect(() => new Character('Name', 'Mob')).toThrow('Недопустимый тип персонажа');
});

test('Testing creation character with error name', () => {
  expect(() => new Character('N', 'Magician')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов.');
});

test('Testing levelUp function with health <= 0', () => {
    
  expect(() => {
    const character = new Character('Name', 'Magician');
    character.health = 0;
    character.levelUp();
  }).toThrow('Нельзя повысить уровень умершего');
});

test('Testing damage function with health <= 0', () => {
    
  expect(() => {
    const character = new Character('Name', 'Magician');
    character.health = 0;
    character.damage(10);
  }).toThrow('Персонаж мертв');
});
