import React from "react";
import { connect } from "react-redux";
import {
  setInputValue,
  addUser,
  getAllUsers,
  getUserById,
} from "../redux/actions/userActions";

import "../assets/styles/Credits.scss";

const Credits = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  const handleChange = async(event) => {
    props.setInputValue(event);
    await props.getAllUsers();
  };

  const handleClick = async () => {    
    if(Object.keys(props.users.DNI).length) {
        await props.addUser(props.users);   
        await props.getAllUsers();
        await props.getUserById(props.users.DNI);
        console.log(props);

        props.history.push(`/credits/${props.users.DNI}`)    
        
    }else {
      return <p>Faltan datos</p>
    }
  };
  // console.log(props);
  return (
    <div className="Credits">
      <h2>Datos del usuario:</h2>
      <p className="text-sm-center">
        Por favor digite sus datos para registrarse en el sistema
      </p>
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
        <button onClick={handleClick} className="btn btn-primary btn-block">
          Siguiente
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ usersReducer }) => usersReducer;

const mapDispatchToProps = { setInputValue, addUser, getAllUsers, getUserById };

export default connect(mapStateToProps, mapDispatchToProps)(Credits);
