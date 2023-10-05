import {createContext, useContext} from 'react';
import {parentStore, childrensStore} from './informationStore';

export class RootStore {
  childrens: childrensStore;
  parent: parentStore;
  constructor() {
    this.childrens = new childrensStore();
    this.parent = new parentStore();
  }
}

export const rootStore = new RootStore();
export const StoreContext = createContext(rootStore);
export const StoreProvider = StoreContext.Provider;
export const useStore = () => useContext(StoreContext);
