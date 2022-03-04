import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const  Search = ({showClearButton}) => {

    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);
    const [text , setText] = useState('')

    const {clearusers,searchusers, users} = githubContext
    const onSubmit = (e) => {
        e.preventDefault()
        if(text === ''){
            alertContext.setalert('Please insert Your text', 'light')
        }else{
            console.log()
            searchusers(e.target.text)
        }
    }

    const onChange = (e) => { setText( e.target.value)}

    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="text" value={text}   placeholder='text' onChange={onChange}  />
            <input type="submit" value='Serach' className="btn btn-dark btn-block" />
            { users.length > 0  && <input type="button" value='Clear' className="btn btn-block" onClick={clearusers}/>}
        </form>
    )
}

export default Search