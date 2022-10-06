The visible area is called viewport

types: print, screen, all

// when on print screen
@media print{

}

@media screen and (orientation:potrait) {
  body::after {
    content: "Potrait"
  }
}

@media screen and (orientation:landscape) {
  body::after {
    content: "landscape"
  }
}

// maximum width can be 500px 
@media (max-width: 500px) {
  body {
    background-color: lightgreen;
  }
}

//minimum width to start with is 800px
@media (min-width: 800px) {
  body {
    background-color: lightgreen;
  }
}

//combining two properties
@media (min-width: 800px) and (orientation: landscpae){
  body {
    background-color: lightgreen;
  }
}

a:last-child{
  margin-right: revert;
}

transform 

transition - allows us to move from one state to another
transition works when any property changes when we transition from one state to another
like value of height changing while moving to hover state then we can put a transition on height.

.box {
  background-color: aquamarine;
  width: 300px;
  height: 300px;
  margin: 32px auto;
  transition: transform 0.5s 1s ease-in-out;
}
.box:hover {
  transform: scale(1.5, 0.5);
}

transition: transform 0.5s 1s ease-in-out;
    transition-property: transform;
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
    transition-delay: 1s;

animation

animation: name duration timing-function delay iteration-count direction fill-mode;
animation: rotation 0.5s ease-in-out 2s infinite alternate;
    animation-duration: 0.5s;
    animation-timing-function: ease-in-out;
    animation-delay: 2s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-fill-mode: none;
    animation-play-state: running;
    animation-name: rotation;
  
/* @keyframes rotation {
  from {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(45deg);
  }

  50% {
    transform: rotate(90deg);
  }

  75% {
    transform: rotate(180deg);
  }

  to {
    transform: rotate(360deg);
  }
} */

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(45deg);
  }

  50% {
    transform: rotate(90deg);
  }

  75% {
    transform: rotate(180deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.box {
  background-color: aquamarine;
  width: 300px;
  height: 300px;
  margin: 32px auto;
  animation: rotation 0.5s ease-in-out 2s infinite alternate;
  /* animation: name duration timing-function delay iteration-count direction fill-mode; */
}


Custom CSS properties

Variables should be defined inside any rule
Variable defined in a rule will be accessible to all it's children

:root {
  --background-clr: lightgray;
  --text-clr: black;
  --fs: 1.2rem;
}

body {
  background-color: var(--background-clr);
  color: var(--text-clr);
  font-size: var(--fs);
}

// refers-color-scheme allows us to change theme according to browser/system preference
@media (prefers-color-scheme: dark) {
  body {
    --background-clr: black;
    --text-clr: white;
  }
}

//Flexbox
