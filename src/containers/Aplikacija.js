import React, { Component } from "react";
import { connect } from "react-redux";
import { promijeniInput, dohvatiProfil } from "../redux/actions";
import Profil from "../components/Profil";
import { Row, Col } from "react-bootstrap";

class Aplikacija extends Component {
  handleChange(event) {
    this.props.promijeniInput({ payload: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dohvatiProfil(this.props.promijeniInput);
  }

  render() {
    return (
      <>
        <Row className="justify-content-center">
          <Col md={6} className="my-3">
            <form
              className="row justify-content-center"
              onSubmit={(event) => this.handleSubmit(event)}
            >
              <div className="row mb-4 text-center">
                <input
                  type="text"
                  placeholder="Unesite github username:"
                  className="form-control text-center"
                  value={this.props.inputLogina}
                  onChange={(event) => this.handleChange(event)}
                />
              </div>
              <input
                type="submit"
                className="btn btn-dark btn-lg btn-block"
                value="Pretraži"
              />
            </form>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={3} className="my-3 text-center">
            <Profil profil={this.props.profil} />
          </Col>
        </Row>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    profil: state.profil,
    inputLogina: state.inputLogina,
    odabraniFilm: state.odabraniFilm,
  };
}

const mapDispatchToProps = {
  promijeniInput,
  dohvatiProfil,
};

export default connect(mapStateToProps, mapDispatchToProps)(Aplikacija);
