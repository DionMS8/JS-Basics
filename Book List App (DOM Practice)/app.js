var btns = document.querySelectorAll("#book-list .delete");

// NOTE: SOMETIMES WHEN MULTIPLE ELEMENTS ARE SELECTED FROM THE DOM, IT IS NECESSARY TO CONVERT THEM INTO AN ARRAY SO THAT DOM MANIPULATION METHODS CAN BE APPLIED

Array.from(btns).forEach((btn) => {
    btn.addEventListener("click", (e) => {
    
        const li = e.target.parentElement;

        li.parentNode.removeChild(li);


    })
})

//-----[PREVENT DEFAULT BEHAVIOUR]--------------------------------------------------------

const link = document.querySelector("#page-banner a");

link.addEventListener('click', (e) => {
  e.preventDefault();
  console.log("Navigation to', e.target.textContent, 'was prevented");
});



//-----------------------------------------------------------------------------------------


