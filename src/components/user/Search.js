import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    state = { 
        text : ''
    }

    static propTypes = {
        searchusers: PropTypes.func.isRequired,
        clearusers: PropTypes.func.isRequired
    };  

    onSubmit = (e) => {
        e.preventDefault()
        if(e.target.text.value === ''){
            this.props.alertMessage('Please insert Your text', 'light')
        }else{
            this.props.searchusers(e.target.text)
        }
    }

    onChange = (e) => { this.setState( {[e.target.name] : e.target.value})}
    
    render() {
        const {showClearButton,clearusers} = this.props;

        return (
            <form onSubmit={this.onSubmit.bind(this.state)}>
                <input type="text" name="text" value={this.state.text}   placeholder='text' onChange={this.onChange}  />
                <input type="submit" value='Serach' className="btn btn-dark btn-block" />
                {showClearButton && <input type="button" value='Clear' className="btn btn-block" onClick={clearusers}/>}
            </form>
        )
    }
}

export default Search