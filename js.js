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
        flavoursContainer.scrollTo(flavoursContainer.scrollLeft + 1, 0);
        
      } else {
        scrollDirection = 'backward';
      }
    } else if (scrollDirection === 'backward') {
      if (flavoursContainer.scrollLeft !== 0) {
        flavoursContainer.scrollTo(flavoursContainer.scrollLeft - 1, 0);
      } else {
        scrollDirection = 'forward';
      }
    }
  }, 50);
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// create the smooth scroller FIRST!
const smoother = ScrollSmoother.create({
  content: "#scrollsmoother-container",
  smooth: 3,
  normalizeScroll: true,
  ignoreMobileResize: true,
	effects: true,
  //preventDefault: true,
  //ease: 'power4.out',
  //smoothTouch: 0.1, 
});
