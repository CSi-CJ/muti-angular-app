export abstract class AbstractSubject {
  abstract display(): void;
}


export class Subject1 extends AbstractSubject {
  display(): void {
    console.log('display red subject');
  }
}

export class Subject2 extends AbstractSubject {
  display(): void {
    console.log('display blue subject');
  }
}

export class WindowsSubject {
  display(absSub: AbstractSubject): void {
    absSub.display();
  }
}





