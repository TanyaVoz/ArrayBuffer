import MathAttack from '../math-log-trig';

test('test attack Magician/Daemon', () => {
  const hero = new MathAttack(2);
  const heroControl = new MathAttack();

  expect(heroControl.getAttack()).toBe(10);
  heroControl.getStoned();
  expect(heroControl.getAttack()).toBe(10);

  expect(hero.getAttack()).toBe(8);
  hero.getStoned();
  expect(hero.getAttack()).toBe(7.5);
});
