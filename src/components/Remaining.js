import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Remaining = () => {    
    const { Remaining, selectedCurrency } = useContext(AppContext);
    return (
        <div className='alert alert-success'>
            <span>Remaining: {selectedCurrency.symbol}{Remaining}</span>
        </div>
    );
};
export default Remaining;