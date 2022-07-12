import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux';
import { getDeal, updateDealOrder, deleteDeals } from '../../Constants/dealAction/actions';
import AddDeals from '../AddDeal';
import Dialog from '../Dialog';
import Filter from '../../Assets/images/filter';
import Add from '../../Assets/images/add';
import List from '../../Assets/images/list';
import Kanban from '../../Assets/images/kanban';
import DropDown from '../../Assets/images/dropDown';
import Sort from '../../Assets/images/sort';
import Profile from '../../Assets/images/profile.jpeg'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import GroupButton from '../GroupButton';
import Table from '../Table';
import moment from 'moment';
import './style.scss';

const Deals = (props) => {
  const { dealData, getDeal, updateDealOrder, dealListData } = props;
  const { structure, rows }= dealListData;

  const [isClosed, setClose] = useState(false);
  const [column, setColumn] = useState(structure ? structure.fields : []);
  const [actionValues, setActionValues] = useState([]);
  const [type, setType] = useState('Kanban');
  const currentDeal = useRef();

  useEffect(() => {
    getDeal(type);
  }, [getDeal, type]);

  useEffect(() => {
    if(dealListData.structure) {
      setColumn(dealListData.structure.fields)
    }
  }, [dealListData]);

  const contacts = [1, 2];

  const handleClose = () => {
    setClose(!isClosed);
  }

  const handleClick = (value) => {
    setType(value)
    setActionValues([]);
  };

  const handleAction = (checked, data) => {
    console.log(checked, data);
    const newActionValues = [...actionValues];
    if(checked) {
      newActionValues.push(data.id);
      setActionValues(newActionValues);
    } else {
      setActionValues(newActionValues.filter(value => value !== data.id));
    }
  }

  const dealCard = (title, price, closeDate, index, columnIndex, deal) => {
    const expectedDate = moment(closeDate);
    const today = moment(new Date());
    return (
    <Draggable key={`${title}${index}${columnIndex}`} draggableId={`${title}${index}${columnIndex}`} index={index}>
      {(provided, snapshot) => (
        <div
          key={index}
          ref={provided.innerRef}
          className='deal-card'
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          onMouseOver={() => currentDeal.current = deal}
        >
          <div className='deal-card--content d-flex flex-column'>
            <span className='title'>{title}</span>
            <span className='price'>${price} •
            {
            expectedDate.diff(today, 'days') > 0 ?
            <span> Closing in {expectedDate.diff(today, 'days')} days</span>
            :
            <span> Closed {Math.abs(expectedDate.diff(today, 'days'))} days ago</span>
            }
            </span>
          </div>
          <div className='d-flex py-1'>
            {contacts.map(contact =>
              <div className='contact-pic mr-1'>
                <img src={Profile} alt='profile' />
              </div>
            )}
          </div>
        </div>)}
    </Draggable>
  )};

  const dealColumn = (id, title, price, deals, columnIndex) => (
    <Droppable droppableId={String(id)}>
      {(provided, snapshot) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className='deals-column'
        >
          <div className='deals-column--header w-100'>
            <div className='d-flex flex-column'>
              <span className='title'>{title}</span>
              <span>{price}</span>
            </div>
            <div>
              <span className="pr-1">{Sort(15, 15)}</span>
            </div>
          </div>
          <div>
            {deals.map((deal, index) => dealCard(deal.title, deal.value, deal.expectedCloseDate, index, columnIndex, deal))}
          </div>
          {provided.placeholder}
        </div>)}
    </Droppable>
  )

  const onDragEnd = (result, provided) => {
    // getting the source and destination object
    const { source, destination } = result;
    const newDeals = dealData.find(deal => deal.id === Number(destination.droppableId)).deals;
    newDeals.splice(destination.index, 0, currentDeal.current);
    const currentDeals = dealData.find(deal => deal.id === Number(source.droppableId)).deals;
    currentDeals.splice(source.index, 1);
    console.log("New deals with data", currentDeals);
    updateDealOrder({
      "orgId": 1,
      "from": {
        "pipelineStageId": Number(source.droppableId),
        "index": source.index
      },
      "to": {
        "pipelineStageId": Number(destination.droppableId),
        "index": destination.index
      },
      "deals": newDeals
    });
  }

  console.log(">>>>>>dealListData", props.dealListData);

  return (
    <section className='deals-container'>
      <section className="deals--header d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <div className="d-flex px-3">{Filter(20, 20)}</div>
          <div className="d-flex align-items-center c-pointer divider">
            <h6 className="m-0 font-semi-bold">General Pipeline</h6>
            <div className="d-flex pl-1">{DropDown(20, 20)}</div>
          </div>
          <div className="d-flex align-items-center c-pointer">
            <h6 className="m-0 font-semi-bold">All Deals</h6>
            <div className="d-flex pl-1">{DropDown(20, 20)}</div>
          </div>
        </div>
        <div className="pr-3 d-flex align-items-center">
          <div className='group-btn-wrapper pr-1'>
            <GroupButton 
              type="SVG"
              titleName={['Kanban', 'List']}
              titles={[Kanban(20, 20, '#272937'), List(20, 20, '#272937')]} 
              handleClick={handleClick}
              wrapperClass="height-35"
              height={35}
              buttonClass="px-2"
            />
          </div>
          <span className="btn btn-secondary mx-2 my-3">Import</span>
          {actionValues.length === 0 && <span className="btn btn-primary mx-2 my-3" onClick={handleClose}>
            <span className="pr-1">{Add(20, 20)}</span>
            <span>New Deal</span>
          </span>}
          {/* {actionValues.length === 1 && <span className="btn btn-primary mx-2 my-3" onClick={() => setClose(true)}>Update</span>} */}
          {actionValues.length > 0 && <span className="btn btn-primary mx-2 my-3" onClick={() => {setActionValues([]); props.deleteDeals(actionValues)}}>Delete</span>}
        </div>
      </section>
      {type === 'Kanban' ?
        <DragDropContext onDragEnd={onDragEnd}>
          <section className='deals-section'>
            {!!dealData.length && dealData.map((column, index) => dealColumn(column.id, column.name, '$ 18,900  •  3 Deals', column.deals, index))}
          </section>
        </DragDropContext>
        :
        <>
          {!!structure && 
          <Table 
            data={rows} 
            column={column} 
            {...props} 
            handleAction={handleAction}
            actionValues={actionValues} 
            parent='deals'
          />}
        </>
      }
      <Dialog header={"Add Deals"} handleClose={handleClose} isClosed={isClosed}>
        <AddDeals {...props} type={type} setClose={setClose} setActionValues={setActionValues} actionValues={actionValues} />
      </Dialog>
    </section>
  )
}

function mapStateToProps(state) {
  return {
    dealData: state.deal.dealData,
    dealListData: state.deal.dealListData,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getDeal: (type) => dispatch(getDeal(type)),
    updateDealOrder: (data) => dispatch(updateDealOrder(data)),
    // getProduct: () => dispatch(updateDeals()),
    deleteDeals: (ids) => dispatch(deleteDeals(ids)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Deals)
