import { createStore } from 'redux';
import { CountReducer } from '../reducer/CountReducer.ts';

// Create the Redux store
export const store = createStore(CountReducer);
