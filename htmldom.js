//*************** DOM MANIPULATION AND EVENT HANDLING *****************//

// WHEN A WEB PAGE IS LOADED IN THE BROWSER , THE HTML CODE IS PARSED AND CONVERTED
// TO THE DOM

// The DOM (or Document Object Model) is a tree-like representation of 
// the contents of a webpage - a tree of “nodes” with different 
// relationships depending on how they’re arranged in the HTML document.


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

// CAPTURING ELEMENTS FROM THE DOM USING IDS, CLASSES, AND TAGS
document.getElementById
document.getElementsByClassName
document.getElementsByTagName


// APPENDCHILD => USED TO ADD AN ELEMENT TO THE DOM
parentNode.appendChild(childNode) 
// This appends childNode as the last child of parentNode

// REMOVECHILD => USED TO REMOVE AN ELEMENT FROM THE DOM
// This removes child from parentNode on the DOM and returns reference to child
parentNode.removeChild(child) 


// INSERTBEFORE
parentNode.insertBefore(newNode, referenceNode) 
// This inserts newNode into parentNode before referenceNode



// QUERY SELECTORS => USED TO TARGET THE NODES IN THE DOM TO BE MANIPULATED

document.querySelector(selector)
// returns reference to the first match of selector

document.querySelectorAll(selectors)
// returns a “nodelist” containing references to all of the matches of the selectors
//THIS CAN BE USED TO QUERY ALL OF THE LI ELEMENTS IN A LIST

const container = document.querySelector('#container');
// selects the #container div and assigns it to "container"



// NODES
element.nodeType
element.nodeName
element.hasChildNodes // RETURNS TRUE OR FALSE

// CLONING A NODE
element.cloneNode(True)
// TRUE WILL CLONE ALL OF THE NESTED CONTENT WITHIN THE ELEMENT
// FALSE WILL ONLY CLONE THE OVERALL ELEMENT IGNORING THE CONTENT WITHIN IT

// const clonedBanner = banner.cloneNode(true);
// console.log(clonedBanner);



//-----[DOM TRAVERSAL]---------------------------------------------------------

// TRAVERSING UPWARDS
element.parentNode
element.parentElement

// TRAVERSING DOWNWARDS
element.childNodes //THIS WILL RETURN LINE BREAKS AS "TEXT" NODES
element.children // THIS WILL ONLY RETURN CHILD ELEMENTS 

// TRAVERSAL BETWEEN SIBLING ELEMENETS

element.nextSibling // THIS WILL RETURN LINE BREAKS AS "TEXT" NODES
element.nextElementSibling

element.previousSibling // THIS WILL RETURN LINE BREAKS AS "TEXT" NODES
element.previousElementSibling


//-----[REMOVING CONTENT]-------------------------------------------------------------------------





//=====[EVENT LISTENERS]--------------------------------------------------------------------------

var h2 = document.querySelector("#book-list h2")

h2.addEventListener("click", (e) => {
  console.log(e.target); // OCCURS ON 1ST CLICK
  console.log(e); // OCCURS ON 2ND CLICK
})

// 1ST PARAMETER: THE NAME OF THE EVENT
// 2ND PARAMETER: THE CALLBACK FUNCTION
// THE CALLBACK FUNCTION WILL BE EXECUTED WHEN THE EVENT OCCURS
// e - EVENT PARAMETER
// target TELLS WHAT ELEMENT IS BEING CLICKED


//-------------------------------------------------------------------------------------------------

console.dir(container.firstElementChild);                      
// selects the first child of #container => .display

const controls = document.querySelector('.controls');   
// selects the .controls div

console.dir(controls.previousElementSibling);                  
// selects the prior sibling => .display

 
