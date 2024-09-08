document.addEventListener("DOMContentLoaded", function () {
 const faqItems = document.querySelectorAll(".question-container")

 faqItems.forEach((item) => {
  const questionButton = item.querySelector(".question")
  const icon = questionButton.querySelector(".icon")

  questionButton.addEventListener("click", () => {
   const answer = item.querySelector(".answer")

   // Toggle active class for styling
   answer.classList.toggle("active")

   // Expand or collapse the answer
   if (answer.classList.contains("active")) {
    answer.style.maxHeight = answer.scrollHeight + "px"
    icon.textContent = "-" // Change icon to minus when expanded
   } else {
    answer.style.maxHeight = 0
    icon.textContent = "+" // Change icon to plus when collapsed
   }
  })
 })
})
