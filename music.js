const music = new Audio('song/1.m4a');
// music.play();

const songs =   [
    {
        id: 1,
        songName: `bulave tujhe aaj meri galiyan lyrics<br>
        <div class="subtitle">Lukka Chuppi</div>`,
        poster: "photo/1.png"
    },
    {
        id: 2,
        songName: `Vaaste <br>
        <div class="subtitle">Dhvani Bhanushali, Nikhil D'Souza, and Tanishk Bagchi</div>`,
        poster: "photo/2.png"
    },
    {
        id: 3,
        songName: `Coca Cola<br>
        <div class="subtitle">Lukka Chuppi Movies Song</div>`,
        poster: "photo/3.png"
    },
    {
        id: 4,
        songName: `Le le mera number Hook Up Song<br>
        <div class="subtitle">Neha Kakkar feat Shekhar Ravjiani</div>`,
        poster: "photo/4.png"
    },
    {
        id: 5,
        songName: ` Kar Gayi Chull <br>
        <div class="subtitle">Amaal Mallik, Sukriti Kakar, Neha Kakkar & Fazilpuria</div>`,
        poster: "photo/5.png"
    },
    {
        id: 6,
        songName: `Love Yatri <br>
        <div class="subtitle">Love Yatri movies Song</div>`,
        poster: "photo/6.png"
    },
    {
        id: 7,
        songName: `Dilbar <br>
        <div class="subtitle">Neha Kakkarlyrics</div>`,
        poster: "photo/7.png"
    },
    {
        id: 8,
        songName: `Thoda Thoda Pyaar Hua Tumse <br>
        <div class="subtitle">Neha Kakkarlyrics</div>`,
        poster: "photo/8.png"
    },
    {
        id: 9,
        songName: `Mile Ho Tum Hamko <br>
        <div class="subtitle">Neha Kakkar</div>`,
        poster: "photo/9.png"
    },
    {
        id: 10,
        songName: `Badri Ki Dulhania <br>
        <div class="subtitle">Badrinath Ki Dulhania</div>`,
        poster: "photo/10.png"
    },
    {
        id: 11,
        songName: `Cheez Badi Hai Mast<br>
        <div class="subtitle">Neha Kakkar</div>`,
        poster: "photo/11.png"
    },
    {
        id: 12,
        songName: `Chhote Chhote Peg Maar <br>
        <div class="subtitle">Yo Yo Honey Singh</div>`,
        poster: "photo/12.png"
    },
    {
        id: 13,
        songName: `Radha Teri chunri <br>
        <div class="subtitle">Varun Dhawan, Shidarth & Aaliya</div>`,
        poster: "photo/13.png"
    },
    {
        id: 14,
        songName: `Roke Na Ruke Naina <br>
        <div class="subtitle">Varun Dhavan & Aaliya Bhath</div>`,
        poster: "photo/14.png"
    },
    {
        id: 15,
        songName: `Pyaar kiya hai chori chori... <br>
        <div class="subtitle">Madhuri Dixit</div>`,
        poster: "photo/15.png"
    },
    {
        id: 16,
        songName: `Lut Gaye <br>
        <div class="subtitle">Neha Kakkarlyrics</div>`,
        poster: "photo/16.png"
    },
    {
        id: 17,
        songName: `Chalo Pyaar Ki Shuruwat Karein <br>
        <div class="subtitle">Paras & Manmeet </div>`,
        poster: "photo/17.png"
    },
    {
        id: 18,
        songName: `Teri Baaton Mein Aisa Uljha Jiya <br>
        <div class="subtitle"> Shahid Kapoor and Kriti Sanon </div>`,
        poster: "photo/18.png"
    }
]



Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;

});

let wave = document.getElementById('wave');
let control_bar = document.getElementById('control_bar');
control_bar.addEventListener('click',() =>{
    if(music.paused || music.currentTime <= 0){
        music.play();
        wave.classList.add('active1');
        control_bar .classList.remove('bi-play-fill');
        control_bar.classList.add('bi-pause-fill');
    }else{
        music.pause();
        wave.classList.remove('active1');
        control_bar.classList.add('bi-play-fill');
        control_bar.classList.remove('bi-pause-fill');
    }
});

const makeAllplays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
        
    })
}

const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = 'rgb(105, 105, 105, .0)';
    })
}

let index =0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e) =>{
    e.addEventListener('click',(el) =>{
         index = el.target.id;
       // console.log(index);
        music.src = `song/${index}.m4a`;
        download_music.href = `song/${index}.m4a`;
        // poster_master_play.src = `photo/${index}.png`;
        music.play();
        control_bar.classList.remove('bi-play-fill');
        control_bar.classList.add('bi-pause-fill');


        let songTitles = songs.filter((els) =>{
            return els.id == index;
        })
        songTitles.forEach(elss =>{
            let {songName, poster} = elss;
            title.innerHTML = songName;
            poster_master_play.src = poster;
            download_music.setAttribute('download', songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    })
});

let music_curr = music.currentTime;
let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];


music.addEventListener('timeupdate', () =>{
    music_curr = music.currentTime;
    let music_dur = music.duration;
    
    // console.log(music_curr);
    // console.log(currentEnd);


    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    if(sec1 < 10){
        sec1 = `0${sec1}`;
    }

    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);

    if(sec2 < 10){
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr / music_dur ) * 100);
    seek.value = progressBar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

music.addEventListener('ended', () => {
    index++; // Increment the index to go to the next song
    if (index > songs.length) { // If the index exceeds the number of songs, reset to the first song
        index = 1;
    }

    // Update music source and other elements
    music.src = `song/${index}.m4a`;
    music.play();

    // Update song title and poster
    let songTitles = songs.filter((els) => els.id == index);
    songTitles.forEach(elss => {
        let { songName, poster } = elss;
        title.innerHTML = songName;
        poster_master_play.src = poster;
        download_music.href = `song/${index}.m4a`;
        download_music.setAttribute('download', songName);
    });

    // Update UI elements
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    Array.from(document.getElementsByClassName('playListPlay'))[index - 1].classList.remove('bi-play-circle-fill');
    Array.from(document.getElementsByClassName('playListPlay'))[index - 1].classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
});

//Search

document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector(".search input");
    const songItems = document.querySelectorAll(".songItem");
    
    // Function to search songs
    searchInput.addEventListener("input", function() {
        const query = searchInput.value.toLowerCase();
        
        songItems.forEach(function(songItem) {
            const title = songItem.querySelector("h5").textContent.toLowerCase();
            const subtitle = songItem.querySelector(".subtitle").textContent.toLowerCase();

            // Check if the search query matches title or subtitle
            if (title.includes(query) || subtitle.includes(query)) {
                songItem.style.display = "block";  // Show matching song item
            } 
            else {
                songItem.style.display = "none";   // Hide non-matching song item
            }
        });
    });
});




seek.addEventListener('change', () =>{
    music.currentTime = seek.value * music.duration / 100;
});





let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change',() =>{
    if(vol.value == 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');

    }
    if(vol.value > 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');

    }
    if(vol.value > 50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');

    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});

let back = document.getElementById('back');
let next = document.getElementById('next');
back.addEventListener('click', ()=>{
    index -= 1;
    if(index < 1){
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `song/${index}.m4a`;
    // poster_master_play.src = `photo/${index}.png`;
    music.play();
    control_bar.classList.remove('bi-play-fill');
    control_bar.classList.add('bi-pause-fill');


    let songTitles = songs.filter((els) =>{
        return els.id == index;
    })
    songTitles.forEach(elss =>{
        let {songName, poster} = elss;
        title.innerHTML = songName;
        poster_master_play.src = poster;
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(105, 105, 105, .1)";
    makeAllplays();
    // el.target.classList.remove('bi-play-circle-fill');
    // el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
});

next.addEventListener('click',() =>{
    index ++;
    if(index > Array.from(document.getElementsByClassName('songItem')).length){
        index = 1;
    }
    music.src = `song/${index}.m4a`;
    // poster_master_play.src = `photo/${index}.png`;
    music.play();
    control_bar.classList.remove('bi-play-fill');
    control_bar.classList.add('bi-pause-fill');


    let songTitles = songs.filter((els) =>{
        return els.id == index;
    })
    songTitles.forEach(elss =>{
        let {songName, poster} = elss;
        title.innerHTML = songName;
        poster_master_play.src = poster;
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(105, 105, 105, .1)";
    makeAllplays();
    // el.target.classList.remove('bi-play-circle-fill');
    // el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');

});





let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click',() =>{
    pop_song.scrollLeft += 330;

});

pop_song_left.addEventListener('click',() =>{
    pop_song.scrollLeft -= 330;

});


let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];

pop_art_right.addEventListener('click',() =>{
    item.scrollLeft += 330;

});

pop_art_left.addEventListener('click',() =>{
    item.scrollLeft -= 330;

});