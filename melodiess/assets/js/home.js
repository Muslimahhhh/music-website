// Get references to the audio element and the play buttons
const audioPlayer = document.getElementById('audio-player');
const playButtons = document.querySelectorAll('.play-button');
const musicCards = document.querySelectorAll('.music-card');

// Add click event listeners to the play buttons
playButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const songPath = musicCards[index].getAttribute('data-song');
        
        // Set the audio source to the selected song
        audioPlayer.src = songPath;
        
        // Play the audio
        audioPlayer.play();
    });
});
