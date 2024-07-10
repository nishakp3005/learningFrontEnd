const btns = document.querySelectorAll(".question");

btns.forEach((btn) => {
    btn.addEventListener("click", function () {
        const plusIcon = this.querySelector(".icon-plus");
        const minsIcon = this.querySelector(".icon-minus");
        const answer = this.nextElementSibling;

        const allAnswers = document.querySelectorAll('.ans');
        allAnswers.forEach(otherAnswer => {
            if (otherAnswer !== answer && otherAnswer.classList.contains('active')) {
                otherAnswer.classList.remove('active');
                otherAnswer.style.maxHeight = null;
                otherAnswer.previousElementSibling.querySelector('.icon-plus').style.display = 'block';
                otherAnswer.previousElementSibling.querySelector('.icon-minus').style.display = 'none';
            }
        });
        answer.classList.toggle('active');
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            plusIcon.style.display = "block";
            minsIcon.style.display = "none";
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
            plusIcon.style.display = "none";
            minsIcon.style.display = "block";
        }
    });
});