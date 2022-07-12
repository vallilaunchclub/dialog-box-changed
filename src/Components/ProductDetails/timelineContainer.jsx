import React, {useState} from 'react';
import GroupButton from '../GroupButton';
import Table from '../Table1';

const mockData = {
  "totalRecords": 2,
  "column": [
    { col: 1, columnTitle: 'Product Name', field: 'productName', visible: true},
    { col: 2, columnTitle: 'Category', field: 'category', visible: true},
    { col: 3, columnTitle: 'Owner', field: 'owner', visible: true},
    { col: 4, columnTitle: 'Create At', field: 'createAt', visible: true},
    { col: 5, columnTitle: 'Created By', field: 'createdBy', visible: true},
  ],
  "data": [
    {
      "productName": "CRM",
      "category": "Software",
      "owner": "Dinesh Kumar",
      "createAt": "12 Jan 2021 03.04 PM",
      "createdBy": "Vignesh",
    },
    {
      "productName": "Support Desk",
      "category": "Software",
      "owner": "Dinesh Kumar",
      "createAt": "12 Jan 2021 03.04 PM",
      "createdBy": "Vignesh",
    },
  ]
};

const TimelineContainer =(props) => {
  const [ column, setColumn ] = useState(mockData.column);
  const handleClick = (value) => {
    console.log(value);
  };
  return (
  <section className='timeline-container m-2'>
    <div className='group-btn-wrapper pt-2 px-1'>
      <GroupButton titles={['Prices', 'Deals', 'Variations']} handleClick={handleClick}/>
    </div>

    <section>
        <Table data={mockData.data} column={column} {...props} />
      </section>
  </section>
)};

export default TimelineContainer;
