import { VideoPlayer } from "./video-player.js";
import { registerGamepadEvents, registerKeyboardEvents, registerMouseEvents, sendClickEvent } from "./register-events.js";

let playButton;
let videoPlayer;

showPlayButton();

window.document.oncontextmenu = function () {
  return false;     // cancel default menu
}

window.addEventListener('resize', function() {
  videoPlayer.resizeVideo();
}, true);


function showPlayButton() {
  if (!document.getElementById('playButton')) {
    let elementPlayButton = document.createElement('img');
    elementPlayButton.id = 'playButton';
    elementPlayButton.src = 'images/Play.png';
    elementPlayButton.alt = 'Start Streaming';
    playButton = document.getElementById('player').appendChild(elementPlayButton);
    playButton.addEventListener('click', onClickPlayButton);
  }
}

function onClickPlayButton() {

  playButton.style.display = 'none';

  const playerDiv = document.getElementById('player');

  // add video player
  const elementVideo = document.createElement('video');
  elementVideo.id = 'Video';
  elementVideo.style.touchAction = 'none';
  playerDiv.appendChild(elementVideo);

  setupVideoPlayer([elementVideo]).then(value => videoPlayer = value);

  // add blue button
  const elementBlueButton = document.createElement('button');
  elementBlueButton.id = "blueButton";
  elementBlueButton.innerHTML = "X";
  playerDiv.appendChild(elementBlueButton);
  elementBlueButton.addEventListener ("click", function() {
    sendClickEvent(videoPlayer, 1);
  });
  elementBlueButton.addEventListener ("touchstart", function() {
    sendClickEvent(videoPlayer, 5);
  });
  elementBlueButton.addEventListener ("touchend", function() {
    sendClickEvent(videoPlayer, 6);
  });

  // add green button
  const elementGreenButton = document.createElement('button');
  elementGreenButton.id = "greenButton";
  elementGreenButton.innerHTML = "A";
  playerDiv.appendChild(elementGreenButton);
  elementGreenButton.addEventListener ("click", function() {
    sendClickEvent(videoPlayer, 2);
  });
  elementGreenButton.addEventListener ("touchstart", function() {
    sendClickEvent(videoPlayer, 7);
  });
  elementGreenButton.addEventListener ("touchend", function() {
    sendClickEvent(videoPlayer, 8);
  });

  // add orange button
  const elementOrangeButton = document.createElement('button');
  elementOrangeButton.id = "orangeButton";
  elementOrangeButton.innerHTML = "Y";
  playerDiv.appendChild(elementOrangeButton);
  elementOrangeButton.addEventListener ("click", function() {
    sendClickEvent(videoPlayer, 3);
  });
  elementOrangeButton.addEventListener ("touchstart", function() {
    sendClickEvent(videoPlayer, 9);
  });
  elementOrangeButton.addEventListener ("touchend", function() {
    sendClickEvent(videoPlayer, 10);
  });

  // add red button
  const elementRedButton = document.createElement('button');
  elementRedButton.id = "redButton";
  elementRedButton.innerHTML = "B";
  playerDiv.appendChild(elementRedButton);
  elementRedButton.addEventListener ("click", function() {
    sendClickEvent(videoPlayer, 4);
  });
  elementRedButton.addEventListener ("touchstart", function() {
    sendClickEvent(videoPlayer, 11);
  });
  elementRedButton.addEventListener ("touchend", function() {
    sendClickEvent(videoPlayer, 12);
  });

  // add fullscreen button
  const elementFullscreenButton = document.createElement('img');
  elementFullscreenButton.id = 'fullscreenButton';
  elementFullscreenButton.src = 'images/FullScreen.png';
  playerDiv.appendChild(elementFullscreenButton);
  elementFullscreenButton.addEventListener ("click", function() {
    if (!document.fullscreenElement) {
      if(document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      }
      else if(document.documentElement.webkitRequestFullscreen){
        document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    }
  });
  document.addEventListener('webkitfullscreenchange', onFullscreenChange);
  document.addEventListener('fullscreenchange', onFullscreenChange);

  function onFullscreenChange(e) {
    if(document.webkitFullscreenElement || document.fullscreenElement) {
      elementFullscreenButton.style.display = 'none';
    }
    else {
      elementFullscreenButton.style.display = 'block';
    }
  }
}

async function setupVideoPlayer(elements, config) {
  const videoPlayer = new VideoPlayer(elements, config);
  await videoPlayer.setupConnection();

  videoPlayer.ondisconnect = onDisconnect;
  registerGamepadEvents(videoPlayer);
  registerKeyboardEvents(videoPlayer);
  registerMouseEvents(videoPlayer, elements[0]);
  
  return videoPlayer;
}

function onDisconnect() {
  const playerDiv = document.getElementById('player')
  clearChildren(playerDiv);
  videoPlayer = null;
  showPlayButton();
}

function clearChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
