document.addEventListener('DOMContentLoaded', () => {
   if (window.innerWidth >= 1024) {
      document.querySelector('.card-2').style.opacity = 1;
   
      setTimeout(() => {
         document.querySelector('.card-1').style.opacity = 1;
      }, 500);
   
      setTimeout(() => {
         document.querySelector('.card-3').style.opacity = 1;
      }, 1000);
   } else {
      document.querySelector('.card-1').style.opacity = 1;
   
      setTimeout(() => {
         document.querySelector('.card-2').style.opacity = 1;
      }, 500);
   
      setTimeout(() => {
         document.querySelector('.card-3').style.opacity = 1;
      }, 1000);
   }
})