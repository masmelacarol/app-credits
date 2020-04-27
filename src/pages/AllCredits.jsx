import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllCredits } from '../redux/actions/creditActions';

import CreditTable from '../components/CreditTable';

const AllCredits = (props) => {

  console.log("AllCredits -> props", props)

  useEffect(()=> {
    const getAll = async() => {
      await props.getAllCredits(props.match.params.id);
    }
    getAll();
    
  }, [props.AllCredits])


  return (
    <div className="allCredits">    
      {props.allCredits 
        ? <CreditTable paymentButton={false} allCreditsUser={props.allCredits.credits}></CreditTable>
        : 'Cargando'
      }
      
    
    </div>
  )
};

const mapStateToProps = ({creditReducer}) => creditReducer;
const mapDispatchToProps = {
  getAllCredits
}

export default connect(mapStateToProps, mapDispatchToProps)(AllCredits);