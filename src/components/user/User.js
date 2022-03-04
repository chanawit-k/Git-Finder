import React from 'react'
import { useContext } from 'react';
import UserItems from './UserItems'
import Spinnner from '../layout/Spinnner'
import GithubContext from '../../context/github/githubContext';

const User = () => {
    
    const githubContext = useContext(GithubContext);

    const {users, loading} = githubContext 

    if (loading){
        return <Spinnner /> 
    }else{
        return (
            <div style={userStyle}>
                {users.map(user =>(
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