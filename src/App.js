import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import Header from "./components/Header";
import AddTaskForm from "./components/AddTaskForm";
import ShowItems from "./components/ShowItems";
import { FormContextProvider, useShowForm } from "./contexts/FormContext";

const App = () => {
  const [taskList, setTaskList] = useState([]);

  const passState = (taskDetail) => {
    setTaskList([...taskList, taskDetail]);
  };

  return (
    <FormContextProvider>
      <Navbar />
      <Header />
      <AddTaskForm passState={passState} />
      <ShowItems taskList={taskList} />
    </FormContextProvider>
  );
};

export default App;
