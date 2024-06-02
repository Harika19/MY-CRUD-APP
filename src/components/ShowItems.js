import React from "react";
import { useShowForm } from "../contexts/FormContext";

const ShowItems = ({ taskList }) => {
  const { showForm, setShowForm } = useShowForm();

  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6">
              <h3> Total items: </h3>
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>id</th>
                    <th>Task Name</th>
                    <th>Status</th>
                    <th>Edit</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {taskList.map((item) => (
                    <tr>
                      <td> {item.id} </td>
                      <td>{item.taskName}</td>
                      <td>{item.taskStatus}</td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-primary"
                          onClick={(e) => {
                            setShowForm(!showForm);
                          }}
                        >
                          Edit
                        </button>
                      </td>
                      <td></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowItems;
