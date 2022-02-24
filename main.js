// Question1 
const targetDiv = document.getElementById('answer1');
const btn = document.getElementById('question1');
btn.onclick = function () {
    if(targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";
    }else {
        targetDiv.style.display = "block";
    }
}

//Question2 
const question2 = document.getElementById('answer2');
const question2btn = document.getElementById('question2');
question2btn.onclick = function () {
    if(question2.style.display !== "none") {
        question2.style.display = "none";
    }else {
        question2.style.display = "block";
    }
} 
