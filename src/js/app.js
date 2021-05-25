/* eslint-disable no-plusplus */
/* eslint-disable max-classes-per-file */
// TODO: write your code here

class Team {
  constructor(...person) {
    this.team = [...person];
  }

  [Symbol.iterator]() {
    const { team } = this;
    let current = 0;
    const last = team.length;
    return {
      next() {
        if (current < last) {
          const result = {
            done: false, value: team[current],
          };
          current++;
          return result;
        }
        return { done: true };
      },
    };
  }
}

class Person {
  constructor(name, type, health, level, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }
}

const person1 = new Person('Лучник', 'Bowmen', 50, 1, 40, 10);
const person2 = new Person('Маг', 'Magician', 40, 1, 25, 40);
const person3 = new Person('Зомби', 'Zombie', 30, 1, 30, 10);

const myTeam = new Team(person1, person2, person3);

for (const p of myTeam) {
  // eslint-disable-next-line no-console
  console.log(p);
}
