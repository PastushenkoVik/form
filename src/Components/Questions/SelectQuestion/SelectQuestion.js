import React from 'react';

import answers from '../../../api/answers.json';
import PropTypes from 'prop-types';
import './SelectQuestion.scss';

const SelectQuestion = (props) => {
    const { body, id, value, handleChange, disabled } = props;
    const answer = answers.find(answer => answer.id === id);
    let validate = value !== 0;
    return (
        <div className="question select">
            <span className='question__id'><p>{id}</p></span>
            <p>{body}</p><br />
            <select
                disabled={disabled}
                onChange={(event) => props.handleChange({
                    id: props.id,
                    validate: validate,
                    answer: event.target.value,
                })}
                value={value}
            >
                <option value="0" hidden>Select answer</option>
                {answer.variants.map(variant => (
                    <option
                        key={variant}
                        value={variant}
                    >
                        {variant}
                    </option>
                ))}
            </select>
            <div class="select__arrow"></div>
        </div>
    );
};

SelectQuestion.propTypes = {

};

export default SelectQuestion;