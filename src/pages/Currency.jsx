import React from 'react';
import CurrencyInput from '../components/Currency/CurrencyInput/CurrencyInput';
import { useState, useEffect } from 'react';

function Currency() {
    const [isOpen, setIsOpen] = useState(false);
    const [amount1, setAmount1]= useState(1);
    const [amount2, setAmount2]= useState(1);
    const [currency1, setCurrency1]= useState('USD');
    const [currency2, setCurrency2]= useState('QAR');
    const [rates, setRates] = useState([]);
    useEffect(()=>{
        fetch('https://openexchangerates.org/api/latest.json?app_id=085660e118ee45b38c503e1e3c7453ab')
        .then(response => response.json())
        .then(data=>{
            setRates(data.rates);
        })
        
    },[]);
    useEffect(()=>{
        if(!!rates) {
            handleAmount1Change(1);
        }
    },[rates])
    function handleAmount1Change(amount1) {
        setAmount2((amount1* rates[currency2]/ rates[currency1]).toFixed(2))
        setAmount1(amount1);

    }
    function handleCurrency1Change(currency1) {
        setAmount2((amount1* rates[currency2]/ rates[currency1]).toFixed(2))
        setCurrency1(currency1);

    }
    function handleAmount2Change(amount2) {
        setAmount1((amount2* rates[currency1]/ rates[currency2]).toFixed(2))
        setAmount2(amount2);

    }
    function handleCurrency2Change(currency2) {
        setAmount1((amount2* rates[currency1]/ rates[currency2]).toFixed(2))
        setCurrency2(currency2);

    }
  return (
    <>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
{isOpen && (
  <div className="fixed bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center">
    <div className="fixed inset-0 transition-opacity">
      <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>

    <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
      <div className="py-6">
        <h1 className="text-darkGrey font-bold text-4xl text-center py-6">Currency Change</h1>
        <CurrencyInput onAmountChange={handleAmount1Change} onCurrencyChange={handleCurrency1Change} currencies={Object.keys(rates)} amount={amount1} currency={currency1} />
        <CurrencyInput onAmountChange={handleAmount2Change} onCurrencyChange={handleCurrency2Change} currencies={Object.keys(rates)} amount={amount2} currency={currency2} />
      </div>
      <div className="bg-gray-50 p-4 sm:px-6">
        <div className="text-right">
          <button className="text-red-600" onClick={() => setIsOpen(false)}>
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
)}
    </>
  )
}

export default Currency