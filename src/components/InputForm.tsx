import React, { useState } from "react";

const InputForm: React.FC<IInputForm> = ({ addTodo }) => {
  const [task, setTask] = useState("");

  return (
    <div className="input-form">
      <input
      value={task}
        className="input-task"
        placeholder="Enter the todo..."
        type="text"
        maxLength={40}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        className="btn-hover btn-color"
        type="submit"
        onClick={() => {
          addTodo(task);
          setTask("");
        }}
        disabled={!task}
      >
        Add New Todo
      </button>
    </div>
  );
};

export default InputForm;
