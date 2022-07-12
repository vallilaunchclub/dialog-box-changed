import React from 'react';
import Add from '../../Assets/images/add';
import './style.scss';

export default function CurrencyTable() {
  return (
    <div>
      <div className='w-100 product-price-container'>
        <div className='header'>
          <span>Currency</span>
          <span>Currency</span>
        </div>
        <div className='currency'>
          <span>USD</span>
          <span>$99</span>
        </div>
        <div className='currency'>
          <span>INR</span>
          <span>$199</span>
        </div>
        <div className='add-price'>
          <span className='d-flex align-items-center'>
            <span className='pr-1'>{Add(15, 15, '#33BC7E')}</span> 
            Add Price
          </span>
        </div>
      </div>
    </div>
  )
}
