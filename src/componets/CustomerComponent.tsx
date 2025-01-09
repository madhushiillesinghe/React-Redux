import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/Store.ts';  // Access RootState from store.ts

const CustomerComponent = () => {
    const [customerName, setCustomerName] = useState('');
    const dispatch = useDispatch();
    const customers = useSelector((state: RootState) => state.customer.customerList);

    const addCustomer = () => {
        if (customerName) {
            dispatch({ type: 'ADD_CUSTOMER', payload: customerName });
            setCustomerName('');
        }
    };

    return (
        <div>
            <h2>Customer Management</h2>
            <input
                type="text"
                placeholder="Enter Customer Name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
            />
            <button onClick={addCustomer}>Add Customer</button>
            <ul>
                {customers.map((customer, index) => (
                    <li key={index}>{customer}</li>
                ))}
            </ul>
        </div>
    );
};

export default CustomerComponent;
