import React, { useEffect, useState } from "react"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import FormikController from "../FormikController"
import './style.scss';
import { connect } from 'react-redux';
import { getContactDropDown, createContact, getContactDetails, updateContact } from '../../Constants/contactAction/actions';

function AddContact(props) {
  const { companies, stages, sources, setClose, actionValues, contactDetails, setActionValues } = props;
  const [formik, setFormik] = useState();
  console.log("contactDetails>>", contactDetails);
  // const choices = [
  //   { key: "choice a", value: "choicea" },
  //   { key: "choice b", value: "choiceb" },
  // ]

  useEffect(() => {
    props.getContactDetails(actionValues[0]);
    console.log("data changed");
  }, [props.actionValues]);

  console.log("contactDetails>>>", contactDetails);
  const initialValues = {
    firstName: contactDetails.firstName || '',
    lastName: contactDetails.lastName || '',
    company: (contactDetails.company && contactDetails.company.id) || '',
    emails: (contactDetails.emails && contactDetails.emails[0].value) || '',
    mobiles: (contactDetails.mobiles && contactDetails.mobiles[0].value) || '',
    // owner: contactDetails. || '',
    lifeCycleStage: (contactDetails.lifeCycleStage && contactDetails.lifeCycleStage.id) || '',
    source: (contactDetails.contactSource && contactDetails.contactSource.id) || '',
  }

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    company: Yup.string().required("Required"),
    emails: Yup.string().required("Required"),
    mobiles: Yup.string().required("Required"),
    // owner: Yup.string().required("Required"),
    lifeCycleStage: Yup.string().required("Required"),
    source: Yup.string().required("Required"),
  })

  const findValueObject = (list, values, title) => list.find(listValue => Number(values[title]) === listValue.id);

  const onSubmit = values => {
    const contact = {
      ...values,
      ...{
        company: findValueObject(companies, values, 'company'),
        lifeCycleStage: findValueObject(stages, values, 'lifeCycleStage'),
        contactSource: findValueObject(sources, values, 'source'),
        mobiles: [{
          "type": "Personal",
          "value": values.mobiles
        }],
        emails: [      {
          "type": "work",
          "value": values.emails
        }]
      }
    }
    delete contact.source;
    if(contactDetails.id) {
      props.updateContact({ id:contactDetails.id, ...contact}, () => {
        setClose(false);
        formik.resetForm();
        setActionValues([]);
      })
    } else {
      props.createContact(contact, () => {
        setClose(false);
        formik.resetForm();
      })
    }    
  }

  useEffect(() => {
    props.getContactDropDown(1);
  }, []);

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
              <div className="col-lg-6 col-12">
                <FormikController
                  control="input"
                  type="text"
                  label="First Name"
                  name="firstName"
                  className="form-control"
                />
              </div>
              <div className="col-lg-6 col-12">
                <FormikController
                  control="input"
                  type="text"
                  label="Last Name"
                  name="lastName"
                  className="form-control"
                />
              </div>
            </div>
            <FormikController
                control="select"
                label="Company"
                name="company"
                options={companies}
                className="form-control"
            />
            <FormikController
              control="input"
              type="email"
              label="Email"
              name="emails"
              className="form-control"
            />
            <FormikController
              control="input"
              type="text"
              label="Mobile"
              name="mobiles"
              className="form-control"
            />
            {/* <FormikController
              control="select"
              label="Owner"
              name="owner"
              options={choices}
              className="form-control"
            /> */}
            <div className="row">
              <div className="col-lg-6 col-12">
                <FormikController
                  control="select"
                  label="Lifecycle Stage"
                  name="lifeCycleStage"
                  options={stages}
                  className="form-control"
                />
              </div>
              <div className="col-lg-6 col-12">
                <FormikController
                  control="select"
                  label="Source"
                  name="source"
                  options={sources}
                  className="form-control"
                />
              </div>
            </div>
            <button className="btn btn-primary my-3" type="submit" onClick={() => setFormik(formik)}>Save</button>
            {/* <button className="btn btn-primary mx-3 my-3" type="submit" onClick={() => setFormik(formik)}>Save & New</button> */}
          </Form>
        )}
      </Formik>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    stages: state.contact.stages,
    sources: state.contact.sources,
    companies: state.contact.companies,
    contactDetails: state.contact.contactDetails,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getContactDropDown: (orgId) => dispatch(getContactDropDown(orgId)),
    createContact: (data, cb) => dispatch(createContact(data, cb)),
    getContactDetails: (id) => dispatch(getContactDetails(id)),
    updateContact: (data, cb) => dispatch(updateContact(data, cb))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddContact)