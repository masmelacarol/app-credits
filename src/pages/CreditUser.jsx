import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUserById, getAllUsers } from "../redux/actions/userActions";
import FormCredit from "../components/FormCredit";
import "../assets/styles/CreditUser.scss";

const CreditUser = (props) => {
  const { user, credit, match } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleClick = async() => {
    await props.getUserById(match.params.id);
    if (props.user.isUser) {
      console.log("hola");
    }
  };

  const handleChange = () => {};

  console.log("CreditUser -> props", props);
  return (
    <div className="creditUser">
      <div className="creditUser__perfil">
        <h2>Perfil</h2>
        <p className="font-weight-bold">
          Usuario:{" "}
          <span className="font-weight-normal">{user.users.name || "NA"} </span>
        </p>
        <p className="font-weight-bold">
          Correo electrónico:{" "}
          <span className="font-weight-normal">
            {user.users.email || "NA"}{" "}
          </span>
        </p>
        <p className="font-weight-bold">
          Cédula:{" "}
          <span className="font-weight-normal">{user.users.DNI || "NA"} </span>
        </p>
      </div>
      {!user.isUser && (
        <div className="creditUser__applyCredit">
          <h2>Solicitar credito</h2>
          <FormCredit
            onSubmit={handleSubmit}
            onClick={handleClick}
            onChange={handleChange}
          ></FormCredit>
        </div>
      )}

      <div className="creditUser__data">
        {props.user.isUser ? (
          <React.Fragment>
            <button> Ver todos los creditos </button>
            <button> Ver todos los creditos denegados </button>
            <button> Ver todos los creditos aprobados </button>
          </React.Fragment>
        ) : null}
      </div>
    </div>
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
}

export default connect(mapStateToProps, mapDispatchToProps)(CreditUser);
