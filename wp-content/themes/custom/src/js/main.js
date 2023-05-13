// const activeSection = window.location.hash;
// const navLinks = document.querySelectorAll('top-menu__items a');

// Active menu item
// navLinks.forEach(link => {
//     if (link.href.includes(activeSection)) {
//         link.classList.add('active');
//     }
// });

// ----------------------------------------------

// const navLinks = document.querySelectorAll('top-menu__items a');

// navLinks.forEach(link => {
//   link.addEventListener('click', event => {
//     const parent = link.parentNode;
//     if (parent.classList.contains('menu-item-has-children')) {
//       event.preventDefault();
//     } else {
//       navLinks.forEach(link => link.parentNode.classList.remove('active'));
//       parent.classList.add('active');
//     }
//   });
// });

// const dropdownLinks = document.querySelectorAll('.menu-item-has-children a');

// dropdownLinks.forEach(link => {
//   link.addEventListener('click', event => {
//     event.preventDefault();
//     const parent = link.parentNode;
//     parent.parentNode.parentNode.classList.remove('active');
//   });
// });



// ----------------------------------------------

// Jquery version
// $(document).on('scroll', () => {
//   if ($(document).scrollTop() > 100) {
//     $('header').addClass('header--shrink');
//   } else {
//     $('header').removeClass('header--shrink')
//   }
// });

// Shrinking header on scroll down
document.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 100) {
    document.querySelector('header').classList.add('header--shrink');
    document.querySelector('.logo').classList.add('logo--shrink');
  } else {
    document.querySelector('header').classList.remove('header--shrink');
    document.querySelector('.logo').classList.remove('logo--shrink');
  }
});

// Update menu items on smaller screen size
const navItemNewFlaves = document.querySelector('.menu-item--new-flaves a');
const navItemOrigFlaves = document.querySelector('.menu-item--orig-flaves a');
const navItemGiftCards = document.querySelector('.menu-item--gift-card a');

const emojiIceCream = '🍦';
const emojiGift = '🎁';

const addEmojiToNavItems = () => {
  console.log(navItemNewFlaves);
  if (window.innerWidth < 500) {
    navItemNewFlaves.innerText = `New${emojiIceCream}`;
    navItemOrigFlaves.innerText = `Orig${emojiIceCream}`;
    navItemGiftCards.innerText = `${emojiGift} Cards`;
  } else {
    navItemNewFlaves.innerText = 'New Flaves';
    navItemOrigFlaves.innerText = 'Orig Flaves';
    navItemGiftCards.innerText = 'Gift Cards';
  }
}

addEmojiToNavItems();

window.addEventListener('resize', () => {
  addEmojiToNavItems();
});
