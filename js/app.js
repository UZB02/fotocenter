const burger = document.querySelector(".burger");
const right = document.querySelector(".right");
const tugma = document.querySelectorAll(".onBtn");
const Line1 = document.querySelector(".line1");
const Line2 = document.querySelector(".line2");
const Line3 = document.querySelector(".line3");

const Contact = document.querySelector('.conTact');
const Quti = document.querySelector('.quti');

Contact.addEventListener('click', () => {
  Quti.classList.toggle('block');
});

// Contact.addEventListener.apply('click', () => {
//   right.classList.remove('active');
// })

for (let i = 0; i < tugma.length; i++) {
  const element = tugma[i];

  element.addEventListener("click", () => {
    right.classList.remove("active");
    Line1.classList.remove("hover1")
    Line2.classList.remove("hover2")
    Line3.classList.remove("hover3")
    Quti.classList.remove('block')
  });
  console.log(element);
}

burger.addEventListener("click", () => {
  Line1.classList.toggle("hover1");
  Line2.classList.toggle("hover2");
  Line3.classList.toggle("hover3");
});

burger.addEventListener("click", () => {
  right.classList.toggle("active");
});

