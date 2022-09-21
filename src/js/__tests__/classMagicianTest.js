import Magician from '../classMagician';

test('create Magician', () => {
  const heroMegician = new Magician(1);

  expect(heroMegician).toEqual({
    distance: 1,
    condition: 'normal',
    attack: 10,
    type: 'Magician',
  });
});
