import React from "react";
import Task from "../Task";
import "./List.css";

import { connect } from "react-redux";

const WhiteList = props => {
  return (
    <div className="list">
      <h2>White List</h2>
      <div className="tasks">
        {props.tasks.map((task, index) =>
          <Task name={`Task ${index + 1}`} description={task} color="white" />
        )}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  tasks: state,
});

export default connect(mapStateToProps)(WhiteList);
