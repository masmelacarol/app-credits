import React from "react";
import { connect } from "react-redux";
import { setInputValue } from "../redux/actions/userActions";

const Credits = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    props.setInputValue(event);
  };

  console.log(props);

  return (
    <div className="Credits">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre completo:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={props.users.name}
            onChange={props.setInputValue}
          />
        </div>
        <div className="form-group">
          <label>Correo Electrónico:</label>
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={handleChange}
            value={props.users.email}
          />
        </div>
        <div className="form-group">
          <label>Cédula:</label>
          <input
            className="form-control"
            onChange={handleChange}
            value={props.users.DNI}
            name="DNI"
            type="number"
          />
        </div>
        <button className="btn btn-primary btn-block">Siguiente</button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ usersReducer }) => usersReducer;

const mapDispatchToProps = { setInputValue };

export default connect(mapStateToProps, mapDispatchToProps)(Credits);
