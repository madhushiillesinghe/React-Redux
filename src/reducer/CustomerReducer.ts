import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Customer {
    id: string; // Add unique ID for each customer
    name: string;
    email: string;
}

interface CustomerState {
    customerList: Customer[];
}

const initialState: CustomerState = {
    customerList: [],
};

const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        addCustomer: (state, action: PayloadAction<Customer>) => {
            state.customerList.push(action.payload);
        },
        updateCustomer: (state, action: PayloadAction<Customer>) => {
            const index = state.customerList.findIndex(
                (customer) => customer.id === action.payload.id
            );
            if (index !== -1) {
                state.customerList[index] = action.payload;
            }
        },
        deleteCustomer: (state, action: PayloadAction<string>) => {
            state.customerList = state.customerList.filter(
                (customer) => customer.id !== action.payload
            );
        },
    },
});

export const { addCustomer, updateCustomer, deleteCustomer } = customerSlice.actions;

export default customerSlice.reducer;
