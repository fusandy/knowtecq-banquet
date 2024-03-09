// 其他音效
const opening = document.querySelector('#openingButton');
const ending = document.querySelector('#endingButton');
const drum = document.querySelector('#drumButton');
const award = document.querySelector('#awardButton');
const game1 = document.querySelector('#game1Button');
const game2 = document.querySelector('#game2Button');

const openingMusic = new Audio('media/opening_music.mp3');
const endingMusic = new Audio('media/ending_music.mp3');
const drumMusic = new Audio('media/drum_music.mp3');
const awardMusic = new Audio('media/award_music.mp3');
const game1Music = new Audio('media/game1_music.mp3');
const game2Music = new Audio('media/game2_music.mp3');

opening.addEventListener('click', () => {
  openingMusic.paused ? openingMusic.play() : openingMusic.pause();
});

ending.addEventListener('click', () => {
  endingMusic.paused ? endingMusic.play() : endingMusic.pause();
});

drum.addEventListener('click', () => {
  drumMusic.paused ? drumMusic.play() : drumMusic.pause();
});

award.addEventListener('click', () => {
  awardMusic.paused ? awardMusic.play() : awardMusic.pause();
});

game1.addEventListener('click', () => {
  console.log(`game1Music: ${game1Music.paused}`)
  game1Music.paused ? game1Music.play() : game1Music.pause();
});

game2.addEventListener('click', () => {
  game2Music.paused ? game2Music.play() : game2Music.pause();
});

// 瘋狂黑白猜
const audio = document.querySelector('#myAudio');
const speedInput = document.querySelector('#speedInput');
const resetButton = document.querySelector('#resetButton');

speedInput.addEventListener('input', () => {
  audio.playbackRate = parseFloat(speedInput.value);
});

audio.addEventListener('ended', () => {
  audio.currentTime = 0;
  audio.play();
});

resetButton.addEventListener('click', () => {
  audio.pause();
  audio.currentTime = 0;
  audio.playbackRate = 1;
  speedInput.value = '1';
});