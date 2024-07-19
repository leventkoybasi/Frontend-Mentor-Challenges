import React from "react";
import img from "../assets/images/icon-success-check.svg";

function SuccesMsj() {
  return (
    <div className="success-container">
      <h2>
        <img src={img} alt="check" />
        <span>Message Sent</span>
      </h2>
      <p>Thanks for completing the form. We will be in touch soon...</p>
    </div>
  );
}

export default SuccesMsj;
