export default class MathAttack {
  constructor(distance = 1) {
    this.distance = distance;
    this.condition = 'normal';
    this.attack = 10;
  }

  getStoned() {
    this.condition = 'stoned';
  }

  getAttack() {
    if (this.condition === 'normal' && this.distance > 1) {
      this.attack -= this.distance * this.attack * 0.1;
    }
    if (this.condition === 'stoned') {
      this.attack -= Math.log2(this.distance) * 5 * 0.1;
    }
    return this.attack;
  }
}
