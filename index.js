
let myLibrary = [];

function Book(title,author) {
  // the constructor...
  this.title = title;
  this.author = author;
}

function addBookToLibrary() {
  // do stuff here
  myLibrary[myLibrary.length] = new Book(document.getElementById("title").value,document.getElementById('author').value);
}
/*
Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.
*/
function displayBooks()
{
  document.getElementById('divList').innerHTML= "";
  myLibrary.forEach(element => {
    document.getElementById('divList').innerHTML +=element.title +'--' + element.author + '<br>';
    
  });
}


displayBooks();




