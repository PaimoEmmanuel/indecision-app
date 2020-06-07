import React from 'react'

const Option = (props) => (
        <div className = 'option'>
        <li className = 'option__text'>{props.optionText}</li>
        <button 
        className = 'button--link'
        onClick={(e) => {
            props.deleteOption(props.optionText)
        }}>Delete me</button>
        </div>
    );
export default Option