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

// var midtermFolder = './sounds/1050Midterm/1050Midterm'
// var midtermFiles = ['Bass', 'DropBass', 'Drums1', 'Drums2', 'Melody', 'Piano']
// var midtermFileType = '.mp3'
// var midtermHowls = []

// var sillyFolder = './sounds/Silly/Silly'
// var sillyFiles = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30']
// var sillyFileType = '.mp3'
// var sillyHowls = []

// midtermFiles.forEach(function(element) {
//   midtermHowls.push(new Howl({
//     src: [midtermFolder + element + midtermFileType],
//     preload: true,
//   }))
// });

// sillyFiles.forEach(function(element) {
//   sillyHowls.push(new Howl({
//     src: [sillyFolder + element + sillyFileType],
//     preload: true,
//   }))
// });

var kicks = [toughkit1, toughkit2, toughkit5]

var additions = [toughkit0, toughkit3, toughkit4]

// var silly = new Howl({
//   src: ['./sounds/Silly/Silly.mp3'],
//   preload: true,
// })

document.querySelector(".play_pause").addEventListener("click", () => {
  const kick = Math.floor(Math.random() * kicks.length);
  const addition = Math.floor(Math.random() * additions.length);
  kicks[kick].play();
  additions[addition].play();
  
  // midtermHowls.forEach(function(element) {
  //   element.play();
  // });
  // silly.play();

  // sillyHowls.forEach(function(element) {
  //   element.play();
  // });
});