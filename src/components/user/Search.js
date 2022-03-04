import React, { useState } from 'react';
import PropTypes from 'prop-types';

const  Search = ({searchusers,clearusers,showClearButton,alertMessage}) => {
    const [text , setText] = useState()

    const onSubmit = (e) => {
        e.preventDefault()
        if(text === ''){
            alertMessage('Please insert Your text', 'light')
        }else{
            searchusers(e.target.text)
        }
    }

    const onChange = (e) => { setText( e.target.value)}

    console.log(text)

    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="text" value={text}   placeholder='text' onChange={onChange}  />
            <input type="submit" value='Serach' className="btn btn-dark btn-block" />
            {showClearButton && <input type="button" value='Clear' className="btn btn-block" onClick={clearusers}/>}
        </form>
    )
}

Search.propTypes = {
    searchusers: PropTypes.func.isRequired,
    clearusers: PropTypes.func.isRequired
};  

export default Search