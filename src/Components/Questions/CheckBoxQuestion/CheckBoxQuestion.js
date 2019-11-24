import React, { useState } from 'react';
import { Component } from 'react';
import answers from '../../../api/answers.json';
import './CheckBoxQuestion.scss'
import PropTypes from 'prop-types';

class CheckBoxQuestion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      validate: false,
      answer: [false, false, false, false],
    }
  }

  handleCheckStateAndProps(value, key, index) {
    let inputedValue = this.state.answer;
    inputedValue[index] = value;
    let val = inputedValue.some(input => input);
    this.setState({
      id: key,
      validate: val,
      answer: inputedValue,
    }, () => this.props.handleChange(this.state));
  }

  render() {
    const { body, id, disabled } = this.props;
    const currentAnswer = answers.find(answer => answer.id === id);
    const currentAnswerRight = currentAnswer.right;
    let index = 0;
    return (
      <div className="question">
        <span className='question__id'>{id}</span>
        <p>{body}</p>
        {currentAnswer.variants.map((variant, count) => {
          const status = currentAnswerRight
            .every((input, index) => this.state.answer[index] === input);
          const checked = this.state.answer[count];

          return (
            <div key={variant}>
              <input
                checked={checked}
                disabled={disabled}
                id={`checkboxVariant${++index}`}
                onChange={(event) => {
                  return this.handleCheckStateAndProps(event.target.checked, id, count)
                }}
                type="checkbox"
              ></input>
              <label
                htmlFor={`checkboxVariant${index}`}
              >
                {variant}
              </label>
            </div>
          )
        })}
      </div>
    );
  }
};

CheckBoxQuestion.propTypes = {

};

export default CheckBoxQuestion;
