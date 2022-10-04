target property on the event object tells us the object on which this event was raised

event can be added to entire document as well.

sequence of key event 

    keydown -> keypress -> keyup

We can listen to multiple events on the same element

Event Bubbling -> When an event is triggered on an element, it bubbles up to all it's ancestors. The event that goes up is the same child event.
Event Capturing phase -> 
document.querySelector(".parent").addEventListener(
  "click",
  function handleClick(e) {
    console.log("Clicked parent", e.target);
  },
  true
);
document.querySelector(".child").addEventListener(
  "click",
  function handleClick(e) {
    console.log("Clicked child", e.target);
  },
  true
);
document.querySelector(".grandchild").addEventListener(
  "click",
  function handleClick(e) {
    console.log("Clicked grandchild", e.target);
  },
  true
);

//This event is triggered when all the element is loaded and is visible on the browser. Hence there won't be any error.
document.addEventListener("DOMContentLoaded", () => {}

//Difference between DOMContentLoaded and load events
The DOMContentLoaded event is fired when the document has been completely loaded and parsed, without waiting for stylesheets, 
images, and subframes to finish loading (the load event can be used to detect a fully-loaded page).