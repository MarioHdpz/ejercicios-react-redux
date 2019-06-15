import React from "react";
import { connect } from "react-redux"

const HelloWorld = props => <h1 className="main">{props.message}</h1>;

const mapStateToProps = reduxState => ({
    message: reduxState,
});

export default connect(mapStateToProps)(HelloWorld);
