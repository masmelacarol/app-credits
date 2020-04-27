import React from "react";
import { connect } from "react-redux";
import "../assets/styles/FormCredits.scss";
import CreditTable from "./CreditTable";

const FormCredit = (props) => {

  console.log("FormCredit -> props", props);
  return (
    <React.Fragment>
      {props.allCreditsUser.length ? (
        <div className="allCredits">
          <CreditTable allCreditsUser={props.allCreditsUser} paymentButton={true}></CreditTable>
        </div>
      ) : (
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
          <button className="btn btn-primary" onClick={props.onClick}>
            {" "}
            Solicitar credito{" "}
          </button>
        </form>
      )}
    </React.Fragment>
  );
};

const mapStatetoProps = ({ creditReducer }) => creditReducer;

export default connect(mapStatetoProps, null)(FormCredit);
