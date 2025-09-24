const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");
  const icon = question.querySelector("i");

  question.addEventListener("click", () => {
    // Collapse other open answers
    faqItems.forEach(i => {
      if (i !== item) {
        i.querySelector(".faq-answer").style.maxHeight = null;
        i.querySelector(".faq-question i").classList.remove("fa-minus");
        i.querySelector(".faq-question i").classList.add("fa-plus");
      }
    });

    // Toggle current answer
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      icon.classList.remove("fa-minus");
      icon.classList.add("fa-plus");
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-minus");
    }
  });
});
