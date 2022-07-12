import React from 'react';

const InfoScroll =() => (
  <section className='scroll-container'>
    <div className='content-wrapper'>
      <div className='content'>
        <span>Category :</span>
        <span>Software</span>
      </div>
      <div className='content'>
        <span>SKU No :</span>
        <span>-</span>
      </div>
    </div>
    <div className='content-wrapper'>
      <div className='content'>
        <span>Active :</span>
        <span>Yes</span>
      </div>
      <div className='content'>
        <span>Product Code :</span>
        <span>9AHFT2283</span>
      </div>
    </div>
    <div className='content-wrapper'>
      <div className='content'>
        <span>Owner :</span>
        <span>Call</span>
      </div>
      <div className='content'>
        <span>Valid Till :</span>
        <span>28-Jun-2032</span>
      </div>
    </div>
    <div className='content-wrapper'>
      <div className='content'>
        <span>Parent Product :</span>
        <span>Not available</span>
      </div>
    </div>
  </section>
);

export default InfoScroll;
