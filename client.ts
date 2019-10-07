import {Orientation} from './orientations';

export class Client {

  bits = [];

  orientations = [];
  directions = [];

  constructor() {
    console.log('Hello');
  }

  generateBitsFromOrientation(orientations: Orientation[]) {
    const bits = [];
    for (const orientation of orientations) {
      bits.push(this.getBitFromOrientation(orientation));
    }
    this.bits = bits;
  }

  generateOrientationFromDirection(directions: Array<string>) {
    const orientations = [];

    for (const direction of directions) {
      orientations.push(this.getOrientation(direction));
    }

    this.orientations = orientations;
    return orientations;
  }

  getBitFromOrientation(orientation: Orientation) {
    if (orientation.get() === 'up' || orientation.get() === 'left') {
      return 0;
    } else {
      return 1;
    }
  }

  getOrientation(direction: string): Orientation {
    if (direction === '|') {
      if (this.randomBit() === 0) {
        return new Orientation('up');
      } else {
        return new Orientation('down');
      }
    } else {
      if (this.randomBit() === 0) {
        return new Orientation('right');
      } else {
        return new Orientation('left');
      }
    }
  }

  randomBit() {
    return Math.random() > 0.5 ? 1 : 0;
  }
}
