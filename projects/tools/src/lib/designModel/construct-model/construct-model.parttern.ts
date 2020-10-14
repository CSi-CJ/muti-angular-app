class Car {
  constructor(
    public engine: string,
    public chassis: string,
    public body: string
  ){}
}

export class CarBuilder {
  //非空断言（it means this filed can not equals null | undefined）
  engine!: string;
  chassis!: string;
  body!: string;

  addChassis(chassis: string){
    this.chassis = chassis;
    return this;
  }

  addEngine(engine: string){
    this.engine = engine;
    return this;
  }
  addBody(body: string){
    this.body = body;
    return this;
  }

  build(){
    return new Car(this.engine, this.chassis, this.body);
  }
}

