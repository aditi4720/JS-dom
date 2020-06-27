//Select the section with an id of container without using querySelector.
document.getElementById('container');

//Select the section with an id of container using querySelector.
document.querySelector('#container');

//Select all of the list items with a class of "second".
const list= document.getElementsByClassName('second');


//Select a list item with a class of third, but only the list item inside of the ol tag.
const item= document.getElementsByClassName('third');
item[1];
//OR
document.querySelector("ol .third");

//Give the section with an id of container the text "Hello!".

document.getElementById('container').textContent= "Hello";

//Add the class madocument.getElementById('container').textContent= "Hello"in to the div with a class of footer.

var footer= document.querySelector('.footer');
footer.className += "main";

//Remove the class main on the div with a class of footer.
var footer= document.querySelector('.footer');
footer.classList.remove("main");

//Create a new li element.
var newLi= document.createElement('li');


//Give the li the text "four".
newLi.innerHTML= "four";

//Append the li to the ul element.
var list= document.querySelector('ul');
list.appendChild(newLi);

//Loop over all of the list inside the ol tag and give them a background color of "green".

var ol_list= document.querySelectorAll("ol li");
for(i=0; i<ol_list.length; i++)
  {
    ol_list[i].style.backgroundColor ="green"
  }

//Remove the div with a class of footer.
var footer = document.querySelector(".footer");
footer.remove();