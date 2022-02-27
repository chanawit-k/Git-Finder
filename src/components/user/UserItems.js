import React from 'react'

const UserItems = ({user:{login,avatar_url,html_url}}) => {
    // https://api.github.com/users --> link for github api user data 
    // constructor() {
    //     super()
    //     this.state = {
    //         "login": "mojombo",
    //         "id": 1,
    //         "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
    //         "html_url": "https://github.com/mojombo",
    //     }
    // }

    // const {login,avatar_url,html_url} = this.state;
    // const {login,avatar_url,html_url} = props.user;
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
                <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
            </div>

        </div>
    );
        
    
}

export default UserItems