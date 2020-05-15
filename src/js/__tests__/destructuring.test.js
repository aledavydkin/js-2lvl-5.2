import {
  describe, expect,
} from '@jest/globals';
import destructuring from '../app';

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

describe('Проверка отсортированых данных', () => {
  test('Если передали объект', () => {
    expect(destructuring(data, ['name', 'level'])).toEqual([{
      id: 8, name: 'Двойной выстрел', description: 'Двойной выстрел наносит двойной урон', icon: 'http://...',
    }, {
      id: 9, name: 'Нокаутирующий удар', description: 'Описание недоступно', icon: 'http://...',
    }]);
  });
});
