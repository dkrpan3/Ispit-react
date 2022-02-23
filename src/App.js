import React, { Component } from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import Aplikacija from "./containers/Aplikacija";

class App extends Component {
  render() {
    return <Aplikacija />;
  }
}

function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
