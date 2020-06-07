import React from 'react'
import Option from './Option'

const Options = (props) => (
    <div>
        <div className = 'widget-header'>
            <h3 className = 'widget-header__title'>Your options</h3>
            <button
                onClick={props.removeAll}
                className='button--link'>
                Remove all</button>
        </div>

        <ol>
            {props.options.map((option) => (
                <Option key={option}
                    optionText={option}
                    deleteOption={props.deleteOption}
                />
            ))}
            {props.options.length === 0 && <p className = 'widget__message'>Please add an option to get started!</p>}

        </ol>
    </div>
)
export default Options