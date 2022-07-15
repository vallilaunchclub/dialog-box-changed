import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  getContact,
  deleteContact,
} from "../../Constants/contactAction/actions";
import Table from "../Table";
import Dialog from "../Dialog";
import AddContact from "../AddContact";
import Custom from "../../Assets/images/custom";
import Filter from "../../Assets/images/filter";
import Add from "../../Assets/images/add";
import DropDown from "../../Assets/images/dropDown";
import "./style.scss";
import ImportContact from "../Import Contact";
import DialogBox from "./../DialogBox/index";

const Contacts = (props) => {
  const { rows, structure } = props.contactData;
  const [column, setColumn] = useState(structure ? structure.fields : []);
  const [isClosed, setClose] = useState(false);
  const [close, isClose] = useState(false);
  const [actionValues, setActionValues] = useState([]);

  useEffect(() => {
    props.getContact();
  }, []);

  useEffect(() => {
    if (props.contactData.structure) {
      setColumn(props.contactData.structure.fields);
    }
  }, [props.contactData]);

  const handleColumnChange = (event, index) => {
    column[index].hidden = !event.target.checked;

    setColumn([...column]);
  };

  const handleClose = () => {
    setClose(!isClosed);
  };
  const eventClose = () => {
    isClose(!close);
  };

  const handleAction = (checked, data) => {
    console.log(checked, data);
    const newActionValues = [...actionValues];
    if (checked) {
      newActionValues.push(data.id);
      setActionValues(newActionValues);
    } else {
      setActionValues(newActionValues.filter((value) => value !== data.id));
    }
  };

  console.log(">>>>>>>>>>>actionValues", actionValues);

  return (
    <div className="contacts">
      <section className="contacts--header d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <div className="d-flex px-3">{Filter(20, 20)}</div>
          <div className="d-flex align-items-center c-pointer">
            <h6 className="m-0 font-semi-bold">All Contacts</h6>
            <div className="d-flex pl-1">{DropDown(20, 20)}</div>
          </div>
        </div>
        <div className="pr-3">
          <span
            className="btn btn-secondary mx-2 my-3"
            onClick={() => isClose(!close)}
          >
            Import Contacts
          </span>
          {actionValues.length === 0 && (
            <span
              className="btn btn-primary mx-2 my-3"
              onClick={() => setClose(!isClosed)}
            >
              <span className="pr-1">{Add(20, 20)}</span>
              <span>Contact</span>
            </span>
          )}
          {actionValues.length === 1 && (
            <span
              className="btn btn-primary mx-2 my-3"
              onClick={() => setClose(true)}
            >
              Update
            </span>
          )}
          {actionValues.length > 0 && (
            <span
              className="btn btn-primary mx-2 my-3"
              onClick={() => {
                setActionValues([]);
                props.deleteContact(actionValues);
              }}
            >
              Delete
            </span>
          )}
          <Dialog
            header={
              actionValues.length === 1 ? "Update Contact" : "Add Contact"
            }
            handleClose={handleClose}
            isClosed={isClosed}
          >
            <AddContact
              {...props}
              setClose={setClose}
              setActionValues={setActionValues}
              actionValues={actionValues}
            />
          </Dialog>
        </div>
      </section>
      <section className="contacts--dropdown">
        <span
          className="btn"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-expanded="false"
        >
          {Custom()}
        </span>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {column.map((columnData, index) => (
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
          ))}
        </ul>
      </section>
      {/* <Table data={mockData.data} column={column} {...props} /> */}
      {!!structure && (
        <Table
          data={rows}
          column={column}
          {...props}
          handleAction={handleAction}
          actionValues={actionValues}
          parent="contacts"
        />
      )}
      {close && (
        <DialogBox eventClose={eventClose} isClose={isClose}>
          <ImportContact isClose={isClose} eventClose={eventClose} />
        </DialogBox>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    contactData: state.contact.contactData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getContact: () => dispatch(getContact()),
    deleteContact: (ids) => dispatch(deleteContact(ids)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
