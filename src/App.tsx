import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './store/Store.ts';
import { addCustomer, updateCustomer, deleteCustomer } from './reducer/CustomerReducer.ts';
import { addItem, updateItem, deleteItem } from './reducer/ItemReducer.ts';  // Adjust paths as needed

function App() {
    const dispatch = useDispatch<AppDispatch>();

    const customerList = useSelector((state: RootState) => state.customer.customerList);
    const itemList = useSelector((state: RootState) => state.item.itemList);

    const [customerFormData, setCustomerFormData] = useState({ id: '', name: '', email: '' });
    const [itemFormData, setItemFormData] = useState({ id: '', name: '', description: '' });

    const [isEditingCustomer, setIsEditingCustomer] = useState(false);
    const [isEditingItem, setIsEditingItem] = useState(false);

    // Customer Management
    const handleCustomerInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setCustomerFormData({ ...customerFormData, [e.target.name]: e.target.value });

    const handleAddCustomer = () => {
        if (customerFormData.name && customerFormData.email) {
            dispatch(addCustomer({
                ...customerFormData,
                id: new Date().toISOString(), // Unique ID for the new customer
            }));
            setCustomerFormData({ id: '', name: '', email: '' });
        }
    };

    const handleEditCustomer = (customer: { id: string; name: string; email: string }) => {
        setCustomerFormData(customer);
        setIsEditingCustomer(true);
    };

    const handleUpdateCustomer = () => {
        if (customerFormData.name && customerFormData.email) {
            dispatch(updateCustomer(customerFormData));
            setCustomerFormData({ id: '', name: '', email: '' });
            setIsEditingCustomer(false);
        }
    };

    const handleDeleteCustomer = (id: string) => {
        dispatch(deleteCustomer(id));
    };

    // Item Management
    const handleItemInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setItemFormData({ ...itemFormData, [e.target.name]: e.target.value });

    const handleAddItem = () => {
        if (itemFormData.name && itemFormData.description) {
            dispatch(addItem({
                ...itemFormData,
                id: new Date().toISOString(), // Unique ID for the new item
            }));
            setItemFormData({ id: '', name: '', description: '' });
        }
    };

    const handleEditItem = (item: { id: string; name: string; description: string }) => {
        setItemFormData(item);
        setIsEditingItem(true);
    };

    const handleUpdateItem = () => {
        if (itemFormData.name && itemFormData.description) {
            dispatch(updateItem(itemFormData));
            setItemFormData({ id: '', name: '', description: '' });
            setIsEditingItem(false);
        }
    };

    const handleDeleteItem = (id: string) => {
        dispatch(deleteItem(id));
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Customer and Item Management</h1>

            {/* Customer Section */}
            <div style={{ marginBottom: '40px' }}>
                <h2>Customer Management</h2>
                <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Customer Name"
                        value={customerFormData.name}
                        onChange={handleCustomerInputChange}
                        style={{
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            flex: 1,
                        }}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Customer Email"
                        value={customerFormData.email}
                        onChange={handleCustomerInputChange}
                        style={{
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            flex: 1,
                        }}
                    />
                    {isEditingCustomer ? (
                        <button
                            onClick={handleUpdateCustomer}
                            style={{
                                padding: '10px 20px',
                                border: 'none',
                                borderRadius: '5px',
                                backgroundColor: '#28a745',
                                color: '#fff',
                                cursor: 'pointer',
                            }}
                        >
                            Update Customer
                        </button>
                    ) : (
                        <button
                            onClick={handleAddCustomer}
                            style={{
                                padding: '10px 20px',
                                border: 'none',
                                borderRadius: '5px',
                                backgroundColor: '#007bff',
                                color: '#fff',
                                cursor: 'pointer',
                            }}
                        >
                            Add Customer
                        </button>
                    )}
                </div>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                    <tr style={{ backgroundColor: '#f5f5f5' }}>
                        <th style={{ border: '1px solid #ddd', padding: '10px' }}>Name</th>
                        <th style={{ border: '1px solid #ddd', padding: '10px' }}>Email</th>
                        <th style={{ border: '1px solid #ddd', padding: '10px' }}>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {customerList.map((customer) => (
                        <tr key={customer.id}>
                            <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                                {customer.name}
                            </td>
                            <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                                {customer.email}
                            </td>
                            <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                                <button
                                    onClick={() => handleEditCustomer(customer)}
                                    style={{
                                        marginRight: '10px',
                                        padding: '5px 10px',
                                        backgroundColor: '#ffc107',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDeleteCustomer(customer.id)}
                                    style={{
                                        padding: '5px 10px',
                                        backgroundColor: '#dc3545',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* Item Section */}
            <div>
                <h2>Item Management</h2>
                <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Item Name"
                        value={itemFormData.name}
                        onChange={handleItemInputChange}
                        style={{
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            flex: 1,
                        }}
                    />
                    <input
                        type="text"
                        name="description"
                        placeholder="Item Description"
                        value={itemFormData.description}
                        onChange={handleItemInputChange}
                        style={{
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            flex: 1,
                        }}
                    />
                    {isEditingItem ? (
                        <button
                            onClick={handleUpdateItem}
                            style={{
                                padding: '10px 20px',
                                border: 'none',
                                borderRadius: '5px',
                                backgroundColor: '#28a745',
                                color: '#fff',
                                cursor: 'pointer',
                            }}
                        >
                            Update Item
                        </button>
                    ) : (
                        <button
                            onClick={handleAddItem}
                            style={{
                                padding: '10px 20px',
                                border: 'none',
                                borderRadius: '5px',
                                backgroundColor: '#007bff',
                                color: '#fff',
                                cursor: 'pointer',
                            }}
                        >
                            Add Item
                        </button>
                    )}
                </div>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                    <tr style={{ backgroundColor: '#f5f5f5' }}>
                        <th style={{ border: '1px solid #ddd', padding: '10px' }}>Name</th>
                        <th style={{ border: '1px solid #ddd', padding: '10px' }}>Description</th>
                        <th style={{ border: '1px solid #ddd', padding: '10px' }}>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {itemList.map((item) => (
                        <tr key={item.id}>
                            <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                                {item.name}
                            </td>
                            <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                                {item.description}
                            </td>
                            <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                                <button
                                    onClick={() => handleEditItem(item)}
                                    style={{
                                        marginRight: '10px',
                                        padding: '5px 10px',
                                        backgroundColor: '#ffc107',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDeleteItem(item.id)}
                                    style={{
                                        padding: '5px 10px',
                                        backgroundColor: '#dc3545',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default App;
