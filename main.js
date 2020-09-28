
// Dropdown Help Menu animation
$('#help').hover(function(){
    $('.cards').slideToggle(300);
});

// Variable declaration
// updating the number of cards remaining
var numText = document.querySelector("#num");
var num = 52;
var drawBtn = document.getElementById("drawCard");
var bool = true;

var exercises = document.getElementsByClassName("exerciseBtn");
var eDisplay = document.getElementById("exerciseTxt");

//update button colors on click
var burpees = $('#burpees');
var plank = $('#plank')
var pushups = $('#pushups');
var crunches = $("#crunches");
var squats = $("#squats");
var selected = false;

// update card image
var j = 0;
$("#drawCard").on('click', function(){
    //check to make sure we haven't reached the end of the workout
    if(num === 0){
        bool = false;
        alert("Congrats You've Completed The Workout!");
        reset();
        // $("#randomCard").attr("src", "CARDS/" + cardsArray[j]);
    }
    // check to make sure user has selected a workout
    if(selected === false){
        alert('Please select a workout before drawing a card!')
    }else{
        $("#randomCard").attr("src", "CARDS/" + cardsArray[j]);
        j++;
        num-=1;
        numText.textContent = num;
        
    }
    
});



$('#burpees').on('click', function(){
    selected = true;
    burpees.toggleClass('selected');
    plank.removeClass('selected');
    pushups.removeClass('selected');
    crunches.removeClass('selected');
    squats.removeClass('selected');
    var txt = burpees.text();
    $('#exerciseTxt').css('display', 'block');
    $('#exerciseTxt').text(txt);
    $("#exerciseImage").attr("src","burpee.jpg");    
});

$('#plank').on('click', function(){
    selected = true;
    burpees.removeClass('selected');
    plank.toggleClass('selected');
    pushups.removeClass('selected');
    crunches.removeClass('selected');
    squats.removeClass('selected');
    var txt = plank.text();
    $('#exerciseTxt').css('display', 'block');
    $('#exerciseTxt').text(txt);
    $("#exerciseImage").attr("src","plank.png");
});

$('#pushups').on('click', function(){
    selected = true;
    burpees.removeClass('selected');
    plank.removeClass('selected');
    pushups.toggleClass('selected');
    crunches.removeClass('selected');
    squats.removeClass('selected');
    var txt = pushups.text();
    $('#exerciseTxt').css('display', 'block');
    $('#exerciseTxt').text(txt);
    $("#exerciseImage").attr("src","pushup.jpg");
});

$('#crunches').on('click', function(){
    selected = true;
    burpees.removeClass('selected');
    plank.removeClass('selected');
    pushups.removeClass('selected');
    crunches.toggleClass('selected');
    squats.removeClass('selected');
    var txt = crunches.text();
    $('#exerciseTxt').css('display', 'block');
    $('#exerciseTxt').text(txt);
    $("#exerciseImage").attr("src","crunch.jpg");
});

$('#squats').on('click', function(){
    selected = true;
    burpees.removeClass('selected');
    plank.removeClass('selected');
    pushups.removeClass('selected');
    crunches.removeClass('selected');
    squats.toggleClass('selected');
    var txt = squats.text();
    $('#exerciseTxt').css('display', 'block');
    $('#exerciseTxt').text(txt);
    $("#exerciseImage").attr("src","squat.jpg");
});

// reset colors of buttons back to default
function removeClasses(){
    burpees.removeClass('selected');
    plank.removeClass('selected');
    pushups.removeClass('selected');
    crunches.removeClass('selected');
    squats.removeClass('selected');
}

// array declaration
var cardsArray = ["AC.jpg","2C.jpg","3C.jpg","4C.jpg","5C.jpg","6C.jpg","7C.jpg","8C.jpg","9C.jpg","10C.jpg","JC.jpg","QC.jpg","KC.jpg",
        "AD.jpg","2D.jpg","3D.jpg","4D.jpg","5D.jpg","6D.jpg","7D.jpg","8D.jpg","9D.jpg","10D.jpg","JD.jpg","QD.jpg","KD.jpg",
        "AC.jpg","2H.jpg","3H.jpg","4H.jpg","5H.jpg","6H.jpg","7H.jpg","8H.jpg","9H.jpg","10H.jpg","JH.jpg","QH.jpg","KH.jpg",
        "AC.jpg","2S.jpg","3S.jpg","4S.jpg","5S.jpg","6S.jpg","7S.jpg","8S.jpg","9S.jpg","10S.jpg","JS.jpg","QS.jpg","KS.jpg"];

// shuffle array
function shuffleArray(array){
    for(let i = array.length-1; i > 0; i--){
        const j = Math.floor(Math.random() * i);
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
}
}    




// Reset on Button Click
$("#resetBtn").on('click', function(){
    num = 52;
    numText.textContent = num;
    removeClasses();
    selected = false;
    j=0; //index of array reset
    shuffleArray(cardsArray);
    $("#randomCard").attr("src","backsideCard.png");
});


//used to call after user has completed workout
function reset(){
    num = 52;
    numText.textContent = num;
    removeClasses();
    j=0; //index of array reset
    shuffleArray(cardsArray);
    $("#randomCard").attr("src","backsideCard.png");
}