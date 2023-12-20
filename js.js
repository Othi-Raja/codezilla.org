
const flavoursContainer = document.getElementById('scroll-container');
const flavoursScrollWidth = flavoursContainer.scrollWidth;

let scrollDirection = 'forward';

window.addEventListener('load', () => {
  self.setInterval(() => {
    if (scrollDirection === 'forward') {
      if (flavoursContainer.scrollLeft !== flavoursScrollWidth) {
        flavoursContainer.scrollTo(flavoursContainer.scrollLeft + 1, 0,{
          behavior: "smooth"
        });
        
      } else {
        scrollDirection = 'backward';
      }
    } else if (scrollDirection === 'backward') {
      if (flavoursContainer.scrollLeft !== 0) {
        flavoursContainer.scrollTo(flavoursContainer.scrollLeft - 1, 0,{
          behavior: "smooth"
        });
      } else {
        scrollDirection = 'forward';
        
      }
    }
  }, 200);
});

 

function gform_link(){
  window.open("https://forms.gle/wxr2rPHsnPm83g4u5");
}

