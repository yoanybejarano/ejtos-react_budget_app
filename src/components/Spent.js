import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Spent = () => {
    const { Spent, selectedCurrency } = useContext(AppContext);
    return (
        <div className='alert alert-info'>
            <span>Spent so far: {selectedCurrency.symbol}{Spent}</span>
        </div>
    );
};
export default Spent;