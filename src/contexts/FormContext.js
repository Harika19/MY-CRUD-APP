import React, { createContext, useContext, useState } from "react";

export const FormContext = createContext(false);

export const useShowForm = () => {
  return useContext(FormContext);
};

export const FormContextProvider = ({ children }) => {
  const [showForm, setShowForm] = useState(false);
  const obj = {
    showForm,
    setShowForm,
  };

  return <FormContext.Provider value={obj}>{children}</FormContext.Provider>;
};
