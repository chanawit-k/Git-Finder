import React, { useReducer } from 'react';
import axios from 'axios';
import AlertReducer from './alertReducer';
import AlertContext from './alertContext';

import {
    SET_ALERT,
    REMOVE_ALERT
}   from '../types';

const AlertState = props => {
    const initialState = {
        alert:null
    }

    const [state, dispatch] = useReducer(AlertReducer, initialState);

    const setalert = (msg,type) => {
        dispatch({
            type:SET_ALERT,
            payload:{msg,type}
        });
        setTimeout(() => { dispatch({type:REMOVE_ALERT}) }, 5000);
    }

    return <AlertContext.Provider
        value={{
            alert:state.alert,
            setalert,
        }}
    >
        {props.children}
    </AlertContext.Provider>
    
  }

  export default AlertState