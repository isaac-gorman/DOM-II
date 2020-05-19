// grab the plane
let grabplane = document.querySelector('.plane');

grabplane.addEventListener('mousedown', function(event){
  event.target.setAttribute("src", "img/flying.svg")
})


grabplane.addEventListener('mouseout', function(event){
  event.target.setAttribute("src", "img/landed.svg")
})


// let grabHolder = document.querySelectorAll(".holderZone")

// // grabHolder.addEventListener('mouseover', function(event){
// //   event.target.style.border = '5px solid red';
// // }, false )



var dragged;
// events fired on the dragged target

document.addEventListener('drag', function(event){

}, false);

document.addEventListener("dragstart", function(event){
  // store a ref. on dragged elem
  dragged = event.target;
  // make it half transparent
  // event.target.style.opacity = .5;
}, false);
// Q: What is the boolean value that is being passed as the third argument of the addEventListener method?
// - A: The 3rd argument is just an one of the many "options" objects that can specifiy characteristic about the event listener... unclear as to what type of options it is yet... 

document.addEventListener("dragend", function(event){
  // reset the transparency
  event.target.style.opacity = "";
}, false );

// event fired on the drop targets 
document.addEventListener("dragover", function(event){
  // prevent default to allow drop
  event.preventDefault();
});

document.addEventListener("dragenter", function(event){
  // highlighting potential drop target when the draggable element enters it
  if(event.target.className == "dropzone"){
    event.target.style.background = "lightblue";
  }
}, false);

document.addEventListener("dragleave", function(event) {
    // reset background of potential drop target when the draggable element leaves it
  if (event.target.className == "dropzone"){
    event.target.style.background = "";
  }
}, false);


document.addEventListener("drop", function(event){
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged elem to the selected drop target
  if (event.target.className == "dropzone"){
    event.target.style.background = "";
    dragged.parentNode.removeChild(dragged);
    event.target.appendChild(dragged);
  }
}, false);









