import React from 'react';

const CreditTable = ({paymentButton, allCreditsUser }) => {

  const validatePayment = () => {
    if(!paymentButton) return 'No';
    return <button className="btn btn-primary">Pagar</button>
  }
  const formattedDate = (date) => {
    if(!date) return 'No hay fecha'
    return new Date(date).toLocaleDateString();
  }
  
  return(
    <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">Valor</th>
          <th scope="col">Fecha</th>
          <th scope="col">Estado</th>
          <th scope="col">Pagado</th>
        </tr>
      </thead>
      <tbody>
        {allCreditsUser.map((all, key) => (
          <tr key={key}>
            <th scope="row">{all.value}</th>
            <td>{formattedDate(all.date)}</td>
            <td>{all.state ? 'Aprobado' : 'Rechazado'}</td>
            <td>{all.isPay ? 'Si' : validatePayment()}</td>            
          </tr>
        ))}
      </tbody>
    </table>    
  )
};

export default CreditTable;

