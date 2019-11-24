import React from 'react';
import PropTypes from 'prop-types';

const TextQuestion = (props) => {
    const { id, body, value, handleChange, disabled } = props;

    return (
        <div className="question">
            <span className='question__id'>{props.id}</span>
            <label>
                <p>{body}</p>
                <input
                    disabled={disabled} 
                    onChange={(event) => {
                        return handleChange({
                        id: id,
                        validate: !!value,
                        answer: event.target.value,
                    })}}                    
                    value={value}                   
                    type="text">
                </input>
            </label>
        </div>
    );
};

TextQuestion.propTypes = {

};

export default TextQuestion;