import React from "react";
import { connect } from "react-redux";

const FormCredit = (props) => (
  <form onSubmit={props.onSubmit}>
    <div className="form-group">
      <label>Monto a solicitar:</label>
      <input
        type="text"
        className="form-control"
        name="value"
        value={props.credits.value}
        onChange={props.onChange}
      />
    </div>
    <div className="form-group">
      <label>Fecha de pago:</label>
      <input
        type="date"
        className="form-control"
        name="date"
        value={props.credits.date}
        onChange={props.onChange}
      />
    </div>
    <button className="btn btn-primary" onClick={props.onClick}> Solicitar credito </button>
  </form>
);

const mapStatetoProps = ({ creditReducer }) => creditReducer;

export default connect(mapStatetoProps, null)(FormCredit);
