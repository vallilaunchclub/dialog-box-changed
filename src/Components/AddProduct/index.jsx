import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { createProduct, getProductDropDown, updateProduct, getProductDetails } from '../../Constants/productAction/actions';
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikController from "../FormikController";
import CurrencyTable from '../CurrencyTable';
import './style.scss';

function AddProduct(props) {
  const { categories, setClose, actionValues, productDetails, setActionValues } = props;
  const [formik, setFormik] = useState();
  
  useEffect(() => {
    props.getProductDropDown(1);
  }, []);

  useEffect(() => {
    props.getProductDetails(actionValues[0]);
    console.log("data changed");
  }, [props.actionValues]);

  const initialValues = {
    name: productDetails.name || '',
    description: productDetails.description || '',
    category: (productDetails.category && productDetails.category.id) || '',
    productCode: productDetails.productCode || '',
    skuNumber: productDetails.skuNumber || ''
  }

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    category: Yup.string().required("Required"),
    productCode: Yup.string().required("Required"),
    skuNumber: Yup.string().required("Required"),
  })

  const findValueObject = (list, values, title) => list.find(listValue => Number(values[title]) === listValue.id);


  const onSubmit = values => {
    const newValue = {
      ...values,
      category: findValueObject(categories, values, 'category'),
      "orgId": 1,
      "priceTags": [{
        "price": 750,
        "currency": {
          "id" : 1,
          "name": "INR"
        },
        "productId": 1
      }, {
        "price": 10,
        "currency": {
          "id": 2,
          "name": "US"
        },
        "productId": 1
      }]
    }
    if(productDetails.id) {
      props.updateProduct({ id:productDetails.id, ...newValue, priceTags: productDetails.priceTags}, () => {
        setClose(false);
        formik.resetForm();
        setActionValues([]);
      })
    } else {
      props.createProduct(newValue, () => {
        setClose(false);
        formik.resetForm()
      });
    }
  }

  return (
    <div className="add-contact">
      <Formik
        initialValues={initialValues}
        enableReinitialize
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {formik => (
          <Form>
            <div className="row">
              <div className="col-12">
                <FormikController
                  control="input"
                  type="text"
                  label="Name"
                  name="name"
                  className="form-control"
                />
              </div>
            </div>
            <FormikController
                control="input"
                type="text"
                label="Description"
                name="description"
                className="form-control"
              />
            <FormikController
              control="select"
              label="Category"
              name="category"
              options={categories}
              className="form-control"
            />
            <div className="row">
              <div className="col-12">
                <CurrencyTable />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-12">
                <FormikController
                  control="input"
                  type="text"
                  label="Product Code"
                  name="productCode"
                  className="form-control"
                />
              </div>
              <div className="col-lg-6 col-12">
                <FormikController
                  control="input"
                  type="text"
                  label="SKU Number"
                  name="skuNumber"
                  className="form-control"
                />
              </div>
            </div>
            <button className="btn btn-primary my-3" type="submit" onClick={() => setFormik(formik)}>Save</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    categories: state.product.category,
    productDetails: state.product.productDetails,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    createProduct: (data, cb) => dispatch(createProduct(data, cb)),
    getProductDropDown: (orgId) => dispatch(getProductDropDown(orgId)),
    getProductDetails: (id) => dispatch(getProductDetails(id)),
    updateProduct: (data, cb) => dispatch(updateProduct(data, cb))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProduct);