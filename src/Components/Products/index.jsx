import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { getProduct, deleteProduct } from '../../Constants/productAction/actions';
import Table from '../Table';
import Dialog from '../Dialog';
import AddProduct from '../AddProduct';
import Custom from '../../Assets/images/custom';
import Filter from '../../Assets/images/filter';
import Add from '../../Assets/images/add';
import DropDown from '../../Assets/images/dropDown';
import './style.scss';

const Products = (props) => {
  const { rows, structure } = props.productData;
  const [ column, setColumn ] = useState(structure ? structure.fields : []);
  const [ isClosed, setClose ] = useState(false);
  const [ actionValues, setActionValues ] = useState([]);
  

  const handleColumnChange = (event, index) => {
    column[index].visible = event.target.checked;
    setColumn([...column]);
  }

  const handleClose = () => {
    setClose(!isClosed);
  }

  useEffect(() => {
    props.getProduct();
  }, []);

  useEffect(() => {
    if(props.productData.structure) {
      setColumn(props.productData.structure.fields)
    }
  }, [props.productData]);

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

  console.log(">>>>>>>>>>>actionValues", actionValues);

  return (  
  <div className="contacts">
    <section className="contacts--header d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <div className="d-flex px-3">{Filter(20, 20)}</div>
        <div className="d-flex align-items-center c-pointer">
          <h6 className="m-0 font-semi-bold">All Products</h6>
          <div className="d-flex pl-1">{DropDown(20, 20)}</div>
        </div>
      </div>
      <div className="pr-3">
        <span className="btn btn-secondary mx-2 my-3">Import Products</span>
        {actionValues.length === 0 && <span className="btn btn-primary mx-2 my-3" onClick={() => setClose(!isClosed)}>
          <span className="pr-1">{Add(20, 20)}</span>
          <span>Product</span>
        </span>}
        {actionValues.length === 1 && <span className="btn btn-primary mx-2 my-3" onClick={() => setClose(true)}>Update</span>}
        {actionValues.length > 0 && <span className="btn btn-primary mx-2 my-3" onClick={() => {setActionValues([]); props.deleteProduct(actionValues)}}>Delete</span>}
        <Dialog header={actionValues.length === 1 ? "Update Product" : "Add Product"} handleClose={handleClose} isClosed={isClosed}>
          <AddProduct {...props} setClose={setClose} setActionValues={setActionValues} actionValues={actionValues}/>
        </Dialog>
      </div>
    </section>
    <section className="contacts--dropdown">
      <span className="btn" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
        {Custom()}
      </span>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {column.map((columnData, index) => 
        <li 
          key={columnData.displayName} 
          className="c-pointer dropdown-menu--list"
          onClick={(e) => e.stopPropagation()}
        >
          <input
            id={columnData.displayName}
            type="checkbox"
            checked={!columnData.hidden} 
            onChange={(event) => handleColumnChange(event, index)}
          />
          <label htmlFor={columnData.displayName}>
            {columnData.displayName}
          </label>
        </li>
        )}
      </ul>
    </section>
    {/* <Table data={mockData.data} column={column} {...props} /> */}
    {!!structure && 
      <Table 
        data={rows} 
        column={column} 
        {...props} 
        handleAction={handleAction} 
        actionValues={actionValues} 
        parent='products' 
    />}
  </div>
)};

function mapStateToProps (state) {
  return {
    productData: state.product.productData,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getProduct: () => dispatch(getProduct()),
    deleteProduct: (ids) => dispatch(deleteProduct(ids)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products)
