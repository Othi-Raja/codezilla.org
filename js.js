// const flavoursContainer = document.getElementById('scroll-container');
// const flavoursScrollWidth = flavoursContainer.scrollWidth;

//  window.addEventListener('load', () => {
//    self.setInterval(() => {
//      if (flavoursContainer.scrollLeft !== flavoursScrollWidth) {
//        flavoursContainer.scrollTo(flavoursContainer.scrollLeft + 1, 0);
//      }
//    }, 15);
//  });


// const flavoursContainer = document.getElementById('scroll-container');
// const flavoursScrollWidth = flavoursContainer.scrollWidth;

// window.addEventListener('load', () => {
//   let scrollDirection = 1;

//   self.setInterval(() => {
//     if (scrollDirection === 1) {
//       if (flavoursContainer.scrollLeft !== flavoursScrollWidth) {
//         flavoursContainer.scrollTo(flavoursContainer.scrollLeft + 1, 0);
//       } else {
//         scrollDirection = -1;
//       }
//     } else {
//       if (flavoursContainer.scrollLeft !== 0) {
//         flavoursContainer.scrollTo(flavoursContainer.scrollLeft - 1, 0);
//       } else {
//         scrollDirection = 1;
//       }
//     }
//   }, 15);
// });
const flavoursContainer = document.getElementById('scroll-container');
const flavoursScrollWidth = flavoursContainer.scrollWidth;

let scrollDirection = 'forward';

window.addEventListener('load', () => {
  self.setInterval(() => {
    if (scrollDirection === 'forward') {
      if (flavoursContainer.scrollLeft !== flavoursScrollWidth) {
        flavoursContainer.scrollTo(flavoursContainer.scrollLeft + 1, 0,{
          behavior: 'smooth',
        });
       
      } else {
        scrollDirection = 'backward';
      }
    } else if (scrollDirection === 'backward') {
      if (flavoursContainer.scrollLeft !== 0) {
        flavoursContainer.scrollTo(flavoursContainer.scrollLeft - 1, 0,{
          behavior: 'smooth',
        });
        scroll({
          top: offsetTop,
          behavior: "smooth"
        });
      } else {
        scrollDirection = 'forward';
        
      }
    }
  },200);
});

 

function gform_link(){
  window.open("https://forms.gle/wxr2rPHsnPm83g4u5");}
// }
// const popup = document.querySelector(".popupBox");
// const close = document.querySelector(".close");

// window.onload = function () {
//   setTimeout(() => {
//     popup.style.display = "block";
//   }, 3000);
// };

// close.addEventListener("click", () => {
//   popup.style.display = "none";
// });


const load =document.querySelector(".loader");
window.onload = function(){
    load.style.display = 'none';
}
