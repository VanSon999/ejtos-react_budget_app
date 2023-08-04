import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, remaining, dispatch, currency} = useContext(AppContext);
    
    const MAX_BUDGET = 20000;
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}{
                <input
                    required='required'
                    type='number'
                    id='budget_input'
                    value={budget}
                    style={{ size: 10 }}
                    onChange={(event) => {
                        let val = 10*event.target.value - 9*budget;
                        if(val >= MAX_BUDGET){
                            alert(`Budget cannot exceed ${currency}${MAX_BUDGET}`);
                        }else if (val < (budget - remaining)){
                            alert("You cannot reduce the budget value lower than the spending");
                        }else{
                            dispatch({
                                type: 'SET_BUDGET',
                                payload: val,
                            });
                        }
                    }}>
                </input>
            }</span>
        </div>
    );
};
export default Budget;
