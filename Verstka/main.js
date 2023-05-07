
const sliderButton = document.querySelector('.slider__button');
const allBlocks = document.querySelector('.all__blocks');
const firstBlock = document.querySelector('.first');
const secondBlock = document.querySelector('.second');
const thirdBlock = document.querySelector('.third');

let currentBlock = 1;
const totalBlocks = 3;

sliderButton.addEventListener('click', () => {
   if (currentBlock < totalBlocks) {
      currentBlock++;
   } else {
      currentBlock = 1;
   }
   allBlocks.style.transform = `translateY(-${(currentBlock - 1) * firstBlock.clientHeight}px)`;
   allBlocks.style.transition = 'transform 0.5s ease-in-out';
});



const sliderButton2 = document.querySelector('.slider__button');
const thumb = document.querySelector('.slider__thumb');
const line = document.querySelector('.slider__scroll-line');
const firstNumInner = document.querySelector('.first__num-inner');

let currentNumber = 1;

sliderButton2.addEventListener('click', () => {
   const thumbHeight = thumb.offsetHeight;
   const lineHeight = line.offsetHeight;
   const maxThumbTop = lineHeight - thumbHeight;

   let currentThumbTop = parseInt(thumb.style.transform.split(',')[1], 10);

   if (currentThumbTop < maxThumbTop) {
      currentThumbTop += thumbHeight;
      currentNumber++;
   } else {
      currentThumbTop = 0;
      currentNumber = 1;
   }

   thumb.style.transform = `translate3d(0, ${currentThumbTop}px, 0)`;
   firstNumInner.style.fontSize = '18px'; // изменяем размер шрифта
   setTimeout(() => {
      firstNumInner.textContent = `0${currentNumber}`.slice(-2);
      firstNumInner.style.fontSize = ''; // возвращаем размер шрифта
   }, 150);
});


