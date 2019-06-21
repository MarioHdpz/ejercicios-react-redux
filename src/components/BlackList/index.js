import React from "react";
import Task from "../Task";
import "./List.css";

import { connect } from "react-redux";

const BlackList = props => {
  return (
    <div className="list">
      <h2>Black List</h2>
      <div className="tasks">
        {props.tasks.map((task, index) =>
          <Task name={`Task ${index + 1}`} description={task} color="black" />
        )}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  tasks: state,
});

export default connect(mapStateToProps)(BlackList);
