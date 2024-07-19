import React, { useState, useEffect } from "react";

const valuesObject = {
  firstName: "",
  lastName: "",
  email: "",
  quert: "",
  message: "",
  consent: false,
};
function Form({ onSuccess, shouldReset }) {
  const [values, setValues] = useState(valuesObject);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (shouldReset) {
      setValues(valuesObject);
    }
  }, [shouldReset]);

  function handleChanges(e) {
    const { name, value, type, checked } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  function validateForm() {
    let formErrors = {};

    if (values.firstName === "") {
      formErrors.firstName = "This field is required";
    }
    if (values.lastName === "") {
      formErrors.lastName = "This field is required";
    }
    if (values.message === "") {
      formErrors.message = "This field is required";
    }
    if (values.email === "") {
      formErrors.email = "This field is required";
    }
    if (!values.consent) {
      formErrors.consent =
        "To submit this form, please consent to begin contact.";
    }
    if (!values.query) {
      formErrors.query = "Please select a query type";
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  }
  function submitForm(e) {
    e.preventDefault();
    if (validateForm()) {
      onSuccess();
    }
  }
  return (
    <form onSubmit={submitForm}>
      {/* First & Last Name */}
      <div className="name-container">
        <div className="form-control">
          <label htmlFor="firstName">First Name</label>
          <input
            className={errors.firstName ? "error" : undefined}
            type="text"
            id="firstName"
            name="firstName"
            value={values.firstName}
            onChange={handleChanges}
          />
          {errors.firstName && (
            <p className="errorMsg" id="firstNameError">
              {errors.firstName}
            </p>
          )}
          {/* <p className="errorMsg" id="firstNameError">
            This field is required
          </p> */}
        </div>
        <div className="form-control">
          <label htmlFor="lastName">Last Name</label>
          <input
            className={errors.lastName ? "error" : undefined}
            type="text"
            id="lastName"
            name="lastName"
            value={values.lastName}
            onChange={handleChanges}
          />
          {errors.lastName && (
            <p className="errorMsg" id="lastNameError">
              {errors.lastName}
            </p>
          )}
          {/* <p className="errorMsg" id="lastNameError">
            This field is required
          </p> */}
        </div>
      </div>
      {/* e-mail */}
      <div className="form-control">
        <label htmlFor="email">Email Address</label>
        <input
          className={errors.email ? "error" : undefined}
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChanges}
        />
        {errors.email && (
          <p className="errorMsg" id="emailError">
            {errors.email}
          </p>
        )}
        {/* <p className="errorMsg" id="emailError">
          This field is required
        </p> */}
      </div>
      {/* query type */}
      <div className="form-control">
        <fieldset>
          <legend>Query Type</legend>
          <div className="radio-container">
            <div>
              <input
                className={errors.email ? "error" : undefined}
                type="radio"
                name="query"
                id="general"
                value="General Enquiry"
                checked={values.query === "General Enquiry"}
                onChange={handleChanges}
              />

              <label htmlFor="general">General Enquiry</label>
            </div>
            <div>
              <input
                type="radio"
                name="query"
                id="support"
                value="Support Request"
                checked={values.query === "Support Request"}
                onChange={handleChanges}
              />
              <label htmlFor="support">Support Request</label>
            </div>
          </div>
        </fieldset>
        {errors.query && (
          <p className="errorMsg" id="queryError">
            {errors.query}
          </p>
        )}
        {/* <p className="errorMsg" id="queryError">
            Please select a query type
          </p> */}
      </div>
      {/* message */}
      <div className="form-control">
        <label htmlFor="message">Message</label>
        <textarea
          className={errors.message ? "error" : undefined}
          name="message"
          id="message"
          value={values.message}
          onChange={handleChanges}
        ></textarea>
        {errors.message && (
          <p className="errorMsg" id="messageError">
            {errors.message}
          </p>
        )}
        {/* <p className="errorMsg" id="messageError">
            This field is required
          </p> */}
      </div>
      {/* consent */}
      <div className="form-control">
        <div className="checkbox-container">
          <input
            type="checkbox"
            name="consent"
            id="consent"
            checked={values.consent}
            onChange={handleChanges}
          />
          <label htmlFor="consent">
            I consent to being contacted by theteam
          </label>
        </div>
        {errors.consent && (
          <p className="errorMsg" id="consentError">
            {errors.consent}
          </p>
        )}
        {/* <p className="errorMsg" id="consentError">
            To submit this form, please consent to being contacted
          </p> */}
      </div>
      {/* Subnmit */}
      <div className="form-control">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default Form;
