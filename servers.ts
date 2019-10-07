import {Orientation} from './orientations';

export class Server {

  bits = [];
  orientations: Orientation[];
  directions;

  constructor(bits) {
    this.bits = bits;
  }

  randomOrientations(bits): Orientation[] {
    const orientations = [];
    for (const bit of bits) {
      orientations.push(this.generateOrientation(bit));
    }
    this.orientations = orientations;
    return orientations;
  }

  createDirections(orientations: Orientation[]) {
    const directions = [];
    for (const orientation of orientations) {
      directions.push(this.generateDirection(orientation));
    }
    this.directions = directions;
    return directions;
  }

  generateDirection(orientation: Orientation) {
    if (orientation.get() === 'up' || orientation.get() === 'down') {
      return '|';
    } else {
      return '-';
    }
  }

  generateOrientation(bit): Orientation {
    if (bit === 0) {
      if (this.randomBit() === 0) {
        return new Orientation('up');
      } else {
        return new Orientation('left');
      }
    } else {
      if (this.randomBit() === 0) {
        return new Orientation('down');
      } else {
        return new Orientation('right');
      }
    }
  }

  randomBit() {
    return Math.random() > 0.5 ? 1 : 0;
  }
}
