import React, { useState } from "react";
import { useShowForm } from "../contexts/FormContext";

const AddTaskForm = ({ passState }) => {
  const { showForm, setShowForm } = useShowForm();

  const [taskDetail, setTaskDetail] = useState({});
  let { id = 0, taskName, taskStatus = "" } = taskDetail;

  const handleSubmit = (e) => {
    e.preventDefault();
    passState({ ...taskDetail, id: Math.random() });
    setTaskDetail({ taskName: "", taskStatus: "To-Do" });
  };

  const onChangeHandler = (e) => {
    console.log("e", taskDetail);
    setTaskDetail({ ...taskDetail, [e.target.name]: e.target.value });
  };

  if (!showForm) {
    return <></>;
  }
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <form onSubmit={(e) => handleSubmit(e)}>
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control"
                      name="taskName"
                      value={taskName}
                      placeholder="Add Task"
                      onChange={(e) => onChangeHandler(e)}
                    />
                  </div>

                  <div className="mb-4">
                    <select
                      name="taskStatus"
                      onChange={(e) => onChangeHandler(e)}
                      defaultValue={taskStatus}
                    >
                      <option>To-Do</option>
                      <option>Completed</option>
                      <option>In Progress</option>
                    </select>
                  </div>

                  <div>
                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTaskForm;
