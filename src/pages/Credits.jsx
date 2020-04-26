import React from "react";
import { connect } from "react-redux";
import { setInputValue } from "../redux/actions/userActions";

import '../assets/styles/Credits.scss';

const Credits = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    props.setInputValue(event);
  };

  const handleClick = () => {
    if(Object.keys(props.users.DNI).length) {
      props.history.push('/credits');
    }else {
      return <p>Faltan datos</p>
    }

  }

  console.log(props);

  return (
    <div className="Credits">
      <h2>Datos del usuario:</h2>
      <p className="text-sm-center">Por favor digite sus datos para registrarse en el sistema</p>
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
        <button onClick={handleClick} className="btn btn-primary btn-block">Siguiente</button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ usersReducer }) => usersReducer;

const mapDispatchToProps = { setInputValue };

export default connect(mapStateToProps, mapDispatchToProps)(Credits);
