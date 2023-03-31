
var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "Which Of The Following is not a Metal?",
    "options": [
    {
    "a": "Gold",
    "b": "Resin",
    "c": "Glass",
    "d": "Silver"
    }
    ],
    "answer": "Resin",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": ")Your blood type is determined by the genes you inherit from your parents:?",
    "options": [
    {
    "a": "True",
    "b": "False"
    
    }
    ],
    "answer": "True",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "What type of whale is the biggest animal in the world?",
    "options": [
    {
    "a": "Elephant",
    "b": "Blue Whale",
    "c": "Humpbacked Whale"
    }
    ],
    "answer": "Blue Whale",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "Which Instrument is used For Measuring Speed",
    "options": [
    {
    "a": "Caliper",
    "b": "Feeler Gauge",
    "c": "Odometer",
    "d": "Anemometer    
    }
    ],
    "answer": "Anemometer",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "LPG(Liquefied Petroleum Gas) is mainly a mixture of which gases?",
    "options": [
    {
    "a": "Propane and Butane",
    "b": "Methane and Propene",
    "c": "Hydrocarbon gas liquids",
    }
    ],
    "answer": "Propane and Butane",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "Which structure of the eye is the most sensitive but contains no blood vessels?",
    "options": [
    {
    "a": "Pupil",
    "b": "cornea",
    "c": "Iris"
    }
    ],
    "answer": "cornea",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "Which layer of planet Earth is made up of tectonic plates:",
    "options": [
    {
    "a": "Mantle",
    "b": "Outer Core",
    "c": "Crust"
    }
    ],
    "answer": "Crust",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "How many hearts does an Octopus Have?",
    "options": [
    {
    "a": "Four",
    "b": "One",
    "c": "Three"
    }
    ],
    "answer": "Three",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "What is the lifespan of a dragonfly?",
    "options": [
    {
    "a": "24 Hours",
    "b": "24 Days",
    "c": "1 Hour"
    }
    ],
    "answer": "24 Hours",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question": "How many dots appear on a pair of dice?",
    "options": [
    {
    "a": "42",
    "b": "16",
    "c": "12"
    }
    ],
    "answer": "42",
    "score": 0,
    "status": ""
    },
    {
    "id": 11,
    "question": "What is acrophobia a fear of?",
    "options": [
    {
    "a": "Flying",
    "b": "Spiders",
    "c": "Drowning"
    }
    ],
    "answer": "Flying",
    "score": 0,
    "status": ""
    },
    {
    "id": 12,
    "question": "Where is the strongest human muscle located?",
    "options": [
    {
    "a": "Eyes",
    "b": "Jaw",
    "c": "Thigh"
    }
    ],
    "answer": "Jaw",
    "score": 0,
    "status": ""
    },
    {
    "id": 13,
    "question": "What is the Percentage of Earth’s Surface covered by India?",
    "options": [
    {
    "a": "5.6%",
    "b": "2.4%",
    "c": "5%"
    }
    ],
    "answer": "2.4%",
    "score": 0,
    "status": ""
    },
    {
    "id": 14,
    "question": "What is the Full Form of UNESCO?",
    "options": [
    {
    "a": "United Nations Educational , Systematic and Corporal Organization",
    "b": "United Nations Educational, Scientific and Cultural Organisation"
    }
    ],
    "answer": "United Nations Educational, Scientific and Cultural Organisation",
    "score": 0,
    "status": ""
    },
    {
    "id": 15,
    "question": "What planet is closest to the sun?",
    "options": [
    {
    "a": "Neptune",
    "b": "Venus",
    "c": "Mercury"
    }
    ],
    "answer": "Mercury",
    "score": 0,
    "status": ""
    },
   
    ]
    }
    var quizApp = function () {
    this.score = 0;
    this.qno = 1;
    this.currentque = 0;
    var totalque = quiz.JS.length;
    this.displayQuiz = function (cque) {
    this.currentque = cque;
    if (this.currentque < totalque) {
    $("#tque").html(totalque);
    $("#previous").attr("disabled", false);
    $("#next").attr("disabled", false);
    $("#qid").html(quiz.JS[this.currentque].id + '.');
    $("#question").html(quiz.JS[this.currentque].question);
    $("#question-options").html("");
    for (var key in quiz.JS[this.currentque].options[0]) {
    if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
    $("#question-options").append(
    "<div class='form-check option-block'>" +
    "<label class='form-check-label'>" +
    "<input type='radio' class='form-check-input' name='option' id='q" + key + "' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
    quiz.JS[this.currentque].options[0][key] +
    "</span></label>"
    );
    }
    }
    }
    if (this.currentque <= 0) {
    $("#previous").attr("disabled", true);
    }
    if (this.currentque >= totalque) {
    $('#next').attr('disabled', true);
    for (var i = 0; i < totalque; i++) {
    this.score = this.score + quiz.JS[i].score;
    }
    return this.showResult(this.score);
    }
    }
    this.showResult = function (scr) {
    $("#result").addClass('result');
    $("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
    for (var j = 0; j < totalque; j++) {
    var res;
    if (quiz.JS[j].score == 0) {
    res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
    } else {
    res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
    }
    $("#result").append(
    '<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
    '<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
    '<div class="last-row"><b>Score:</b> &nbsp;' + res +
    '</div>'
    );
    }
    }
    this.checkAnswer = function (option) {
    var answer = quiz.JS[this.currentque].answer;
    option = option.replace(/</g, "&lt;") //for <
    option = option.replace(/>/g, "&gt;") //for >
    option = option.replace(/"/g, "&quot;")
    if (option == quiz.JS[this.currentque].answer) {
    if (quiz.JS[this.currentque].score == "") {
    quiz.JS[this.currentque].score = 1;
    quiz.JS[this.currentque].status = "correct";
    }
    } else {
    quiz.JS[this.currentque].status = "wrong";
    }
    }
    this.changeQuestion = function (cque) {
    this.currentque = this.currentque + cque;
    this.displayQuiz(this.currentque);
    }
    }
    var jsq = new quizApp();
    var selectedopt;
    $(document).ready(function () {
    jsq.displayQuiz(0);
    $('#question-options').on('change', 'input[type=radio][name=option]', function (e) {
    //var radio = $(this).find('input:radio');
    $(this).prop("checked", true);
    selectedopt = $(this).val();
    });
    });
    $('#next').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
    jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(1);
    });
    $('#previous').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
    jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(-1);
    });
