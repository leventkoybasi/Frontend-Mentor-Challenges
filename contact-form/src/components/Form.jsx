import React from "react";


function Form() {
  return (
    <form>
      {/* First & Last Name */}
      <div className="name-container">
        <div className="form-control">
          <label htmlFor="firstName">First Name<span className="required-input">*</span></label>
          <input type="text" id="firstName" name="firstName" />
          <p className="errorMsg" id="firstNameError">
            This field is required
          </p>
        </div>
        <div className="form-control">
          <label htmlFor="lastName">Last Name<span className="required-input">*</span></label>
          <input type="text" id="lastName" name="lastName" />
          <p className="errorMsg" id="lastNameError">
            This field is required
          </p>
        </div>
      </div>
      {/* e-mail */}
      <div className="form-control">
        <label htmlFor="email">Email Address<span className="required-input">*</span></label>
        <input type="email" id="email" name="email" />
        <p className="errorMsg" id="emailError">
          This field is required
        </p>
        {/* query type */}
        <div className="form-control">
          <fieldset>
            <legend>Query Type<span className="required-input">*</span></legend>
            <div className="radio-dontainer">
              <div>
                <input
                  type="radio"
                  name="query"
                  id="general"
                  value="General Enquiry"
                />
                <label htmlFor="general">General Enquiry</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="query"
                  id="support"
                  value="Support Request"
                />
                <label htmlFor="support">Support Request</label>
              </div>
            </div>
          </fieldset>
          <p className="errorMsg" id="queryError">
            Please select a query type
          </p>
        </div>
        {/* message */}
        <div className="form-control">
          <label htmlFor="message">Message<span className="required-input">*</span></label>
          <textarea name="message" id="message"></textarea>
          <p className="errorMsg" id="messageError">
            This field is required
          </p>
        </div>
        {/* consent */}
        <div className="form-control">
          <div className="checkbox-container">
            <input type="checkbox" name="consent" id="consent" />
            <label htmlFor="consent">
              I consent to being contacted by theteam<span className="required-input">*</span>
            </label>
          </div>
          <p className="errorMsg" id="consentError">
            To submit this form, please consent to being contacted
          </p>
        </div>
      </div>
    </form>
  );
}

export default Form;
