import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const SelectCurrency = () => {
    const { dispatch, currency } = useContext(AppContext);

    const selectCurrency = (symbol) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: symbol,
        });
    };

    const titleDropDown = () => {
        let title = "Currency ";
        switch(currency){
            case '$':
                title += '($ Dollar)';
                break;
            case '£':
                title += '(£ Pound)';
                break;
            case '€':
                title += '(€ Euro)';
                break;
            case '₹':
                title += '(₹ Ruppee)';
                break;
            default:
                break;
        }
        return title;
    }

    return (
        <div class="dropdown">
            <button class="btn btn-success dropdown-toggle alert" type="button" data-bs-toggle="dropdown" aria-expanded="false" 
                style={{'background-color': '#93e399'}}>
                {titleDropDown()}
            </button>
            <ul class="dropdown-menu" style={{'background-color': '#93e399'}}>
                <li><a class="dropdown-item" onClick={() => selectCurrency('$')} href="/#">$ Dollar</a></li>
                <li><a class="dropdown-item" onClick={() => selectCurrency('£')} href='/#'>£ Pound</a></li>
                <li><a class="dropdown-item" onClick={() => selectCurrency('€')} href='/#'>€ Euro</a></li>
                <li><a class="dropdown-item" onClick={() => selectCurrency('₹')} href='/#'>₹ Ruppee</a></li>
            </ul>
        </div>
    );
};
export default SelectCurrency;
