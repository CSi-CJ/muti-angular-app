export class Agent {
  myStar: Star;
  myFans: Fans;
  myCompany: Company;

  setStar(star: Star) {
    this.myStar = star;
  }
  setFans(fans: Fans){
    this.myFans = fans;
  }
  setCompany(company: Company){
    this.myCompany = company;
  }

  meeting(): void {
    console.log(`召集${this.myFans.getName()}开会`);
  }

  business(): void {
    console.log(`在${this.myCompany.getName()}接待明星${this.myStar.getName()}`);
  }
}

export class Star {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}

export class Fans {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}

export class Company {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}
