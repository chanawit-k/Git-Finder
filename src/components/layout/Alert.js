import React, {useContext}from 'react'
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {

    const alertContext = useContext(AlertContext);
    const {alert} = alertContext
    return (
        alert !== null    && (<div>
            <div className={`alert alert-${alert.type}`}>
                <i className='fas fa-info-circle' /> {alert.msg}
            </div>
        </div>)
    )
}

export default Alert