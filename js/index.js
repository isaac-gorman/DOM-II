// Your code goes here

// mouseover - 1
let getHeader = document.querySelector(".main-navigation");
getHeader.addEventListener('mouseover', function callback(event){
  event.target.style.backgroundColor = "lightpink";
})

// mouseleave - 2
getHeader.addEventListener('mouseleave', function callback(event){
  event.target.style.backgroundColor = "white";
})

let getNav = document.querySelector('.nav-container');
getNav.addEventListener('mouseover', function callback(event){
  event.stopPropagation();
})



// wheel - 3
function zoom(event) {
  event.preventDefault();

  scale += event.deltaY * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(.125, scale), 4);

  // Apply scale transform
  getImg.style.transform = `scale(${scale})`;
}

let scale = 1;
let getImg = document.querySelector('img');
getImg.addEventListener('wheel', zoom);
// getImg.onwheel = zoom;

// drag - 4
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let grabBody = document.querySelector('body');
let banner = document.createElement('div');

banner.style.height = '140px';
banner.style.backgroundColor = 'lightblue';
banner.style.display = "flex";
banner.style.justifyContent = "center";
banner.style.alignItems = "center";

grabBody.prepend(banner);

let ctaLink = document.createElement('a');
ctaLink.setAttribute('href', "drag.html")
ctaLink.textContent = "✈️ Click Here To Fly Today ✈️";
ctaLink.style.fontSize = "3rem";
ctaLink.style.textDecoration = "none";
ctaLink.style.color = "white"

banner.prepend(ctaLink);


