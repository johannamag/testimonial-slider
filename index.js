const reviews = [
  {
    id: 1,
    testimonial: `“ I’ve been interested in coding for a while but never taken the
              jump, until now. I couldn’t recommend this course enough. I’m now
              in the job of my dreams and so excited about the future. ”`,
    author: "Tanya Sinclair",
    jobtitle: "UX Engineer",
    imageurl: "./media/image-tanya.jpg",
  },
  {
    id: 2,
    testimonial: `“ If you want to lay the best foundation possible I’d recommend taking this
              course.The depth the instructors go into is incredible.I now feel so
              confident about starting up as a professional developer.”`,
    author: "John Tarkpor",
    jobtitle: "Junior Front-end Developer",
    imageurl: "./media/image-john.jpg",
  },
];

const testimonial = document.getElementById("text");
const name = document.getElementById("author");
const job = document.getElementById("job");
const image = document.getElementById("img");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

function showPerson(person) {
  const item = reviews[person];
  image.src = item.imageurl;
  name.textContent = item.author;
  job.textContent = item.jobtitle;
  testimonial.textContent = item.testimonial;
}

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
