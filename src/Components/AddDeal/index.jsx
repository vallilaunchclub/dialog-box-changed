import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { getDealDropDown, createDeals } from '../../Constants/dealAction/actions';
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikController from "../FormikController";
import CurrencyTable from '../CurrencyTable';
import './style.scss';

function AddDeal(props) {
  const { categories, setClose, actionValues, dealDetails = {}, setActionValues, owners, companies, stages, type } = props;
  const [formik, setFormik] = useState();
  
  useEffect(() => {
    props.getDealDropDown(1);
  }, []);

  // useEffect(() => {
  //   props.getProductDetails(actionValues[0]);
  //   console.log("data changed");
  // }, [props.actionValues]);

  const initialValues = {
    name: dealDetails.name || '',
    dealValue: dealDetails.dealValue || '',
    owner: (dealDetails.owner && dealDetails.owner.id) || '',
    company: (dealDetails.company && dealDetails.company.id) || '',
    stage: (dealDetails.stage && dealDetails.stage.id) || '',
    closeDate: dealDetails.closeDate || ''
  }

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    dealValue: Yup.string().required("Required"),
    owner: Yup.string().required("Required"),
    company: Yup.string().required("Required"),
    stage: Yup.string().required("Required"),
    closeDate: Yup.string().required("Required"),
  })

  const findValueObject = (list, values, title) => list.find(listValue => Number(values[title]) === listValue.id);


  const onSubmit = values => {
    console.log("test", values);
    const newValue = {
      "type":"create",
      "data":{
         "orgId":1,
         "title":values.name,
         "value":values.dealValue,
         "pipelineId":1,
         "pipelineStageId": Number(values.stage),
         "expectedCloseDate":values.closeDate,
         "contactId": Number(values.owner),
         "ownerId": Number(values.owner),
         "companyId": Number(values.company),
      }
    }
    if(dealDetails.id) {
      props.updateProduct({ id:dealDetails.id, ...newValue, priceTags: dealDetails.priceTags}, () => {
        setClose(false);
        formik.resetForm();
        setActionValues([]);
      })
    } else {
      props.createDeals(newValue, type, () => {
        setClose(false);
        formik.resetForm()
      });
    }
  }

  console.log(">>>>>>>>>>>asdasdsa", owners, companies);
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
                type="number"
                label="Deal Value"
                name="dealValue"
                className="form-control"
              />
            <FormikController
              control="select"
              label="Owner"
              name="owner"
              options={owners}
              className="form-control"
            />
            <FormikController
              control="select"
              label="Company"
              name="company"
              options={companies}
              className="form-control"
            />
            <FormikController
              control="select"
              label="Stage"
              name="stage"
              options={stages}
              className="form-control"
            />
            <FormikController
              control="input"
              type="date"
              label="Expected Close Date"
              name="closeDate"
              className="form-control"
            />
            <button className="btn btn-primary my-3" type="submit" onClick={() => setFormik(formik)}>Save</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    owners: state.deal.ownerDropDown,
    companies: state.deal.companyDropDown,
    stages: state.deal.stageDropDown,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    createDeals: (data, type, cb) => dispatch(createDeals(data, type, cb)),
    getDealDropDown: (orgId) => dispatch(getDealDropDown(orgId)),
    // getProductDetails: (id) => dispatch(getProductDetails(id)),
    // updateProduct: (data, cb) => dispatch(updateProduct(data, cb))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddDeal);