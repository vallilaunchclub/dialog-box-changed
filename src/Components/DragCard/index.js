import React from 'react';
import Drag from '../../Assets/images/drag';
import './style.scss';


export default function DragCard(props) {
  return (
    <div className='drag-card'>
      <section className='drag-title'>
        <div>{Drag(20, 20)}</div>
        <div className='ml-2'>{props.title}</div>
        <div className='ml-2 type'>{props.type}</div>
      </section>
      <section className='drag-options'>
        <input type="checkbox" className='mr-2'/>
        <span className='mr-5'>Add View</span>
        <input type="checkbox" className='ml-5 mr-2'/>
        <span className='mr-2'>Required</span>
      </section>
    </div>
  )
}
