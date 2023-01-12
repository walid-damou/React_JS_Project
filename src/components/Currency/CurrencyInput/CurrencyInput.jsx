import React from 'react'
import PropTypes from 'prop-types';
import './CurrencyInput.css';



function CurrencyInput(props) {
  return (
    <div className='group'>
        <input type="text" style={{background:"none",paddingLeft:"25px"}} value={props.amount} onChange={e=>props.onAmountChange(e.target.value)} />
        <select className='custom-select custom-select-currency' value={props.currency} onChange={e=>props.onCurrencyChange(e.target.value)} >
            {props.currencies.map((currency => (
                <option value={currency}>{currency}</option>
            )))}
        </select>
    </div>
  )
}
CurrencyInput.propTypes= {
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    currencies: PropTypes.array,
    onAmountChange: PropTypes.func,
    onCurrencyChange: PropTypes.func,
};

export default CurrencyInput