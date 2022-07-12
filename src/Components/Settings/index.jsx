import React, { useEffect } from 'react';
import GroupButton from '../GroupButton';
import DragCard from '../DragCard';
import { connect } from 'react-redux';
import { getContactDetails } from '../../Constants/contactAction/actions';
import Edit from '../../Assets/images/edit';
import Add from '../../Assets/images/add';
import './style.scss';

const Settings = (props) => {

  const data = [
    {title: 'First Name', type: 'Text'},
    {title: 'Last Name', type: 'Text'},
    {title: 'Email', type: 'Text'},
    {title: 'Mobile Number', type: 'Text'},
    {title: 'Lifecycle Status', type: 'Multiselect'},
    {title: 'Sales Owner', type: 'Dropdown'},
    {title: 'Visible To', type: 'Owners'},
  ]

  const { contactDetails: details } = props;

  // useEffect(() => {
  //   props.getContactDetails(props.match.params.id);
  // }, [])

  const handleClick = (value) => {
    console.log(value);
  };

  console.log("test", details);

  return(
    <>
      <section className="setting-details">
        <section className="setting-details--header">
          <div className='d-flex'>
            <div className='pr-2 settings'>Settings</div>
            <div className='pr-2'>&gt;</div>
            <div className='pr-2 data-field'>Data Fields</div>
          </div>
          <div className='align-items-center d-flex'>
            <span className="btn btn-secondary mx-2 my-3 px-3">
              <span className="pr-1">{Edit(20, 20, '#33BC7E')}</span>
              <span>Rename Modules</span>
            </span>
          </div>
        </section>
      </section>
      <section className="setting-content-wrapper">
        <div className='d-flex align-items-center'>
          <div className='group-btn-wrapper pr-1'>
            <GroupButton height={40} titles={['Contacts', 'Companies', 'Leads']} handleClick={handleClick}/>
          </div>
          <div className='align-items-center d-flex'>
            <span className="btn btn-secondary mx-2 px-3 py-2">
              <span className="pr-1">{Add(20, 20, '#33BC7E')}</span>
              <span>System Fields</span>
            </span>
          </div>
          <div className='align-items-center d-flex'>
            <span className="btn btn-secondary mx-2 px-3 py-2">
              <span className="pr-1">{Add(20, 20, '#33BC7E')}</span>
              <span>Custom Fields</span>
            </span>
          </div>
        </div>
        <div>
          {data.map(value => <DragCard title={value.title} type={value.type}/>)}
        </div>
      </section>
    </>
  );
}

function mapStateToProps (state) {
  return {
    contactDetails: state.contact.contactDetails,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getContactDetails: (id) => dispatch(getContactDetails(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
