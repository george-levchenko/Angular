import { createReducer, on } from '@ngrx/store';
import { getHeroes, setHero, clearHeroes, changeHeroById, decrement, increment, reset } from '@app/practice-store/store/store.actions';

export const initialStateCounter = 0;

export const counterReducer = createReducer(initialStateCounter,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, () => 0),
);

export type ClassType = 'mag' | 'warrior';
export interface HeroList {
  id: number;
  name: string;
  type: ClassType;
}

export const initialStateHeroes: HeroList[] = [];

export const heroListDictionary: HeroList[] = [
  {id: 11, name: 'Sorcerer', type: 'mag'},
  {id: 12, name: 'Necromancer', type: 'mag'},
  {id: 13, name: 'Spellhowler', type: 'mag'},
  {id: 14, name: 'Spellsinger', type: 'mag'},
  {id: 15, name: 'Treasure hunter', type: 'warrior'},
  {id: 16, name: 'Hawkeye', type: 'warrior'},
  {id: 17, name: 'Spoiler', type: 'warrior'},
  {id: 18, name: 'Destroyer', type: 'warrior'}
];

export const heroReducer = createReducer(initialStateHeroes,
  on(getHeroes, state => ({...state, heroListDictionary})),
  on(setHero, (state, payload) => ([...state, payload])),
  on(changeHeroById, (state, payload) => ([...state, state.find(hero => hero.id === payload.id) payload])),
  on(clearHeroes, () => initialStateHeroes)
);
