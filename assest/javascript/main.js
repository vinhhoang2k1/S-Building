anime({
   targets: '.section-2 .slogan',
   translateX: [-500, 0],
   delay: 100,
   easing: 'easeInOutSine'
});
anime({
   targets: '.section-2 .mobile',
   translateY: [-500, 0],
   delay: 500,
   easing: 'easeInOutSine'
});

window.addEventListener("scroll", () => {
   const currentPoint = window.scrollY
   switch (currentPoint) {
      case 200:
         anime({
            targets: '.section-3 .slogan',
            translateX: [-1000, 0],
            delay: 500,
            easing: 'easeInOutSine'
         });
         anime({
            targets: '.section-3 .mobile',
            translateX: [1000, 0],
            delay: 500,
            easing: 'easeInOutSine'
         });
      case 800:
         anime({
            targets: '.section-4 .category-card',
            translateY: [500, 0],
            delay: anime.stagger(400)
         });
      case 2000:
         anime({
            targets: '.section-6 .feature-item',
            translateX: [-500, 0],
            delay: anime.stagger(400)
         });
         anime({
            targets: '.section-6 .image',
            translateX: [500, 0],
            delay: anime.stagger(1000)
         });
      case 2700:
         anime({
            targets: '.section-7 ',
            translateY: [500, 0],
            delay: anime.stagger(5000),
            easing: 'easeInOutSine'

         });

   }
})