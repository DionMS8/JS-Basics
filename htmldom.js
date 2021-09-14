//*************** DOM MANIPULATION AND EVENT HANDLING *****************//

// WHEN A WEB PAGE IS LOADED IN THE BROWSER , THE HTML CODE IS PARSED AND CONVERTED
// TO THE DOM

// The DOM (or Document Object Model) is a tree-like representation of 
// the contents of a webpage - a tree of “nodes” with different 
// relationships depending on how they’re arranged in the HTML document.

/*
<style>
   .custom-class {
        color: pink;
    }
</style> 
*/

<div id="container">              
  <div class="display"></div>
  <div class="controls"></div>
</div>

// The #container div is a parent, with 2 children on the next level, 
// each on their own “branch”. The children are considered siblings. 

myElement = document.createElement('tagName', [options])
const div  = document.createElement('div')

// THIS CREATES THE ELEMENT IN MEMORY SO THAT IT CAN BE MANIULATED BEFORE
// BEING INSERTED INTO THE DOM


// APPENDCHILD => USED TO ADD AN ELEMENT TO THE DOM
parentNode.appendChild(childNode) 
// This appends childNode as the last child of parentNode

// REMOVECHILD => USED TO REMOVE AN ELEMENT FROM THE DOM
// This removes child from parentNode on the DOM and returns reference to child
parentNode.removeChild(child) 


// INSERTBEFORE
parentNode.insertBefore(newNode, referenceNode) 
// This inserts newNode into parentNode before referenceNode


// QUERY SELECTORS ARE USED TO TARGET THE NODES IN THE DOM TO BE MANIPULATED

// document.querySelector(selector)
// returns reference to the first match of selector

// document.querySelectorAll(selectors)
// returns a “nodelist” containing references to all of the matches of the selectors

const container = document.querySelector('#container');
// selects the #container div and assigns it to "container"

console.dir(container.firstElementChild);                      
// selects the first child of #container => .display

const controls = document.querySelector('.controls');   
// selects the .controls div

console.dir(controls.previousElementSibling);                  
// selects the prior sibling => .display



