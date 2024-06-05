const albumData = [
    {
        title: "Album A",
        songs: [
            { title: "Song a1", lyrics: "Lyrics of song 1..." },
            { title: "Song a2", lyrics: "Lyrics of song 2..." }
        ]
    },
    {
        title: "Album B",
        songs: [
            { title: "Song b1", lyrics: "Lyrics of song 1..." },
            { title: "Song b2", lyrics: "Lyrics of song 2..." }
        ]
    }
    // Add more albums as needed
];

document.addEventListener("DOMContentLoaded", () => {
    const albumListDiv = document.getElementById("albumList");
    const songListDiv = document.getElementById("songList");
    const lyricsDiv = document.getElementById('lyrics');

    albumData.forEach((album, index) => {
        const albumDiv = document.createElement("div");
        albumDiv.classList.add("album");
        albumDiv.dataset.index = index; // Store the index to reference later
        
        const albumTitle = document.createElement("h2");
        albumTitle.textContent = album.title;
        albumDiv.appendChild(albumTitle);
        
        albumDiv.addEventListener('click', () => {
            // Clear the previous song list
            while (songListDiv.firstChild) {
              songListDiv.removeChild(songListDiv.firstChild);
            }
      
            // Add songs of the clicked album
            const songsList = document.createElement('ul');
            album.songs.forEach(song => {
                const songItem = document.createElement('li');
                songItem.textContent = song.title;
     
        
                // Add event listener to display lyrics
                songItem.addEventListener('click', () => {
                    lyricsDiv.textContent = song.lyrics;
                }); 
              songsList.appendChild(songItem);
            });
      
            songListDiv.appendChild(songsList);
          });
        albumListDiv.appendChild(albumDiv);
    });
});