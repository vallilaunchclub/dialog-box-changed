import React from 'react';

const InfoScroll =({details}) => {
  return (
  <section className='scroll-container'>
    <div className='content-wrapper'>
      <div className='content'>
        <span>Email :</span>
        <span>{details.emails && details.emails[0].value}</span>
      </div>
      <div className='content'>
        <span>Contact :</span>
        <span>{details.mobiles && details.mobiles[0].value}</span>
      </div>
    </div>
    <div className='content-wrapper'>
      <div className='content'>
        <span>Sales Owner :</span>
        <span>Kadin Lubin</span>
      </div>
      <div className='content'>
        <span>Deal :</span>
        <span>2 Open Deals</span>
      </div>
    </div>
    <div className='content-wrapper'>
      <div className='content'>
        <span>Source :</span>
        <span>{details.contactSource && details.contactSource.name}</span>
      </div>
      <div className='content'>
        <span>Campaign :</span>
        <span>Sydney Campaign</span>
      </div>
    </div>
    <div className='content-wrapper'>
      <div className='content'>
        <span>Subscription Status :</span>
        <span>Not available</span>
      </div>
      <div className='content'>
        <span>Lifecycle Status :</span>
        <span>{details.lifeCycleStage && details.lifeCycleStage.name}</span>
      </div>
    </div>
  </section>
)};

export default InfoScroll;
