/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: "The basic amplifier in Wein bridge oscillator consists of",  ///// Write the question inside double quotes
      answers: {
        a: "CE stage followed by CC",                  ///// Write the option 1 inside double quotes
        b: "CC stage followed by CE",                  ///// Write the option 2 inside double quotes
        c: "CB stage followed by CE",                  ///// Write the option 3 inside double quotes
        d: "CE stage followed by CB"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },

    {
      question: "In a Wein bridge oscillator the RC elements of the bridge provide a",  ///// Write the question inside double quotes
      answers: {
        a: "No feedback",                  ///// Write the option 1 inside double quotes
        b: "Negative feedback",                  ///// Write the option 2 inside double quotes
        c: "Negative feedback at low frequency",                  ///// Write the option 3 inside double quotes
        d: "Positive feedback"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    }, 


    {
      question: "The crystal oscillator frequency is very stable due to ……………… of the crystal",  ///// Write the question inside double quotes
      answers: {
        a: "Rigidity",                  ///// Write the option 1 inside double quotes
        b: "Vibrations",                  ///// Write the option 2 inside double quotes
        c: "Low Q",                  ///// Write the option 3 inside double quotes
        d: "High Q"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },


    {
      question: "In an LC oscillator, the frequency of oscillator is ___________ L or C.",  ///// Write the question inside double quotes
      answers: {
        a: "Proportional to square of",                  ///// Write the option 1 inside double quotes
        b: "Directly proportional to",                  ///// Write the option 2 inside double quotes
        c: "Independent of the values of",                  ///// Write the option 3 inside double quotes
        d: "Inversely proportional to square root of"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },


    {
      question: "In a phase shift oscillator, the frequency determining elements are …………",  ///// Write the question inside double quotes
      answers: {
        a: "L and C",                  ///// Write the option 1 inside double quotes
        b: "R, L and C",                  ///// Write the option 2 inside double quotes
        c: "R and C",                  ///// Write the option 3 inside double quotes
        d: "None of the above"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },                                 ///// To add more questions, copy the section below 
    									                  ///// this line


    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////