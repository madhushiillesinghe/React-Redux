import { configureStore } from '@reduxjs/toolkit';
import customerReducer from '../reducer/CustomerReducer.ts';
import itemReducer from '../reducer/ItemReducer.ts';

const store = configureStore({
    reducer: {
        customer: customerReducer,
        item: itemReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
