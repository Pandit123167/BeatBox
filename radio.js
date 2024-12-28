// Highlight the active page in the navigation menu
document.querySelectorAll('.menu a').forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});

// Search functionality to filter radio stations
function filterStations() {
    const searchInput = document.getElementById('search-bar').value.toLowerCase();
    const stations = document.querySelectorAll('.radio-card');

    stations.forEach(station => {
        const stationName = station.querySelector('h3').textContent.toLowerCase();
        if (stationName.includes(searchInput)) {
            station.style.display = 'block';
        } else {
            station.style.display = 'none';
        }
    });
}

// Play one audio at a time
const audioElements = document.querySelectorAll('audio');
audioElements.forEach(audio => {
    audio.addEventListener('play', () => {
        audioElements.forEach(otherAudio => {
            if (otherAudio !== audio) {
                otherAudio.pause();
            }
        });
    });
});


// Radio Station URLs
const stations = {
    "classic-fm": {
        name: "Classic FM",
        url: "https://media-ssl.musicradio.com/ClassicFM"
    },
    "radio-mirchi": {
        name: "Radio Mirchi",
        url: "https://stream.radiomirchi.com/mirchi_mp3"
    },
    "bbc-radio": {
        name: "BBC Radio 1",
        url: "https://stream.live.vc.bbcmedia.co.uk/bbc_radio_one"
    },
    "hits-radio": {
        name: "Hits Radio",
        url: "https://stream.live.vc.bbcmedia.co.uk/hits_radio"
    }
};

// Event Listener for Radio Cards
document.querySelectorAll(".radio-card").forEach(card => {
    card.addEventListener("click", () => {
        const stationId = card.id;
        playStation(stationId);
    });
});

// Play Station Function
function playStation(stationId) {
    const station = stations[stationId];
    if (station) {
        const audioPlayer = document.getElementById("audio-player");
        audioPlayer.src = station.url;
        audioPlayer.play();

        const nowPlaying = document.getElementById("now-playing");
        nowPlaying.textContent = `Now Playing: ${station.name}`;
    }
}
