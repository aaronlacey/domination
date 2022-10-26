// 1. Write a function that puts a line 
//through the text of the first `<li>` in the 
//unordered "Arguments" list (`<ul`). Since this 
//function always does the same thing, it requires 
//no parameters!

function addStrikethrough() {
    let arguementItem1 = document.querySelector('li');
    arguementItem1.style.textDecoration = 'line-through';

}

addStrikethrough();


/* 3. Write a function that takes in a string 
representing an DOM element's `id` and a 
string representing a url. The function 
should set the image with that `id` to 
have that url as its image source.
4. Now use that function to set the three 
images in the Image Area section to show 
three images of your choice. You'll need 
three separate calls to your function!3. 
Write a function that takes in a string 
representing an DOM element's `id` and a 
string representing a url. The function 
should set the image with that `id` to 
have that url as its image source.
*/


function setImage(id, url) {
    let image = document.querySelector('#' + id);
    image.src = url;
    image.style.width = '100px';
    image.style.height = '100px';
}

setImage('image-1', 'https://www.tailorbrands.com/wp-content/uploads/2021/01/apple_logo_1988.jpg)');
    
setImage('image-2', 'https://cdn-icons-png.flaticon.com/512/61/61120.png');
        
setImage('image-3', 'https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo-2012-present.jpg');


/* This next function also doesn't require any 
parameters: write a function that always 
removes the first `<li>` from the Arguments `<ul>`
6. Now use it to remove the first two items from 
that list. You'll need to call it twice!
*/

function removeArguement(){
    let itemToRemove = document.querySelector('li');
    itemToRemove.remove();
}

removeArguement();
removeArguement();

/* Write a function that takes in two strings, 
one representing a font size and one representing 
an id, and sets the thing with that id to have 
that size for its text.
8. Try using it to change the size of any 
text on the page.
*/

function changeFontSize(size, id) {
    let fontSize = document.querySelector('#' + id);
    fontSize.style.fontSize = size;
}

changeFontSize('100px', 'lorem');
changeFontSize('50px', 'thing-1');


//Write a function that takes in a DOM element 
//and appends it to the Arguments `<ul>`.

function appendToArguments(element) {
    let argumentsList = document.querySelector('#arguments');
    argumentsList.appendChild(element);
}

// Let's use it! Create an image element in 
//Javascript and pass it into your function.

let image = document.createElement('img');
image.src = 'https://1000logos.net/wp-content/uploads/2021/05/Sony-logo.png'
image.style.width = '100px';
image.style.height = '100px';

appendToArguments(image);

//  Write a function that takes in an image element and 
//modifies its height to be 30 pixels.

function changeImageHeight(image) {
    image.style.height = '30px';
}
 // use change image height function to query an image element
 // and pass it into the function

let image2 = document.querySelector('#image-2');
changeImageHeight(image2);


// Write a function that takes in an element and gives it 
//the class `invisible`.

function makeInvisible(element) {
    element.classList.add('invisible');
}

//Now query an element on the page and pass it into that 
//function. You should see it disappear! 

let thing1 = document.querySelector('#thing-1');
makeInvisible(thing1);

//Write a function that takes in text and returns a new 
//`<li>` with the given text parameter as its `innerText`.

function createListItem(text) {
    let listItem = document.createElement('li');
    listItem.innerText = text;
    return listItem;
}

//Test it! Somewhere below this function, call it. Store the returned DOM element in a variable, then append it to the page (use your first function from part 2).

let newListItem = createListItem('This is a new list item');
appendToArguments(newListItem);

// Write a function that takes in two strings, one representing a header size and one some text, and returns a new header of that size (e.g., a '3' for the first parameter should result in an `<h3>`) with that text in it.

function createHeader(size, text) {
    let header = document.createElement('h' + size);
    header.innerText = text;
    return header;
}

//Test it! Somewhere below this function, call it. Store the returned DOM element in a variable, then append it to the page (use your first function from part 2).

let newHeader = createHeader(3, 'This is a new header');
appendToArguments(newHeader);

