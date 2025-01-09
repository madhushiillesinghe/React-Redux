import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ItemState {
    itemList: { id: string; name: string }[];
}

const initialState: ItemState = {
    itemList: [],
};

const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<{ id: string; name: string }>) => {
            state.itemList.push(action.payload);
        },
        updateItem: (state, action: PayloadAction<{ id: string; name: string }>) => {
            const index = state.itemList.findIndex((item) => item.id === action.payload.id);
            if (index !== -1) {
                state.itemList[index] = action.payload;
            }
        },
        deleteItem: (state, action: PayloadAction<string>) => {
            state.itemList = state.itemList.filter((item) => item.id !== action.payload);
        },
    },
});

export const { addItem, updateItem, deleteItem } = itemSlice.actions;
export default itemSlice.reducer;
