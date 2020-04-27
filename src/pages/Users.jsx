import React, { useEffect } from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import { getAllUsers } from "../redux/actions/userActions";
import { getAllCredits } from "../redux/actions/creditActions";
import "../assets/styles/Users.scss";

const Users = (props) => {
  const { user, credit } = props;
  console.log("Users -> props", props);
  useEffect(() => {
    getUsers();
  }, [props.user.users]);

  const getUsers = async () => {
    await props.getAllUsers();
  };

  return (
    <div className="users">
      <h2>Usuarios: </h2>
      {user.dataUsers.length ? (
        <div className="table-responsive-xl">
          <table className="table table-sm table-dark">
            <thead>
              <tr>
                <th scope="col">Usuario</th>
                <th scope="col">Cédula</th>
                <th scope="col">Creditos</th>
              </tr>
            </thead>
            <tbody>
              {user.dataUsers.map((user, key) => (
                <tr key={key}>
                  <th scope="row">{user.name}</th>
                  <td>{user.DNI}</td>
                  <td> <Link onClick={() => props.getAllCredits(user.DNI) } to={`/allCredits/${user.DNI}`}> Ver creditos </Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Error</p>
      )}
    </div>
  );
};

const mapStateToProps = ({ usersReducer, creditReducer }) => {
  return {
    user: usersReducer,
    credit: creditReducer,
  };
};

const mapDispachToProps = {
  getAllUsers,
  getAllCredits
};

export default connect(mapStateToProps, mapDispachToProps)(Users);
