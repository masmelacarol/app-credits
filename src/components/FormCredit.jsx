import React from "react";
import { connect } from "react-redux";
import "../assets/styles/FormCredits.scss";

const FormCredit = (props) => {

  const formattedDate = (date) => {
    if(!date) return 'No hay fecha'
    return new Date(date).toLocaleDateString();
  }

  console.log("FormCredit -> props", props);
  return (
    <React.Fragment>
      {props.allCreditsUser.length ? (
        <div className="allCredits">
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">Valor</th>
                <th scope="col">Fecha</th>
                <th scope="col">Estado</th>
                <th scope="col">Pagado</th>
              </tr>
            </thead>
            <tbody>
              {props.allCreditsUser.map((all, key) => (
                <tr key={key}>
                  <th scope="row">{all.value}</th>
                  <td>{formattedDate(all.date)}</td>
                  <td>{all.state ? 'Aprobado' : 'Rechazado'}</td>
                  <td>{all.isPay ? 'Si' : <button className="btn btn-primary">Pagar</button>}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
