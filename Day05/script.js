// const handleClick = () => {
//   alert("button clicked");
// };

// document.getElementById("clickMe").onclick = handleClick;

// recommeded way
// document.getElementById("clickMe").addEventListener("click", handleClick);

// function handleMoveHover(event) {
//   console.log(event);
// }

// document.getElementById("start").addEventListener("click", () => {
//   document.addEventListener("mouseover", handleMoveHover);
// });
// document.getElementById("stop").addEventListener("click", () => {
//   document.removeEventListener("mouseover", handleMoveHover);
// });

// document.getElementById("username").addEventListener("keydown", (event) => {
//   //   console.log(event);
//   console.log("KeyDown");
// });

// document.getElementById("username").addEventListener("keypress", (event) => {
//   //   console.log(event);
//   console.log("KeyPress");
//   // stops 2 from being pressed
//   if (event.key === "2") {
//     event.preventDefault();
//   }
// });

// document.getElementById("username").addEventListener("keyup", (event) => {
//   //   console.log(event);
//   console.log("KeyUp");
// });

// // When we tab in, focus event happens
// document.getElementById("username").addEventListener("focus", (event) => {
//   //   console.log(event);
//   console.log("Focus event happened");
// });

// // When we focus out or tab out blur event happens
// document.getElementById("username").addEventListener("blur", (event) => {
//   //   console.log(event);
//   console.log("Blur event happened");
// });

// document.addEventListener("DOMContentLoaded", () => {
//   document.querySelector(".parent").addEventListener(
//     "click",
//     function handleClick(e) {
//       console.log("Clicked parent", e.target);
//     },
//     true
//   );
//   document.querySelector(".child").addEventListener(
//     "click",
//     function handleClick(e) {
//       console.log("Clicked child", e.target);
//     },
//     true
//   );
//   document.querySelector(".grandchild").addEventListener(
//     "click",
//     function handleClick(e) {
//       console.log("Clicked grandchild", e.target);
//     },
//     true
//   );
// });

// accessing form values
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event.target);
    console.log(event.target.username.value);
    console.log(event.target.email.value);
    console.log(event.target.password.value);
  });

  document.querySelector("#email").addEventListener("input", (e) => {
    const emailElement = e.target;

    if (emailElement.validity.typeMismatch) {
      emailElement.setCustomValidity("Please enter an valid email address");
      emailElement.reportValidity();
    } else {
      emailElement.setCustomValidity("");
    }
  });
});
