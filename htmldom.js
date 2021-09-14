//*************** DOM MANIPULATION AND EVENT HANDLING *****************//

// WHEN YOUR HTML CODE IS PARSED IN THE WEB BROWSER, IT IS CONVERTED
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

// APPEND IS USED TO ADD THE ELEMENT TO THE DOM

// 
parentNode.appendChild(childNode) 
// This appends childNode as the last child of parentNode

// INSERTBEFORE
parentNode.insertBefore(newNode, referenceNode) 
// This inserts newNode into parentNode before referenceNode

// REMOVECHILD
// This removes child from parentNode on the DOM and returns reference to child
parentNode.removeChild(child) 


// QUERY SELECTORS ARE USED TO TARGET THE NODES TO BE MANIPULATED

// element.querySelector(selector)
// returns reference to the first match of selector

// element.querySelectorAll(selectors)
// returns a “nodelist” containing references to all of the matches of the selectors

const container = document.querySelector('#container');
// select the #container div 

console.dir(container.firstElementChild);                      
// select the first child of #container => .display

const controls = document.querySelector('.controls');   
// select the .controls div

console.dir(controls.previousElementSibling);                  
// selects the prior sibling => .display



