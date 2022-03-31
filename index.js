console.log('Today we are creatig our 2nd project "Happy Library" ')

// Construtor

function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display Constructor

function Display() {
    // Here we can directly add and call(use) methods(functions) but, here we are using different approach. 
}

// Add methods to Display prototype  [By doing this we are adding methods(simply functions) in Display construtor object.]

Display.prototype.add = function (book) {
    // console.log("We are adding your form please wait...");

    let uiString = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                        </tr>`
                        
                        tableBody.innerHTML += uiString;
                    }
                    
                    // Implement the clear function
                    
                    Display.prototype.clear = function () {
                        let bookLibrary = document.getElementById("bookLibrary");
    bookLibrary.reset();
}

// Implement the validate function

Display.prototype.validate = function (book) {
    if (book.name.length <= 0 || book.author.length <= 0) {
        return false;
        
    }
    else {
        return true;
    }
}
// Add Submit Event listener to form
let bookLibrary = document.getElementById("bookLibrary");
bookLibrary.addEventListener("submit", formSubmit);

function formSubmit(e) {
    
    e.preventDefault();
    console.log("Your form has been submitted.");
    
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('authorName').value;
    
    let horror = document.getElementById("horror");
    let action = document.getElementById("action");
    let adventure = document.getElementById("adventure");
    
    let type;
    if (horror.checked) {
        type = horror.value;
    }
    else if (action.checked) {
        type = action.value;
    }
    else if (adventure.checked) {
        type = adventure.value;
    }

    let book = new Book(name, author, type);
    // console.log(book);

    // let edit = new Display();      // Here we just created [edit object using Display constructor object.]
    // edit.add(book);                // We are calling functions present in display construtor.

    let edit = new Display();

    if (edit.validate(book)) {
        edit.add(book);
        edit.clear();
        let validInput = `<div class="alert alert-success mx-3">
                            <strong>Success : </strong> Your entered data has been successfully added.
                          </div>
                          `

        alertMessage.innerHTML = validInput;

    setTimeout(function() {
        alertMessage.innerHTML = "";
    }, 5000);
    
}
else {
    let alertMessage = document.getElementById("alertMessage")
    let invalidInput = `<div class="alert alert-danger mx-3">
                         <strong>Sorry : </strong> You have entered invalid input, please type valid input and try again.
                        </div>
                        `
    alertMessage.innerHTML = invalidInput;

    setTimeout(function() {
        alertMessage.innerHTML = "";
    }, 5000);
}
}                                                                                                                                                                                                         