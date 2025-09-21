// letter.js
const openLetterBtn = document.getElementById('openLetterBtn');
const letterPopup = document.getElementById('letterPopup');
const closeLetterBtn = document.getElementById('closeLetterBtn');
const goToLetterPage = document.getElementById('goToLetterPage');

openLetterBtn.addEventListener('click', () => {
  letterPopup.style.display = 'block';
});

closeLetterBtn.addEventListener('click', () => {
  letterPopup.style.display = 'none';
});

goToLetterPage.addEventListener('click', () => {
  window.location.href = 'letter.html'; 
});
