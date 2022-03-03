import React from 'react'

const RepoItems = ({repo}) => {
    console.log(repo.name)
    return (
        <div className='card'>
            <h3>
            <a href={repo.html_url}>{repo.name}</a>
            </h3>
        </div>
    )
}
export default RepoItems
