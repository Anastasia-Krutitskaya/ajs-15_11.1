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
  constructor(name, type, health) {
    this.name = name;
    this.type = type;
    this.health = health;
  }
}

const person1 = new Person('P1', 'Person', 50);
const person2 = new Person('P2', 'Person', 40);

const myTeam = new Team(person1, person2);

for (const p of myTeam) {
  // eslint-disable-next-line no-console
  console.log(p);
}
