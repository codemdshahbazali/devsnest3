display: grid

grid-template-rows -> specifies number of tracks and it's dimensions
grid-template-column -> specifies height of rows

gap
row-gap
column-gap

lines - columns/row lines
tracks - area between 2 lines is called track
grid cells - intersection of row and column level tracks

By default items are laid on rows


Intrisic values (auto min-content max-content fit-content)
-----------------------------------

grid-template-columns: auto auto auto;

This will distribute the space based on the content available in the individual columns
In above example the first 2 columns will get width based on their content.
The thrid column's content will be distributed on more than a line as it's content is more
Hence it takes as much space as available and then move the content to next line

auto utilizes the container width completely

grid-template-columns: min-content min-content min-content;
Here the columns will take the width of the word with maximum width

grid-template-columns: max-content max-content max-content;
This will put all the content in the same line without breaking it into different lines;
as it doesn't break things into new line, content can overflow to next line.

grid-template-columns: fit-content fit-content fit-content;
This will put all the content in the same line without breaking it into different lines;
But when it notices the columns can overflow the container then it breaks the word into next line

We can use these values even with widths


fractions
-----------------

/* grid-template-columns: 1fr 1fr 1fr; */
  /* grid-template-columns: 1fr 2fr 1fr; */
  /* grid-template-columns: 1fr 2fr 3fr; */
  /* grid-template-columns: repeat(3, 1fr); */
  /* grid-template-columns: 200px repeat(2, 1fr); */
  grid-template-columns: 200px repeat(2, 2fr 1fr);
  /*grid-template-columns: 200px repeat(2, 1fr 1fr); */

  minmax
  --------------

  .container {
  display: grid;
  grid-template-columns: repeat(3, 200px);
  grid-template-rows: 200px auto;
  /* grid-auto-flow: column; */
  gap: 16px;
  width: 1280px;
  border: 1px solid;
  /* writing-mode: vertical-lr; */
}
.container > div {
  background-color: lightcoral;
}

    grid-template-rows: 200px auto;

    resizes the second row so that it doesn't overflows the container

grid-template-columns: repeat(3, minmax(200px, 1fr));
grid-template-columns: repeat(3, minmax(200px, 300px));
minmax - allows use to mention minimum and maximum values for a column
This can even lead to container overflow


grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
auto-fill is used when we don't know the exact number of columns
this is help in fitting as many columns as possible in the container
once it exceeds the size of the container then it moves it to the next line

it adds empty grid items if the available space increases 200px.

auto-fit: adjust the grid items to fit into the container

Positioning the elements

positioning inside the whole container of all items
place-content: center start;
  align-content: center;
  justify-content: start;

position inside the grid item box
  justify-items: center;
  align-items: center;

  writing-mode: vertical-lr;
  changes the writing mode to verticle

  grid-auto-flow: column; // changing the flow of item from row to column

box-shadow: 3px 4px 18px 10px hsl(240deg 80% 90%);
 horizontal-offset -> determines the value of shadow on x axis
        positive value: towards right on x-axis
        negative value: towards left on x-axis
  vertical-offset -> determines the value of shadow on y axis
        positive value: towards downward on y-axis
        negative value: towards upward on y-axis
  
  blur: amount of blur of the shadow
  spread: amount of spread of shadow

  color - color of the shadow

  we can add multiple shadows by seperating them with comma
  inset: available for shadow inward

text-shadow: -3px -4px 33px red;

horizontal-offset -> determines the value of shadow on x axis
        positive value: towards right on x-axis
        negative value: towards left on x-axis
  vertical-offset -> determines the value of shadow on y axis
        positive value: towards downward on y-axis
        negative value: towards upward on y-axis
  
  blur: amount of blur of the shadow
  spread: it is not available
  color - color of the shadow
  inset: not available



image shadow (image show be transparent)

filter: drop-shadow(2px 4px 6px red);

horizontal-offset -> determines the value of shadow on x axis
        positive value: towards right on x-axis
        negative value: towards left on x-axis
vertical-offset -> determines the value of shadow on y axis
        positive value: towards downward on y-axis
        negative value: towards upward on y-axis
  
blur: amount of blur of the shadow

spread: it is not available
color - color of the shadow
inset: not available