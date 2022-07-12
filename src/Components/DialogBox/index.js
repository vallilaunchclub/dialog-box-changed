import React from "react";
import "./style.scss";

function DialogBox(props) {
    const { isClose } = props;
    return (
      <section className={`dialogbox-container ${isClose && "active"}`}>
        <section className={`dialogbox ${isClose && "hide"}`}>
          <div>{props.children}</div>
        </section>
      </section>
    );
  }
  
  export default DialogBox;
  
  
