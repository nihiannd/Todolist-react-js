import React from "react";

function TodoItem(props) {
  const { task, isDone, finishTask, removeTask } = props;
  return (
    <ul className="container-xs d-flex col justify-content-between ">
      <p className="w-50 me-2">{task} </p>
      <button
        className={`btn me-2 ${isDone ? " btn-success" : "btn-warning"}`}
        onClick={finishTask}
      >
        {isDone ? "finished" : "Not finshed"}
      </button>
      <button className="btn btn-danger" onClick={removeTask}>
        Delete
      </button>
    </ul>
  );
}

export default TodoItem;
