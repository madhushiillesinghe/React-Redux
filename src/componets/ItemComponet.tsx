import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/Store.ts'; // Access RootState from store.ts

const ItemComponent = () => {
    const [itemName, setItemName] = useState('');
    const dispatch = useDispatch();
    const items = useSelector((state: RootState) => state.item.itemList); // Adjust state path accordingly

    const addItem = () => {
        if (itemName) {
            dispatch({ type: 'ADD_ITEM', payload: itemName }); // Use the correct action type
            setItemName('');
        }
    };

    return (
        <div>
            <h2>Item Management</h2>
            <input
                type="text"
                placeholder="Enter Item Name"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
            />
            <button onClick={addItem}>Add Item</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default ItemComponent;
