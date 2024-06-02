import React from "react";
import { useShowForm } from "../contexts/FormContext";

const Header = () => {
  const { showForm, setShowForm } = useShowForm();
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>TODO List Demo App</h1>
              <p>Do it now</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-3">
              <button
                className="btn btn-sm btn-primary"
                onClick={(e) => setShowForm(!showForm)}
              >
                Add task
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
