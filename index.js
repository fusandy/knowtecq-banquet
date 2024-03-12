const opening = document.querySelector('#openingButton');
const ending = document.querySelector('#endingButton');
const drum = document.querySelector('#drumButton');
const award = document.querySelector('#awardButton');
const game1 = document.querySelector('#game1Button');
const game2 = document.querySelector('#game2Button');
const game3 = document.querySelector('#game3Button');

const audio = document.querySelector('#myAudio');
const speedInput = document.querySelector('#speedInput');
const resetButton = document.querySelector('#resetButton');

opening.addEventListener('click', (e) => {
  e.preventDefault();
  opening.classList.add('animate');
  audio.src = 'media/opening_music.mp3';
  audio.play();

  setTimeout(() => {
    opening.classList.remove('animate')
  }, 300);
});

ending.addEventListener('click', (e) => {
  e.preventDefault();
  ending.classList.add('animate');
  audio.src = 'media/ending_music.mp3';
  audio.play();

  setTimeout(() => {
    ending.classList.remove('animate')
  }, 300);
});

drum.addEventListener('click', (e) => {
  e.preventDefault();
  drum.classList.add('animate');
  audio.src = 'media/drum_music.mp3';
  audio.play();

  setTimeout(() => {
    drum.classList.remove('animate')
  }, 300);
});

award.addEventListener('click', (e) => {
  e.preventDefault();
  award.classList.add('animate');
  audio.src = 'media/award_music.mp3';
  audio.play();

  setTimeout(() => {
    award.classList.remove('animate')
  }, 300);
});

game1.addEventListener('click', (e) => {
  e.preventDefault();
  game1.classList.add('animate');
  audio.src = 'media/game1_music.mp3';
  audio.play();

  setTimeout(() => {
    game1.classList.remove('animate')
  }, 300);
});

game2.addEventListener('click', (e) => {
  e.preventDefault();
  game2.classList.add('animate');
  audio.src = 'media/game2_music.mp3';
  audio.play();

  setTimeout(() => {
    game2.classList.remove('animate')
  }, 300);
});

game3.addEventListener('click', (e) => {
  e.preventDefault();
  game3.classList.add('animate');
  audio.src = 'media/game3_music.mp3';
  audio.play();

  setTimeout(() => {
    game3.classList.remove('animate')
  }, 300);
});

speedInput.addEventListener('input', () => {
  audio.playbackRate = parseFloat(speedInput.value);
});

resetButton.addEventListener('click', (e) => {
  e.preventDefault();
  audio.pause();
  audio.src = '';
  audio.playbackRate = 1;
  speedInput.value = '1';
});