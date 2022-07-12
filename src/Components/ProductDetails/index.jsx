import React from 'react';
import BreadCrumb from '../BreadCrumb';
import InfoScroll from './infoScroll';
import TimelineContainer from './timelineContainer';
import './style.scss';

const ProductDetails = (props) => {
  const crumData = [
    { title: 'All Products', route: '/products' },
    { title: 'Support Desk' }
  ]
  return(
    <>
      <section className="contact-details">
        <section className="contact-details--header pt-3">
          <BreadCrumb crumData={crumData} {...props}/>
        </section>
        <InfoScroll />
      </section>
      <section className='d-flex time-container'>
        <TimelineContainer />
      </section>
    </>
  );
}

export default ProductDetails;
