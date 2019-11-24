runAnswersCheck () {
    //запрос на ансверс
    //проверка questions.map в поле стейта answers keyAnswers[question.id]
    //при мапе сравнить question.answer и answer.right
    // 
    const keyAnswers = answers.reduce( (result, answer ) => { 
      result[answer.id] = answer;
     return result;
     },{} );
  }
