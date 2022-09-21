import MathAttack from './math-log-trig';

export default class Daemon extends MathAttack {
  constructor(distance) {
    super(distance);
    this.type = 'Daemon';
  }
}
