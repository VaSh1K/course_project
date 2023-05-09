let isOpend = false;

const burgerButtons = document.getElementsByClassName('burger_btn');
const burger = document.getElementById('burger');
const body = document.getElementById('body');
const burgerHrefs = burger.getElementsByTagName('a');

burger.style.cssText = 'transition: 0.3s; opacity: 0; z-index: -1;';

for (const burgerBtn of burgerHrefs) {
  burgerBtn.addEventListener('click', e => {
    burger.style.cssText = 'transition: 0.3s; opacity: 0; z-index: -1;';
    body.classList = '';

    isOpend = false;
    document
      .querySelector(e.target.dataset.elem)
      .scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      });
  });
}

for (const burgerBtn of burgerButtons) {
  burgerBtn.addEventListener('click', () => {
    if (isOpend) {
      burger.style.cssText = 'transition: 0.3s; opacity: 0; z-index: -1;';
      body.classList = '';

      isOpend = !isOpend;

      return;
    }

    isOpend = !isOpend;

    body.classList = 'opened';
    burger.style.cssText = 'transition: 0.3s; opacity: 1; z-index: 1;';
  });
}
