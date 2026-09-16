"use strict";
function calculateScore() {
        var totalQuestions = 100;
        var checkedCount = document.querySelectorAll('input[type="checkbox"]:checked').length;
        var score = ((totalQuestions - checkedCount) / totalQuestions) * 100;
        
        // Hide everything
        document.getElementById("questions").style.display = "none";
        document.getElementById("buttonContainer").style.display = "none";

        // Show result & again button
        var scoreValue = Math.round(score);
        document.getElementById("result").innerHTML = "Your Rice Purity Score is:<br><span style='font-size: 72px; font-weight: bold; color: #FF1744; display:   block; margin-top: 15px;'>" + scoreValue + "</span>";
        document.getElementById("result").style.display = "block";
        document.getElementById("result").style.fontSize = "24px";
        document.getElementById("result").style.color = "black"; 
        document.getElementById("againBtn").style.display = "inline-block";
        window.scrollTo({ top: 200, behavior: 'smooth' });
    }

    function restartTest() {
        // Show everything back
        document.getElementById("questions").style.display = "block";
        document.getElementById("buttonContainer").style.display = "flex";
        document.getElementById("result").style.display = "none";
        document.getElementById("againBtn").style.display = "none";

        // Clear checkboxes
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => checkbox.checked = false);
    }

    function clearCheckboxes() {
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => checkbox.checked = false);
    }
