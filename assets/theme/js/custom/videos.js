var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '100%',
    width: '100%',
    videoId: 'iEr9sV-YPS0',
    playerVars: { 
      'autoplay': 0, 
      'controls': 1, 
      'cc_load_policy': 1, 
      'enablejsapi': 1, 
      'hl': 'es', 
      'modestbranding': 0,
      'rel': 1,
      'mute': 0,
      'showinfo': 0
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
  event.target.stopVideo();
  event.target.setPlaybackQuality('hd720');
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    console.log("YT.PlayerState.PLAYING");
  }
  if (event.data == YT.PlayerState.ENDED) {
    console.log("YT.PlayerState.ENDED");
  }
}

function cambiaIdioma(idioma_id) {
  console.log("cambiaIdioma: ", idioma_id);
  //player.setOption('captions', 'track', {languageCode: 'pt-BR'});
  player.setOption('captions', 'track', {'languageCode': idioma_id});   
}