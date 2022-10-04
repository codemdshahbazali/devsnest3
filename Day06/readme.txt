!important(don't use it) > inline style > id level(100) >class level(010) > element level(001)

semantic html 

  main
  article - self sufficent /independent 
  section - represents a part of website
  header
  footer
  nav
  figure
  figureCation
  aside
  sideNav


  Color - 
    hex format - #fafafa
    rgb format - rgb(0, 0, 0)
    rgb format - rgba(0, 0, 34, 0.8)
    hsl format - hsl(hue-color, saturation-vibrant, lightness)
    hsl format - hsl(120deg 75% 43%)
    hsl format with opacity- hsl(120deg 75% 43% / 0.5)
    hsl format with opacity- hsl(120deg, 75%, 43%, 70%)


pseduo classes 
  :hover
  :visited - after we click the element
  :focus - when we tab into element

pseduo elements 
  ::after{ content: ''}
  ::before
  ::placeholder

position based layout

static - default

relative - positions element from where it would appear
(we can change position of even inline element)

absolute - it comes out of natural document flow. positions itself relative to it's parent or root element

fixed - fixes the element at a place

sticky - relative then fixed

left
right
top
bottom

By Default 
 z-index - auto - changes the order/stacking context
 position based element, we can apply z-index