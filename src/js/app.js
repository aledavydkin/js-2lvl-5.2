export default function destructuring(obj) {
  const array = [];
  const { special } = obj;

  special.forEach((el) => {
    const {
      id, name, description = 'Описание недоступно', icon,
    } = el;

    array.push({
      id, name, description, icon,
    });
  });
  return array;
}

const data = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      // <- обратите внимание, описание "засекречено"
    },
  ],
};

const test = destructuring(data);
console.log(test);
