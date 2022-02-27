import React from 'react'

const Alert = ({alert}) => {
    return (
            alert !== null    && (<div>
                <div className={`alert alert-${alert.type}`}>
                    <i className='fas fa-info-circle' /> {alert.msg}
                </div>
            </div>)
    )
}

export default Alert