import { createAction, props } from '@ngrx/store';
import { HeroList } from '@app/practice-store/store/store.reducer';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');

export const getHeroes = createAction('[Hero Component] Load Heroes list');
export const clearHeroes = createAction('[Hero Component] Clear Heroes list');
export const setHero = createAction('[Hero Component] Set new Hero', props<HeroList>());
export const changeHeroById = createAction('[Hero Component] Change Hero by ID', props<HeroList>());
