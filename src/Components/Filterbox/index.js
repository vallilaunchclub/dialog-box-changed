import React,{useState} from "react";
import Close from "../../Assets/images/close";
import DropDownGrey from "../../Assets/images/dropdowngrey";
import "./styles.scss";
function FilterBox (props) {
  const [close, isClose] = useState(false);
  const {open} = props
  const handleClose = () => {
    isClose(!isClose);
  };
  const eventClose = () => {
    isClose(!close);
  };
    return (
    <div className="filterbox">
       <div className="filterbox--box-1">
            <div className="filterbox--box-1-content-1">
           <div className="filterbox--box-1-close-1" onClick={props.handleopen}>
            {Close(20,20,"#33BC7E")}
            </div>
            
           <div className="filterbox--box-1-innercontent">
            <div className="filterbox--box-1-innercontent-heading">
                Filter (2)
            </div>
            <div className="filterbox--box-1-innercontent-para">
                Select Column..
            </div>
           </div>
           </div>
         </div>
         <div className="filterbox--box-2">
         <div className="filterbox--box-2--content-1">
               <div className="filterbox--box-2--content-1--heading">Deals</div>
              <div className="filterbox--box-2--content-1--close-1">
                {Close(20, 20)}
              </div> 
            </div>
            <div className="filterbox--box-2--content-2">
            <div className="filterbox--box-2--content-2--row-1">
                <div className="filterbox--box-2--content-2--row-1-text">
                  With Open Deals
                </div>
                <div className="filterbox--box-2--content-2--row-1-text-icon">{DropDownGrey(12, 12)}</div>
              </div>
              <div className="filterbox--box-2--content-2--row-1">
                <div className="filterbox--box-2--content-2--row-1-text">
                In the Last
                </div>
                <div className="filterbox--box-2--content-2--row-1-text-icon">{DropDownGrey(12, 12)}</div>
              </div>
              <div className="filterbox--box-2--content-2--row-1">
                <div className="filterbox--box-2--content-2--row-1-text">
                  2
                </div>
                
              </div>
              <div className="filterbox--box-2--content-2--row-1">
                <div className="filterbox--box-2--content-2--row-1-text">
                  Days
                </div>
                <div className="filterbox--box-2--content-2--row-1-text-icon">{DropDownGrey(12, 12)}</div>
              </div>
              </div>
         </div>
         <div className="filterbox--box-3">
         <div className="filterbox--box-3--content-1">
               <div className="filterbox--box-3--content-1--heading">Deal Stage</div>
              <div className="filterbox--box-3--content-1--close-1">
                {Close(20, 20)}
              </div> 
            </div>
            <div className="filterbox--box-3--content-2">
            <div className="filterbox--box-3--content-2--row-1">
                <div className="filterbox--box-3--content-2--row-1-text">
                  Is
                </div>
                <div className="filterbox--box-3--content-2--row-1-text-icon">{DropDownGrey(12, 12)}</div>
              </div>
              <div className="filterbox--box-3--content-2--row-1">
                <div className="filterbox--box-3--content-2--row-1-text">
                  <span className="search">Search</span>
                </div>
              </div>
              </div>
            </div>
            <div className="filterbox--box-4">
            <div className="filterbox--box-2--content-1">
               <div className="filterbox--box-2--content-1--heading">Deals</div>
              <div className="filterbox--box-2--content-1--close-1">
                {Close(20, 20)}
              </div> 
            </div>
            <div className="filterbox--box-2--content-2">
            <div className="filterbox--box-2--content-2--row-1">
                <div className="filterbox--box-2--content-2--row-1-text">
                  With Open Deals
                </div>
                <div className="filterbox--box-2--content-2--row-1-text-icon">{DropDownGrey(12, 12)}</div>
              </div>
              <div className="filterbox--box-2--content-2--row-1">
                <div className="filterbox--box-2--content-2--row-1-text">
                In the Last
                </div>
                <div className="filterbox--box-2--content-2--row-1-text-icon">{DropDownGrey(12, 12)}</div>
              </div>
              <div className="filterbox--box-2--content-2--row-1">
                <div className="filterbox--box-2--content-2--row-1-text">
                  2
                </div>
                </div>
                <div className="filterbox--box-2--content-2--row-1">
                <div className="filterbox--box-2--content-2--row-1-text">
                  Days
                </div>
                <div className="filterbox--box-2--content-2--row-1-text-icon">{DropDownGrey(12, 12)}</div>
                </div>
                 
                </div>
                </div>
           
            <div className="filterbox--box-5">
                <div className="filterbox--box-5-button">
                   <span className="apply"> Apply</span>
                </div>
            </div>
        
         

        
    </div>
    )

}
export default FilterBox;