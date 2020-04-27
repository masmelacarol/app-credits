import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUserById, getAllUsers } from "../redux/actions/userActions";
import {
  setInputCredits,
  addCredit,
  getAllPenndingCredits,
} from "../redux/actions/creditActions";
import FormCredit from "../components/FormCredit";
import "../assets/styles/CreditUser.scss";

const CreditUser = (props) => {
  const { user, credit, match } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleClick = async () => {
    let id = match.params.id;
    await props.getUserById(id);
    await props.addCredit(id, props.credit.credits);
  };

  const handleChange = (event) => {
    props.setInputCredits(event);
  };

  console.log("CreditUser -> props", props);
  return (
    <React.Fragment>
      <div className="creditUser">
        <div className="creditUser__perfil">
          <h2>Perfil</h2>
          <p className="font-weight-bold">
            Usuario:{" "}
            <span className="font-weight-normal">
              {user.users.name || "NA"}{" "}
            </span>
          </p>
          <p className="font-weight-bold">
            Correo electrónico:{" "}
            <span className="font-weight-normal">
              {user.users.email || "NA"}{" "}
            </span>
          </p>
          <p className="font-weight-bold">
            Cédula:{" "}
            <span className="font-weight-normal">
              {user.users.DNI || "NA"}{" "}
            </span>
          </p>
          {props.user.isUser ? (
              <button className="btn btn-info mb-2" onClick={() => props.getAllPenndingCredits(user.users.DNI)}>
                {" "}
                Ver todos los creditos{" "}
              </button>
              
            ) : null}
        </div>
        {user.dataByUser.credits.length === 0 && (
          <div className="creditUser__applyCredit">
            <h2>Solicitar credito</h2>
            <FormCredit
              onSubmit={handleSubmit}
              onClick={handleClick}
              onChange={handleChange}
            ></FormCredit>
          </div>
        )}
      </div>

      {credit.creditsPending.length > 0 && (
        <FormCredit
          onSubmit={handleSubmit}
          onClick={handleClick}
          onChange={handleChange}
        ></FormCredit>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = ({ usersReducer, creditReducer }) => {
  return {
    user: usersReducer,
    credit: creditReducer,
  };
};

const mapDispatchToProps = {
  getAllUsers,
  getUserById,
  setInputCredits,
  addCredit,
  getAllPenndingCredits,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreditUser);
