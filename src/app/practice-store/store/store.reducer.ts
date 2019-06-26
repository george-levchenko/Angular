import { createReducer, on } from '@ngrx/store';
import { getHeroes, setHero, clearHeroes, changeHeroById } from '@app/practice-store/store/store.actions';

export const initialStateCounter = 0;

export const counterReducer = createReducer(initialStateCounter,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, state => 0),
);

// export const initialState = {};
//
// export const heroReducer = createReducer(initialState,
//   on(getHeroes, state => state),
//   // on(setHero, state => {...state, payload}),
//   on(clearHeroes, state => initialState),
//   on(changeHeroById, state => )
// );
