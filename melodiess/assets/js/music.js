function searchSongs() {
  // Get the search query from the input field
  var searchQuery = document.getElementById("searchInput").value.toLowerCase();

  // Get the list of songs
  var songList = document.getElementById("song-list").getElementsByTagName("li");

  // Loop through the songs and hide those that don't match the search query
  for (var i = 0; i < songList.length; i++) {
    var songTitle = songList[i].getAttribute("data-title").toLowerCase();
    var songArtist = songList[i].getAttribute("data-artist").toLowerCase();
    var songInfo = songTitle + " " + songArtist;

    if (songInfo.includes(searchQuery)) {
      // If the song info contains the search query, show the song
      songList[i].style.display = "";
    } else {
      // If not, hide the song
      songList[i].style.display = "none";
    }
  }
}
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create new audio element
let curr_track = document.createElement('audio');

// Define the tracks that have to be played
let track_list = [
  {
    name: "Night Owl",
    artist: "Broke For Free",
    image: "https://images.pexels.com/photos/2264753/pexels-photo-2264753.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl.mp3"
  },
  {
    name: "Enthusiast",
    artist: "Tours",
    image: "https://images.pexels.com/photos/3100835/pexels-photo-3100835.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Tours/Enthusiast/Tours_-_01_-_Enthusiast.mp3"
  },
  {
    name: "Shipping Lanes",
    artist: "Chad Crouch",
    image: "https://images.pexels.com/photos/1717969/pexels-photo-1717969.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Chad_Crouch/Arps/Chad_Crouch_-_Shipping_Lanes.mp3",
  },
  {
  name:"Lonely-At-The-Top",
  artist:"Asake",
  image:"assets/images/download.png",
  path:"songs/Asake-Lonely-At-The-Top.mp3",
  },
    {
    name:"Anabella",
    artist:"Khaid",
    image:"assets/images/khaid.png",
    path:"songs/Khaid-Anabella-(TrendyBeatz.com).mp3",
  },
  {
    name:"Kristy",
    artist:"Ruger",
    image:"assets/images/ruger.png",
    path:"songs/Ruger-Kristy-(TrendyBeatz.com).mp3",
  },
  {
    name:"Unleash",
    artist:"Kiss Daniel $ Poco ",
    image:"assets/images/pocokiss.png",
    path:"songs/pocokiss.mp3",
  },
  {
    name:"Sharpally",
    artist:"Young John",
    image:"assets/images/john.png",
    path:"songs/youngjohn.mp3",
  },
  {
    name:"Jara",
    artist:"Khaid",
    image:"assets/images/khaid.png",
    path:"songs/khaidjara.mp3",
  },
  {
    name:"pray",
    artist:"Buju",
    image:"assets/images/buju.png",
    path:"songs/buju.mp3",
  },
  {
    name:"Amdallah",
    artist:"Seyi Vibez",
    image:"assets/images/seyi.png",
    path:"songs/seyi.mp3",
  },
  {
    name:"Ngozi",
    artist:"Ayra Star",
    image:"assets/images/star.png",
    path:"songs/Ayra star.mp3",
  },
  {
    name:"No Competition",
    artist:"Davido",
    image:"assets/images/davido.png",
    path:"songs/No competition.mp3",
  },
  {
name:"Bad-To-Be",
artist:"Wizkid",
image:"assets/images/wizkid.png",
path:"songs/Bad-To-Be.mp3",
  },
  {
    name:"Chance",
    artist:"SeyiVibez",
    image:"assets/images/seyi.png",
    path:"songs/chance.mp3",
  },
  {
name:"Ask-About-Me",
artist:"Mohbad",
image:"assets/images/mohbad.png",
path:"songs/mohbad.mp3",
  },
  {
    name:"Up&Down",
    artist:"Zino",
    image:"assets/images/zino.png",
    path:"songs/Up and down.mp3",
  },
  {
    name:"Puff&Pass",
    artist:"Shallipolii",
    image:"assets/images/shally.png",
    path:"songs/puff.mp3"
  },
  {
    name:"Red&Green",
    artist:"Kiss-Daniel",
    image:"assets/images/kiss.png",
    path:"songs/kizz-Daniel-Red-Green-(TrendyBeatz.com).mp3"
  },
  {
    name:"Dejavu",
    artist:"SeyiVibez",
    image:"assets/images/seyi.png",
    path:"songs/Seyi-Vibez-Dejavu-(TrendyBeatz.com).mp3",
  },
];


function random_bg_color() {

  // Get a number between 64 to 256 (for getting lighter colors)
  let red = Math.floor(Math.random() * 256) + 64;
  let green = Math.floor(Math.random() * 256) + 64;
  let blue = Math.floor(Math.random() * 256) + 64;

  // Construct a color withe the given values
  let bgColor = "rgb(" + red + "," + green + "," + blue + ")";

  // Set the background to that color
  document.body.style.background = bgColor;
}

function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();
  curr_track.src = track_list[track_index].path;
  curr_track.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;

  updateTimer = setInterval(seekUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
  random_bg_color();
}

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

// Load the first track in the tracklist
loadTrack(track_index);

function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';;
}

function nextTrack() {
  if (track_index < track_list.length - 1)
    track_index += 1;
  else track_index = 0;
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.length;
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  let seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;

  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);

    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}

const songs = [
  { title: "Song 1", artist: "Artist 1" },
  { title: "Song 2", artist: "Artist 2" },
  { title: "Song 3", artist: "Artist 3" },
  { title: "Lonely-At-The-Top", artist: "Asake" },
];

// Function to add a song to favorites
function addToFavorites(title, artist, src) {
  const favoriteSongs = JSON.parse(localStorage.getItem('favorites')) || [];
  const song = { title, artist, src };

  // Check if the song is already in favorites
  const isFavorite = favoriteSongs.some((favSong) => favSong.src === src);

  if (!isFavorite) {
      favoriteSongs.push(song);
      localStorage.setItem('favorites', JSON.stringify(favoriteSongs));
      alert('Song added to favorites!');
  } else {
      alert('Song is already in favorites!');
  }
}


// Event listener for clicking the "Add to Favorites" button
const addToFavoritesButtons = document.querySelectorAll('.add-to-favorites');
addToFavoritesButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
      const listItem = event.target.parentElement;
      const title = listItem.getAttribute('data-title');
      const artist = listItem.getAttribute('data-artist');
      const src = listItem.getAttribute('data-src');
      addToFavorites(title, artist, src);
  });
});

// Event listener for navigating to the favorites page
document.getElementById('view-favorites').addEventListener('click', () => {
  window.location.href = 'favorites.html';
});
