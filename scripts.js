const notesContainer = document.querySelector(".notes-container");
const createButton = document.querySelector(".create-button");

// const notesInput = document.querySelectorAll(".notes-input");

// ***********************************************************

const showNotes = () => {

    notesContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();

// ***********************************************************

createButton.addEventListener('click',() => {

    let inputbox = document.createElement("p");
    inputbox.className = "notes-input";
    inputbox.setAttribute("contenteditable",true);

    let deleteImg = document.createElement("img");
    deleteImg.src = 'assets/delete.png';

    notesContainer.appendChild(inputbox).appendChild(deleteImg);

    // updateStorage();

})

// *****************************************************

const updateStorage = (() => {

    localStorage.setItem('notes', notesContainer.innerHTML);

})

// *****************************************************

notesContainer.addEventListener('click',(e) => {

    if(e.target.tagName === "IMG"){

        e.target.parentElement.remove();
        updateStorage();
    }

    else if(e.target.tagName === "P"){

        const notes = document.querySelectorAll(".notes-input");

        notes.forEach((n) => {

            n.onkeyup = () => {

                updateStorage();
            }
        })
    }
})


