import React from 'react'
import { Link } from 'react-router-dom';
import RepoItems from './RepoItems';

const Repo = ({repos}) => {
    return (
        repos.map(repo => <RepoItems repo={repo} /> )
    );
        
    
}

export default Repo