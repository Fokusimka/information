import {makeAutoObservable} from 'mobx';

export interface childrensArrayType {
  name: string
  age: string
}

interface parentType  {
  newName: string
  newAge: string
} 

export class childrensStore {
  items: childrensArrayType[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addChildren(newItem: childrensArrayType[]) {
    this.items = newItem;
  }

  deleteChildren(id: number) {
    this.items = this.items.filter((children, index) => index !== id)
  }

}

export class parentStore {
  name: string = ''
  age: string = ''

  constructor() {
    makeAutoObservable(this);
  }

  updateParent({newName, newAge}: parentType) {
    this.name = newName;
    this.age = newAge;
  }
}
