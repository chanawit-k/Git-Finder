import React from 'react'
import UserItems from './UserItems'
import Spinnner from '../layout/Spinnner'

const User = ({loading, Users}) => {
    

    
    if (loading){
        return <Spinnner /> 
    }else{
        return (
            <div style={userStyle}>
                {Users.map(user =>(
                    <UserItems key={user.id} user={user}  />    
                ))}
            </div>
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap : '3 rem'
}
export default User