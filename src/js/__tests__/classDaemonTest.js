import Daemon from '../classDaemon';

test('create daemon', () => {
  const heroDaemon = new Daemon(1);

  expect(heroDaemon).toEqual({
    distance: 1,
    condition: 'normal',
    attack: 10,
    type: 'Daemon',
  });
});
