// var elms = ['to_embed']
// elms.forEach(function(elm) {
//   window[elm] = document.getElementById(elm);
// });

var toughkit0 = new Howl({
  src: ['./sounds/Tough Kit.wav'],
  preload: true,
})

var toughkit1 = new Howl({
  src: ['./sounds/Tough Kit_1.wav'],
  preload: true,
})

var toughkit2 = new Howl({
  src: ['./sounds/Tough Kit_2.wav'],
  preload: true,
})

var toughkit3 = new Howl({
  src: ['./sounds/Tough Kit_3.wav'],
  preload: true,
})

var toughkit4 = new Howl({
  src: ['./sounds/Tough Kit_4.wav'],
  preload: true,
})

var toughkit5 = new Howl({
  src: ['./sounds/Tough Kit_5.wav'],
  preload: true,
})

var kicks = [toughkit1, toughkit2, toughkit5]

var additions = [toughkit0, toughkit3, toughkit4]

document.querySelector(".play_pause").addEventListener("click", () => {
  const kick = Math.floor(Math.random() * kicks.length);
  const addition = Math.floor(Math.random() * additions.length);
  kicks[kick].play();
  additions[addition].play();
})