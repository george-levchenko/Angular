import { createAction } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset')

export const getHeroes = createAction('[Hero Component] Load Heroes list');
export const setHero = createAction('[Hero Component] Set new Hero');
export const clearHeroes = createAction('[Hero Component] Clear Heroes list');
export const changeHeroById = createAction('[Hero Component] Change Hero by ID');

