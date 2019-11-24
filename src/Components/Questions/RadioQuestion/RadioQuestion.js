import React, { Component, Fragment } from 'react';

import answers from '../../../api/answers.json';
import PropTypes from 'prop-types';
import './RadioQuestion.scss'

class RadioQuestion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      validate: false,
      answer: [],
    }
  }

  handleRadioState(value, key, index) {
    let inputedValue = [false, false, false, false];
    inputedValue[index] = value;
    let validate = inputedValue.some(input => input);
    this.setState({
      id: key,
      validate: validate,
      answer: inputedValue,
    }, () => this.props.handleChange(this.state));
  }

  render() {
    const { body, id, disabled } = this.props;
    const answer = answers.find(answer => answer.id === id);
    let index = 0;

    return (
      <div className="question">
        <span className='question__id'>{id}</span>
        <p>{body}</p>

        {answer.variants.map((variant, count) => (
          <div
            key={variant}
            className="radio-button"
          >

            <input
              disabled={disabled}
              onChange={(event) => {
                return this.handleRadioState(event.target.checked, id, count)
              }}
              type="radio"
              id={`radio-variant${++index}`}
              name='radio'
            ></input>
            <label
              className="radio-label"
              htmlFor={`radio-variant${index}`}
            ></label>
            {variant}
          </div>
        ))
        }

      </div>
    );
  }
};

RadioQuestion.propTypes = {

};

export default RadioQuestion;