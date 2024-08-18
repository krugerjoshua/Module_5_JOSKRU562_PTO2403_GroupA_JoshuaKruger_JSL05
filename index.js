// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    // Feel free to add even more songs
]


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Pop",
    "Groot": "R&B"
    // Add preferences for Drax, Rocket, and Groot
}

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    // Your code here
    return Object.keys(guardians).map(guardian => {
        const preferredGenre = guardians[guardian]
        const playlist = songs.filter(song => song.genre === preferredGenre)
        return { guardian: guardian, playlist: playlist}
    })
    // Loop through each guardian to add to the playlist array
    // Loop through each song in the songs array to find the preferred genre
}

// Call generatePlaylist and display the playlists for each Guardian
// Loop through each playlist item to add it to the webpage
function displayPlaylists(playlists) {
    const playlistsDiv = document.getElementById('playlists')
    playlists.forEach(item => {
        const guardianDiv = document.createElement('div')
        guardianDiv.className = 'guardian-playlist'

        // Create and append the guardian's name
        const guardianName = document.createElement('h2')
        guardianName.textContent = `${item.guardian}'s Playlist`
        guardianDiv.appendChild(guardianName)

        // Create and append the list of songs
        const songList = document.createElement('ul')

        item.playlist.forEach(song => {
            const songItem = document.createElement('li')
            songItem.textContent = `${song.title} by ${song.artist}`
            songList.appendChild(songItem);
        })

        guardianDiv.appendChild(songList)
        playlistsDiv.appendChild(guardianDiv)
    })
}
const playlists = generatePlaylist(guardians, songs)
displayPlaylists(playlists)