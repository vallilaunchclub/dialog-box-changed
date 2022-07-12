import React from "react";
import { useState } from "react";
import Close from "../../Assets/images/close";
import Radiobutton from "../../Assets/images/radiobutton";
import DropDown from "../../Assets/images/dropDown";
import RadioButtonGreen from "../../Assets/images/radiobuttongreen";
import "./style.scss";
import Checkbox from "@material-ui/core/Checkbox";
import RadioButtonPlain from "../../Assets/images/radiobuttonplain";
const ImportContact = (props) => {
  const [value, setValue] = useState(true);
  const [data, setData] = useState(false);

  const handleUpload = () => {
    setValue(false);
    setData(true);
  };

  return (
    <div>
      <div className="box">
        <div className="head-box">
          <div className="head-box-buttons">
            <div className="head-box-import ">
              <span className=" head-box-text">Import Contacts</span>
            </div>
            <div className="head-box-history">
              <span className="head-box-text1">History</span>
            </div>
          </div>
        </div>
        <div className="Close" onClick={props.eventClose}>
          {Close(24, 24, "#33BC7E")}
        </div>
          </div>
          <div className="borderbox">
            <div className="borderbox-content-1">
              <div className="borderbox-radiobutton-1">
              {Radiobutton(16, 16)}
              </div>
              <div className="borderbox-button1">
              <div className="borderbox-upload">Upload File</div>
              <div className="borderbox-icon1">{DropDown(16, 16)}</div>
              </div>
            </div>
             <div className="borderbox-content-2">
            <div className="borderbox-radiobutton-2">
              {RadioButtonGreen(16, 16)}
              </div>
              <div className="borderbox-button2">
              <div className="borderbox-mapping">Mapping</div>
              <div className="borderbox-icon2">{DropDown(16, 16)}</div>
              </div>
            </div> 
            <div className="borderbox-content-3">
              <div className="borderbox-radiobutton-3">
                {RadioButtonPlain(16,16)}
              </div>
              <div className="borderbox-button3">
                <div className="borderbox-preview">Preview & Finish</div>
              </div>
            </div>
          </div>
       <div className="tables">
        <div className="table-1">FIELDS</div>
        <div className="side-table">
          <div className="table-2">
            <div className="column-1">
              <div className="table-2--heading-1">Columns</div>
              <div className="table-2--row-1">
                <div className="table-2--row-1--checkbox-1">
                  <Checkbox
                    style={{ color: "#33bc7e", transform: "scale(0.9)" }}
                    checked
                  />
                </div>
                <div className="table-2--row-2--personname"> Person Name</div>
              </div>
              <div className="table-2--row-2">
                <div className="table-2--row-2--checkbox-2">
                  <Checkbox
                    style={{ color: "#33bc7e", transform: "scale(0.9)" }}
                    checked
                  />
                </div>
                <div className="table-2--row-2--personphone"> Person Phone</div>
              </div>
              <div className="table-2--row-3">
                <div className="table-2--row-3--checkbox-3">
                  <Checkbox
                    style={{ color: "#33bc7e", transform: "scale(0.9)" }}
                    checked
                  />
                </div>
                <div className="table-2--row-3--personemail"> Person Email</div>
              </div>
              <div className="table-2--row-4">
                <div className="table-2--row-4--checkbox-4">
                  <Checkbox
                    style={{ color: "#33bc7e", transform: "scale(0.9)" }}
                    checked
                  />
                </div>
                <div className="table-2--row-4--address"> Address</div>
              </div>
              <div className="table-2--row-5">
                <div className="table-2--row-5--checkbox-5">
                  <Checkbox
                    style={{ color: "#33bc7e", transform: "scale(0.9)" }}
                    checked
                  />
                </div>
                <div className="table-2--row-5--title"> Title</div>
              </div>
              <div className="table-2--row-6">
                <div className="table-2--row-6--checkbox-6">
                  <Checkbox
                    style={{ color: "#33bc7e", transform: "scale(0.9)" }}
                    checked
                  />
                </div>
                <div className="table-2--row-6--currency"> Currency</div>
              </div>
              <div className="table-2--row-7">
                <div className="table-2--row-7--checkbox-7">
                  <Checkbox
                    style={{ color: "#33bc7e", transform: "scale(0.9)" }}
                    checked
                  />
                </div>
                <div className="table-2--row-7--designation"> Designation</div>
              </div>
              <div className="table-2--row-8">
                <div className="table-2--row-8--checkbox-8">
                  <Checkbox
                    style={{ color: "#33bc7e", transform: "scale(0.9)" }}
                    checked
                  />
                </div>
                <div className="table-2--row-8--followers"> Followers</div>
              </div>
              <div className="table-2--row-9">
                <div className="table-2--row-9--checkbox-9">
                  <Checkbox
                    style={{ color: "#33bc7e", transform: "scale(0.9)" }}
                    checked
                  />
                </div>
                <div className="table-2--row-9--owners"> Owners</div>
              </div>
              <div className="table-2--row-10">
                <div className="table-2--row-10--checkbox-10">
                  <Checkbox
                    style={{ color: "#33bc7e", transform: "scale(0.9)" }}
                    checked
                  />
                </div>
                <div className="table-2--row-10--creationdate">
                  Creation Date
                </div>
              </div>
              <div className="table-2--row-11">
                <div className="table-2--row-11--checkbox-11">
                  <Checkbox
                    style={{ color: "#33bc7e", transform: "scale(0.9)" }}
                    checked
                  />
                </div>
                <div className="table-2--row-11--visibleto">Visible To</div>
              </div>
              <div className="table-2--row-12">
                <div className="table-2--row-12--checkbox-12">
                  <Checkbox
                    style={{ color: "#33bc7e", transform: "scale(0.9)" }}
                    checked
                  />
                </div>
                <div className="table-2--remarks">Remarks</div>
              </div>
            </div>
            <div className="column-2">
              <div className="table-2--heading-2">Fields</div>
              <div className="column-2--row-1">
                <div className="column-2--row-1--name">Name </div>
                <div className="column-2--row-1--icon-1">
                  {DropDown(16, 16)}
                </div>
              </div>
              <div className="column-2--row-2">
                <div className="column-2--row-2--phone">Phone</div>
                <div className="column-2--row-2--icon-2">
                  {DropDown(16, 16)}
                </div>
              </div>
              <div className="column-2--row-3">
                <div className="column-2--row-3--email"> Email</div>
                <div className="column-2--row-3--icon-3">
                  {DropDown(16, 16)}
                </div>
              </div>
              <div className="column-2--row-4">
                <div className="column-2--row-4--address"> Address</div>
                <div className="column-2--row-4--icon-4">
                  {DropDown(16, 16)}
                </div>
              </div>
              <div className="column-2--row-5">
                <div className="column-2--row-5--title"> Title</div>
                <div className="column-2--row-5--icon-5">
                  {DropDown(16, 16)}
                </div>
              </div>
              <div className="column-2--row-6">
                <div className="column-2--row-6--currency"> Currency</div>
                <div className="column-2--row-6--icon-6">
                  {DropDown(16, 16)}
                </div>
              </div>
              <div className="column-2--row-7">
                <div className="column-2--row-7--designation">Designation</div>
                <div className="column-2--row-7--icon-7">
                  {DropDown(16, 16)}
                </div>
              </div>
              <div className="column-2--row-8">
                <div className="column-2--row-8--followers">Followers</div>
                <div className="column-2--row-8--icon-8">
                  {DropDown(16, 16)}
                </div>
              </div>
              <div className="column-2--row-9">
                <div className="column-2--row-9--select">--Select--</div>
                <div className="column-2--row-9--icon-9">
                  {DropDown(16, 16)}
                </div>
              </div>
              <div className="column-2--row-10">
                <div className="column-2--row-10--creationdate">
                  Creation Date
                </div>
                <div className="column-2--row-10--icon-10">
                  {DropDown(16, 16)}
                </div>
              </div>
              <div className="column-2--row-11">
                <div className="column-2--row-11--visibleto">Visible To</div>
                <div className="column-2--row-11--icon-11">
                  {DropDown(16, 16)}
                </div>
              </div>
              <div className="column-2--row-12">
                <div className="column-2--row-12--remarks">Remarks</div>
                <div className="column-2--row-12--icon-12">
                  {DropDown(16, 16)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ImportContact;
