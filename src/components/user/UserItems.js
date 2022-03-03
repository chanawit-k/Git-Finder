import React from 'react'
import { Link } from 'react-router-dom';
const UserItems = ({user:{login,avatar_url,html_url}}) => {
    return (
        <div className="card text-center">
            <img 
                src={avatar_url} 
                alt="" 
                className="round-img" 
                style={{width:'60px'}} 
            />
            <h3>{login}</h3>

            <div>
                <Link to={`/user_information/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
            </div>

        </div>
    );
        
    
}

export default UserItems