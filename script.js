// Configuration: replace these URLs with your own links or image URL
const config = {
  logo: '/image.png',
  channelLink: 'https://t.me/+bbJ15tAHyPE5ZGE1',
  freeLink: 'https://t.me/+bbJ15tAHyPE5ZGE1',
//   poweredByLink: 'https://systeme.io'
};

// Countdown config: default start in seconds (24s)
config.startSeconds = 24;

function applyConfig(){
  const logo = document.getElementById('logo');
  const joinChannel = document.getElementById('joinChannel');
  const joinFree = document.getElementById('joinFree');
  const powered = document.getElementById('poweredBy');

  if(logo && config.logo) logo.src = config.logo;
  if(joinChannel && config.channelLink) joinChannel.href = config.channelLink;
  if(joinFree && config.freeLink) joinFree.href = config.freeLink;
  if(powered && config.poweredByLink) powered.href = config.poweredByLink;
}

// Allow overriding via URL query string: ?logo=...&channel=...&free=...
function applyQueryOverrides(){
  const params = new URLSearchParams(location.search);
  if(params.get('logo')) config.logo = params.get('logo');
  if(params.get('channel')) config.channelLink = params.get('channel');
  if(params.get('free')) config.freeLink = params.get('free');
  if(params.get('powered')) config.poweredByLink = params.get('powered');
}

applyQueryOverrides();
applyConfig();

// Countdown timer: updates .countdown .time with HH : MM : SS
function formatTime(totalSeconds){
  const hrs = Math.floor(totalSeconds/3600);
  const mins = Math.floor((totalSeconds % 3600)/60);
  const secs = totalSeconds % 60;
  const pad = v => String(v).padStart(2,'0');
  return `${pad(hrs)} : ${pad(mins)} : ${pad(secs)}`;
}

function startCountdown(seconds){
  const timeEl = document.querySelector('.countdown .time');
  if(!timeEl) return;
  let remaining = Math.max(0, Math.floor(seconds));
  timeEl.textContent = formatTime(remaining);
  const id = setInterval(()=>{
    remaining -= 1;
    if(remaining < 0){
      clearInterval(id);
      timeEl.textContent = formatTime(0);
      return;
    }
    timeEl.textContent = formatTime(remaining);
  }, 1000);
  return id;
}

// Allow overriding startSeconds via URL: ?start=30 or ?startSeconds=30
const params = new URLSearchParams(location.search);
if(params.get('start')) config.startSeconds = Number(params.get('start')) || config.startSeconds;
if(params.get('startSeconds')) config.startSeconds = Number(params.get('startSeconds')) || config.startSeconds;

startCountdown(config.startSeconds);

// Small nicety: clicking the powered badge opens in new tab (already target _blank)

// If you want to update links programmatically, call setConfig from console:
window.setConfig = function(newConf){
  Object.assign(config, newConf);
  applyConfig();
  return config;
};
