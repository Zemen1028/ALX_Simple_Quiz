function checkAnswer() {
            let correctAnswer = "4"; // Correct answer

            let selectedOption = document.querySelector('input[name="quiz"]:checked'); // Get selected radio button
            if (selectedOption) {
                let userAnswer = selectedOption.value; // Get value of selected radio button

                let feedbackElement = document.getElementById("feedback");
                if (userAnswer === correctAnswer) {
                    feedbackElement.textContent = "Correct! Well done.";
                } else {
                    feedbackElement.textContent = "That's incorrect. Try again!";
                }
            } else {
                alert("Please select an answer before submitting."); // Ensure user selects an option
            }
        }

        document.getElementById("submit-answer").addEventListener("click", checkAnswer);
