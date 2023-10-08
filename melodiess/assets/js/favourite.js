// Function to load and display favorite songs
function loadFavorites() {
    const favoriteSongs = JSON.parse(localStorage.getItem('favorites')) || [];
    const favoritesList = document.getElementById('favorites-list');

    favoriteSongs.forEach((song, index) => {
        const li = document.createElement('li');
        li.textContent = `${song.title} - ${song.artist}`;

        // Create a "Remove from Favorites" button for each song
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            remove(index);
        });

        li.appendChild(removeButton);
        favoritesList.appendChild(li);
    });
}

// Function to remove a song from favorites
function remove(index) {
    const favoriteSongs = JSON.parse(localStorage.getItem('favorites')) || [];

    if (index >= 0 && index < favoriteSongs.length) {
        const removedSong = favoriteSongs.splice(index, 1)[0];
        localStorage.setItem('favorites', JSON.stringify(favoriteSongs));
        alert(`Removed "${removedSong.title}" from favorites.`);
        // Reload the favorites list after removal
        location.reload();
    }
}

// Load and display favorite songs when the favorites page loads
loadFavorites();

// Event listener for the "Back to Main" button
document.getElementById('back-to-main').addEventListener('click', () => {
    window.location.href = 'index.html'; // Adjust the URL if necessary
});
