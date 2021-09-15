var btns = document.querySelectorAll("#book-list .delete");

// NOTE: SOMETIMES WHEN MULTIPLE ELEMENTS ARE SELECTED FROM THE DOM, IT IS NECESSARY TO CONVERT THEM INTO AN ARRAY SO THAT DOM MANIPULATION METHODS CAN BE APPLIED

Array.from(btns).forEach((btn) => {
    btn.addEventListener("click", (e) => {
    
        const li = e.target.parentElement;

        li.parentNode.removeChild(li);


    })
})

//-----[PREVENT DEFAULT BEHAVIOUR]------------------------------------------------------------------------------------------

const link = document.querySelector("#page-banner a");

link.addEventListener('click', (e) => {
  e.preventDefault();
  console.log("Navigation to", e.target.textContent, "was prevented");
});



//-----[EVENT BUBBLING]----------------------------------------------------------------------------------------------------------------------

const list = document.querySelector("#book-list ul");

list.addEventListener("click", (e) => {
  if(e.target.className == "delete") {
      const li = e.target.parentElement;
      //li.parentNode.removeChild(li);
      //SINCE THE PARENT NODE OF LI IS UL
      list.removeChild(li);
  }
})


//-----[FORMS]-------------------------------------------------------------------------------------------------------------------------

// element = document.forms["id"]

const addForm = document.forms["add-vaccine"]

addForm.addEventListener("submit", (e) => {
  e.preventDefault;
  const value = addForm.querySelector('input[type="text"]').value; // GRABBING THE USER INPUT
  // console.log(value);

  // CREATING THE DOM ELEMENTS
  const li = document.createElement("li");
  const vaxName = document.createElement("span");
  const deleteBtn = document.createElement("span");

  // ADDING CONTENT
  vaxName.textContent = value;
  deleteBtn.textContent = "delete";
  
  // APPENDING THE ELEMENTS
  li.appendChild(vaxName);
  li.appendChild(deleteBtn);
  list.appendChild(li);

})


//----------------------------------------------------------------------------------------------------------------------------------------------------

