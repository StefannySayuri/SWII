function toggleAnswer(faqId) {
        var answer = document.getElementById(faqId);
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    }
