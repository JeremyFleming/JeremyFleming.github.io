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

var hexatonicTestFolder = './sounds/HexatonicTest/HexatonicTest'
var songBases = ['1', '2', '3', '4', '5', '6', '7']
var hexatonicFileType = '.mp3'
var hexatonicHowls = []

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

//   document.querySelector(".play_pause").addEventListener("click", () => {
//   const kick = Math.floor(Math.random() * kicks.length);
//   const addition = Math.floor(Math.random() * additions.length);
//   kicks[kick].play();
//   additions[addition].play();
  
//   // midtermHowls.forEach(function(element) {
//   //   element.play();
//   // });
//   // silly.play();

//   // sillyHowls.forEach(function(element) {
//   //   element.play();
//   // });
//   });

var playing = false;
var index = 0;
var firstPlay = true;

const kick = Math.floor(Math.random() * kicks.length);
const addition = Math.floor(Math.random() * additions.length);

// var Player = function(playlist) {
//   this.playlist = playlist;
//   this.index = 0;
// };

for (let i = 0; i < songBases.length; i++) {
  hexatonicHowls.push(new Howl({
    src: [hexatonicTestFolder + songBases[i] + hexatonicFileType],
    preload: true,
  }));
}

function branch(elem) {
  var elemid = elem.id;
  var elemind = 0
  switch (elemid) {
    case "song1":
      elemind = 0;
      break;
    case "song2":
      elemind = 1;
      break;
    case "song3":
      elemind = 2;
      break;
    case "song4":
      elemind = 3;
      break;
    case "song5":
      elemind = 4;
      break;
    case "song6":
      elemind = 5;
      break;
    case "song7":
      elemind = 6;
      break;
    default:
      return false;
  }
  playPause(elemind);
}

function playPause(elemind) {
  var elemid = "song" + (elemind+1).toString();

  if (firstPlay) {
    for (let i = 0; i < hexatonicHowls.length; i++) {
      if (i != hexatonicHowls.length - 1) {
        hexatonicHowls[i].on('end', function(){
          // alert("song" + (i+2).toString());
          playPause(i+1);
        });
      } else {
        hexatonicHowls[i].on('end', function(){
          document.getElementById("song" + (i+1).toString()).style.textDecoration = 'none';
          document.getElementById("song" + (i+1).toString()).style.backgroundImage = 'url(./images/play_icon.png';
          // hexatonicHowls[i].stop();
          playing=false;
        });
      }
    };
    firstPlay = false;
  }

  // elemidi = parseInt(elemid) - 1;
  // alert(elem.id);
  // index = 0;
  if (elemind != index) {
    hexatonicHowls[index].stop();
    elemid = "song" + (index+1).toString();
    document.getElementById(elemid).style.textDecoration = 'none';
    document.getElementById(elemid).style.backgroundImage = 'url(./images/play_icon.png';
    index = elemind;
    elemid = "song" + (index+1).toString();
    document.getElementById(elemid).style.textDecoration = 'underline';
    hexatonicHowls[index].play();
    playing = true;
    document.getElementById(elemid).style.backgroundImage = 'url(./images/pause_icon.png';
  } else {
    document.getElementById(elemid).style.textDecoration = 'underline';
    if (playing) {
      hexatonicHowls[index].pause();
      // kicks[kick].pause();
      // additions[addition].pause();
      playing = false;
      document.getElementById(elemid).style.backgroundImage = 'url(./images/play_icon.png';
    } else {
      hexatonicHowls[index].play();
      // kicks[kick].play();
      // additions[addition].play();
      playing = true;
      document.getElementById(elemid).style.backgroundImage = 'url(./images/pause_icon.png';
    }
  }
};