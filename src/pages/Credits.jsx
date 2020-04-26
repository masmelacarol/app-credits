import React from "react";

const Credits = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
  
  };



  return (
    <div className="Credits">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre completo:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value=""
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Correo Electrónico:</label>
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={handleChange}
            value=""
          />
        </div>
        <div className="form-group">
          <label>Cédula:</label>
          <input
            className="form-control"
            onChange={handleChange}
            value=""
            name="DNI"
            type="number"
          />
        </div>
        <button className="btn btn-primary btn-block">Siguiente</button>
      </form>
    </div>
  );
};

export default Credits;

