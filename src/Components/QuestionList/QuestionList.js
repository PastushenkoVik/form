import React, { Component } from 'react';

import './QuestionList.scss';

import answers from '../../api/answers.json'
import CheckBoxQuestion from '../Questions/CheckBoxQuestion/CheckBoxQuestion';
import NumberQuestion from '../Questions/NumberQuestion/NumberQuestion';
import RadioQuestion from '../Questions/RadioQuestion/RadioQuestion';
import SelectQuestion from '../Questions/SelectQuestion/SelectQuestion';
import TextQuestion from '../Questions/TextQuestion/TextQuestion';

export const questionTypes = {
  'text': TextQuestion,
  'checkbox': CheckBoxQuestion,
  'radio': RadioQuestion,
  'select': SelectQuestion,
  'number': NumberQuestion,
}

class QuestionList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      validate: '',     
    }
  }

  handleChange = (obj) => {
    //console.log('obj.answer', obj.answer);
    this.props.handleChange(obj);
  }  

  render() {
    const { disabled, questions } = this.props;    
    return (

      <form>
        {questions.map(question => {
          //const answer = answers.map(answer => answer[question.id] === answer.right);
          const { type, body, id, answer } = question;
          //console.log('answer', answer);
          
          let Component = questionTypes[type];
          return (
            <Component              
              value={answer}
              disabled={disabled}
              handleChange={this.handleChange}
              handleChange={this.handleChange}
              body={body}
              id={id}
              key={type + ' ' + id}
            />
          )
        })}

      </form>

    );
  }

}
export default QuestionList;