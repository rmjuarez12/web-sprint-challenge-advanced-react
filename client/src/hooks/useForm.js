// write your custom hook here to control your checkout form
// Import Dependencies
import React, { useState } from "react";

export const useForm = (initialValues) => {
  // State for the success message
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // State that will handle the values of the form fields
  const [values, setValues] = useState(initialValues);

  // Function that will handle the change events on the fields
  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // Function that will handle the submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  // Return the necessary functions and states
  return [values, showSuccessMessage, handleChanges, handleSubmit];
};
