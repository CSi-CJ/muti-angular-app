/***
 * 使用继承复用的方式实现合成复用法则
 */

export class Car {
  constructor() {
  }
  move(): void {
    console.log('汽车之父');
  }
}

export class GasolineCar extends Car {
  move() {
    console.log('燃油汽车驱动');
  }
}

export class ElectricCar extends Car {
  move() {
    console.log('电动汽车驱动');
  }
}

export class WhiteGasolineCar extends GasolineCar{
  move() {
    console.log('白色的燃油汽车');
  }
}
export class BlackGasolineCar extends GasolineCar{
  move() {
    console.log('黑色的燃油汽车');
  }
}
export class RedGasolineCar extends GasolineCar{
  move() {
    console.log('红色的燃油汽车');
  }
}

export class WhiteElectricCar extends ElectricCar{
  move() {
    console.log('白色的电动汽车');
  }
}
export class BlackElectricCar extends ElectricCar{
  move() {
    console.log('黑色的电动汽车');
  }
}
export class RedElectricCar extends ElectricCar{
  move() {
    console.log('红色的电动汽车');
  }
}

/***
 * 使用组合复用的方式实现合成复用法则
 */

export class AirPlane {
  color: Color;

  constructor(color: Color) {
    this.color = color;
  }
  fly(): void{
    console.log(`${this.color.show()}的飞机起飞`);
  }
}
export interface Color {
  show(): string;
}
export class White implements Color{
  show(): string {
    return '白色';
  }
}
export class Black implements Color{
  show(): string {
    return '黑色';
  }
}
export class Red implements Color{
  show(): string {
    return '红色';
  }
}

export class GasolineAirPlane extends AirPlane{
  fly() {
    super.fly();
  }
}

export class ElectricAirPlane extends AirPlane{
  fly() {
    super.fly();
  }
}
