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