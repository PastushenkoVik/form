import React, { Component } from 'react';

import {
  HashRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Modal from '../Modal/Modal'
import QuestionList from '../QuestionList/QuestionList';
import Results from '../Results/Results';
import answers from '../../api/answers.json';
import './HomePage.scss';

class HomePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      questions: [],
      showModal: false,
      userAnswers: null,
      isLoading: true,
    }

    fetch("https://gist.githubusercontent.com/Vladyslav223/6a0742f4c384a1b686ca54b35ccc7b8c/raw/3405f7a3579bb3ca9d6c139eaeafb97326a5380d/questions.json")
      .then(res => res.json())
      .then(questions => {
        this.setState({
          questions,
          isLoading: false
        });
      })
  }

  handleCancelClick = () => {
    this.setState({
      showModal: false,
    })
  }

  runAnswersCheck (userAnswers) {
    //запрос на ансверс
    //проверка questions.map в поле стейта answers keyAnswers[question.id]
    //при мапе сравнить question.answer и answer.right
    // 
    const keyAnswers = userAnswers.reduce( (result, answer ) => {
      result[answer.id] = answer;
     return result;
     },{} );

     this.state.questions.map(question => {
      const answer = keyAnswers[question.id];
      if (answer.right === question.answer) {
        console.log('rigth');
      } 
      })

     console.log(userAnswers, 'keyAnswers', keyAnswers);
  }

  handleSubmitClick = () => {
    this.setState({
      userAnswers: this.state.questions,      
    },() => this.runAnswersCheck(this.state.userAnswers)); 
       
  };


  handleSubmit = (event) => {
    event.preventDefault();
    const { questions } = this.state;
    let validate = questions.every(question => question.validate === true)
    if (validate) {
      this.setState({
        userAnswers: questions,
      }, () => {
        //console.log(this.state.answers);
       this.runAnswersCheck(this.state.userAnswers)});
    } else {
      this.setState({
        showModal: true,
      });
    }
  }

  handleChange = (obj) => {
    this.setState(prevState => ({
      ...prevState,
      questions: this.state.questions.map((question) => question.id !== obj.id ? question : {
        ...question,
        answer: obj.answer,
        validate: obj.validate,
        id: obj.id,
      })
    }))
  }

  render() {
    const { validate, questions, isLoading, userAnswers } = this.state;
    //console.log(questions,'questions', answers);
    //if (isLoading) return <div>...Loading</div>;

    if (userAnswers) {
      return (
        <HashRouter>
          <Redirect to="/results" />
        </HashRouter>
      )
    }
    //console.log('answersanswers', answers);
    return (
      <HashRouter>
        <div className="qestion-list">
          <Switch>
            <Route exact path="/" render={() => (
              <>
                <h1>JavaScript test</h1>
                <QuestionList questions={questions} handleChange={this.handleChange} />
                <button
                  type="submit"
                  onClick={this.handleSubmit}
                >
                  Ответить
                </button>
                {this.state.showModal
                  && (
                    <Modal
                      handleSubmitClick={this.handleSubmitClick}
                      handleCancelClick={this.handleCancelClick}
                    />
                  )}
              </>
            )} />
            <Route path="/results" render={() => (
              <>
                <h1>Results</h1>
                <QuestionList disabled={true} questions={questions}  />
              </>
            )} />
          </Switch>
        </div>
      </HashRouter>

    )
  }
}

export default HomePage;
