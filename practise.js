// dummy questions
const questions = [
    {
        question: "What is the capital city of Kenya?",
        answers: ["Nairobi", "Kisumu", "Nyeri"],
        correct: 0
    },
    {
        question: "What is the capital city of Nigeria?",
        answers: ["Port Harcout", "Abuja", "Lagos"],
        correct: 1
    },
    {
        question: "Who is the father of Christmas?",
        answers: ["Raila", "Fafa Bongo", "Mandela", "Santa", "Obama"],
        correct: 3
    },
    {
        question: "How many counties are there in Kenya?",
        answers: [10, 20, 30, 40, 50, 47, 54, 99, 72],
        correct: 5
    },
    {
        question: "How many countries are there in Africa?",
        answers: [45, 89, 54, 90, 25, 178, 36],
        correct: 2
    },
    {
        question: "Which is the biggest continent in the world?",
        answers: ["Asia", "America", "Africa", "Europe"],
        correct: 0
    },
    {
        question: "John Kramer once said?",
        answers: ["Life isnt a walk in the park", "Life isnt fair, but you play the cards you're dealt with", "Nothing"],
        correct: 1
    },
    {
        question: "Who is the strongest avenger in the MCU universe?",
        answers: ["Black widow", "Ironman", "Captain America", "Thor", "Hulk"],
        correct: 3
    },
    {
        question: "Who is the best avenger in the MCU universe?",
        answers: ["Black widow", "Ironman", "Captain America", "Thor", "Hulk"],
        correct: 2
    },
    {
        question: "Which of the following was not an allied power during world war 2?",
        answers: ["The US", "China", "The Soviet Union", "Germany", "The UK"],
        correct: 3
    },
]
let currQuestion = 0
let score = 0

function displayQuestion (){
//  get the element of question and assign it to the questions in the array
    document.getElementById('question').innerText = questions[currQuestion].question
 // get the answers in the array and assign it to a variable
    const answers = questions[currQuestion].answers
 //  iterate the answers array and get their value and index to display on the option div
      const answerOptions = answers.map((answer, index) => 
        `<button class="option" onclick=selectAnswer(${index})> ${answer}</button>` 
     ).join('');
 // assign the mapped items (answerOptions) into the div of options
     document.getElementById('options').innerHTML = answerOptions

}


// check if the selected option is correct and enbale the button to go to the next question and score the user if correct
function selectAnswer(index) {
    if (index === questions[currQuestion].correct){
        score ++
    }
    document.getElementById('next').disabled = false;
}

// go to the next question and if no more question display the answer
document.getElementById('next').addEventListener('click', () => {
    currQuestion ++
    if (currQuestion < questions.length) {
        displayQuestion();
        document.getElementById('next').disabled = true;
    } else {
        document.getElementById('result').innerHTML = `<p>Your Total Score is: ${score}/ ${questions.length}</p>`
    }
})
// })invoke the display question function
displayQuestion() 

