import React from 'react';
import PropTypes from 'prop-types';
import './NumberQuestion.scss';


const TextQuestion = (props) => {
    const { id, body, value, disabled } = props;
    let validate = true;
    return (
        <div className="question">
            <span className='question__id'>{id}</span>
            <label>
                <p>{body}</p>
                <input
                    disabled={disabled}
                    onChange={(event) => props.handleChange({
                        id: props.id,
                        validate: validate,
                        answer: event.target.value,
                    })}
                    value={value}
                    type="number"
                >
                </input>
            </label>
        </div>
    );
};

TextQuestion.propTypes = {

};

export default TextQuestion;
