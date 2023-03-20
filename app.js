const music = new Audio('/project7/audio/1.mp3')
// music.play()
const songs = [
    {
        id: '1',
        songname: `on my way <br>
     <div class="subtitle">Alan Walker</div>`,
        poster: "/project7/images/img/1.jpg"
    },
    {
        id: '2',
        songname: `Alan Walker Fade <br>
     <div class="subtitle">Alan Walker</div>`,
        poster: "/project7/images/img/2.jpg"
    },
    {
        id: '3',
        songname: `Cartoon - on & on <br>
    <div class="subtitle">Daniel devi</div>`,
        poster: "/project7/images/img/3.jpg"
    },
    {
        id: '4',
        songname: `Warrio - mortals<br>
    <div class="subtitle">Mortals</div>`,
        poster: "/project7/images/img/4.jpg"
    },
    {
        id: '5',
        songname: `Ertugrul Gazi <br>
   <div class="subtitle">Ertugrul</div>`,
        poster: "/project7/images/img/5.jpg"
    },
    {
        id: '6',
        songname: `Electronic music <br>
   <div class="subtitle">Eletro</div>`,
        poster: "/project7/images/img/6.jpg"
    },
    {
        id: '7',
        songname: `Agar tum sath ho <br>
  <div class="subtitle">Arijit Singh</div>`,
        poster: "/project7/images/img/7.jpg"
    },
    {
        id: '8',
        songname: `Huna hai <br>
  <div class="subtitle">Alan Walker</div>`,
        poster: "/project7/images/img/8.jpg"
    },
    {
        id: '9',
        songname: `Duniya  <br>
 <div class="subtitle">Luka chuppi</div>`,
        poster: "/project7/images/img/9.jpg"
    },
    {
        id: '10',
        songname: `Dilbar <br>
 <div class="subtitle">Satyamev Jayte</div>`,
        poster: "/project7/images/img/10.jpg"
    },
    {
        id: '11',
        songname: `Lagdi lahore Di <br>
<div class="subtitle">Alan Walker</div>`,
        poster: "/project7/images/img/11.jpg"
    },
    {
        id: '12',
        songname: `Vaaste <br>
<div class="subtitle">Dhwani Bhanusali</div>`,
        poster: "/project7/images/img/12.jpg"
    },
    {
        id: '13',
        songname: `Lagdi lahore Di <br>
<div class="subtitle">Alan Walker</div>`,
        poster: "/project7/images/img/13.jpg"
    },
    {
        id: '14',
        songname: `Vaaste <br>
<div class="subtitle">Dhwani Bhanusali</div>`,
        poster: "/project7/images/img/14.jpg"
    },
    {
        id: '15',
        songname: `Lagdi lahore Di <br>
<div class="subtitle">Alan Walker</div>`,
        poster: "/project7/images/img/15.jpg"
    },
    {
        id: '16',
        songname: `Vaaste <br>
<div class="subtitle">Dhwani Bhanusali</div>`,
        poster: "/project7/images/img/16.jpg"
    },
    {
        id: '17',
        songname: `Lagdi lahore Di <br>
<div class="subtitle">Alan Walker</div>`,
        poster: "/project7/images/img/17.jpg"
    },
    {
        id: '18',
        songname: `Vaaste <br>
<div class="subtitle">Dhwani Bhanusali</div>`,
        poster: "/project7/images/img/18.jpg"
    },
    {
        id: '19',
        songname: `Lagdi lahore Di <br>
<div class="subtitle">Alan Walker</div>`,
        poster: "/project7/images/img/19.jpg"
    },
    {
        id: '20',
        songname: `Vaaste <br>
<div class="subtitle">Dhwani Bhanusali</div>`,
        poster: "/project7/images/img/20.jpg"
    }
]

Array.from(document.getElementsByClassName('songitem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songname;
})

let search_results=document.getElementsByClassName('search_results')[0]
songs.forEach(element=>{
    const{id,songname,poster}=element
    // console.log(songname)
    let card=document.createElement('a')
    card.classList.add("card")
    card.href="#"+id
    card.innerHTML=`
    <img src=${poster} alt="">
    <div class="content">
       ${songname}
    </div>`
    search_results.appendChild(card)
})

let input=document.getElementsByTagName('input')[0]
input.addEventListener('keyup',()=>{
    let input_value=input.value.toUpperCase()
    // console.log(input_value)
    let items=search_results.getElementsByTagName('a')
    for (let index = 0; index < items.length; index++) {
        let as=items[index].getElementsByClassName('content')[0]
        let text_value= as.textContent || as.innerHTML
        if(text_value.toUpperCase().indexOf(input_value) > -1){
            items[index].style.display="flex"
        }else{
            items[index].style.display="none"
        }
        if(input_value==0){
            items[index].style.display="none" 
        }
        items[index].addEventListener('click',()=>{
            music.play()
            input_value.innerHTML=""
            items[index].style.display="none"
        }) 
    }
})





let masterplay = document.getElementById('masterplay')
let wave = document.getElementById('wave')
masterplay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1')
        masterplay.classList.remove('fa-circle-play')
        masterplay.classList.add('fa-circle-pause')
    } else {
        music.pause();
        wave.classList.remove('active1')
        masterplay.classList.add('fa-circle-play')
        masterplay.classList.remove('fa-circle-pause')
    }
})

const makeallplays = () => {
    Array.from(document.getElementsByClassName('playlistplay')).forEach((e) => {
        e.classList.remove('fa-circle-pause')
        e.classList.add('fa-circle-play')
    })
}
const makeallbackground = () => {
    Array.from(document.getElementsByClassName('songitem')).forEach((e) => {
        e.style.background = 'rgb(105,105,105,.0)'
    })
}
let index = 0;
let poster_masterplay = document.getElementById("poster_masterplay")
let title = document.getElementById("title")
let download_music = document.getElementById("download_music")

Array.from(document.getElementsByClassName('playlistplay')).forEach((e) => {
    e.addEventListener('click', (elm) => {
        index = elm.target.id;
        //    console.log(index)
        music.src = `/project7/audio/${index}.mp3`
        //    poster_masterplay.src=`/project7/images/img/${index}.jpg`
        music.play();
        masterplay.classList.remove('fa-circle-play')
        masterplay.classList.add('fa-circle-pause')
        download_music.href=`/project7/audio/${index}.mp3`
        let songtitles = songs.filter((elm) => {
            return elm.id == index;
        })
        // console.log(songtitles)/
        songtitles.forEach((e) => {
            let { songname, poster } = e
            // console.log(songname)
            title.innerHTML = songname
            poster_masterplay.src = poster
            download_music.setAttribute('download',songname)
        })
        makeallbackground()
        Array.from(document.getElementsByClassName('songitem'))[index - 1].style.background = 'rgb(105,105,105,0.2)'
        makeallplays();
        e.classList.remove('fa-circle-play')
        e.classList.add('fa-circle-pause')
        wave.classList.add('active1')
    })
})

let currentstart = document.getElementById('currentstart')
let currentend = document.getElementById('currentend')
let seek = document.getElementById('seek')
let bar2 = document.getElementById('bar2')
let dot = document.getElementsByClassName('dot')[0]
music.addEventListener('timeupdate', () => {
    let curr_time = music.currentTime
    let mus_dure = music.duration
    let min1 = Math.floor(mus_dure / 60)
    let sec1 = Math.floor(mus_dure % 60)
    if (sec1 < 10) {
        sec1 = `0${sec1}`
    }
    currentend.innerText = `${min1}:${sec1}`

    let min2 = Math.floor(curr_time / 60)
    let sec2 = Math.floor(curr_time % 60)
    if (sec2 < 10) {
        sec2 = `0${sec2}`
    }
    currentstart.innerText = `${min2}:${sec2}`
    let progressbar = parseInt((curr_time / mus_dure) * 100)
    seek.value = progressbar
    let seekbar = seek.value
    bar2.style.width = `${seekbar}%`
    dot.style.left = `${seekbar}%`
})
seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100
})
let vol_icon = document.getElementById('vol_icon')
let vol = document.getElementById('vol')
let vol_bar = document.getElementsByClassName('vol_bar')[0]
let vol_dot = document.getElementById('vol_dot')

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('fa-volume-high')
        vol_icon.classList.remove('fa-volume-low')
        vol_icon.classList.add('fa-volume-xmark')
        console.log("0")
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('fa-volume-high')
        vol_icon.classList.add('fa-volume-low')
        vol_icon.classList.remove('fa-volume-xmark')
        console.log("60")
    }
    if (vol.value > 50) {
        vol_icon.classList.add('fa-volume-high')
        vol_icon.classList.remove('fa-volume-low')
        vol_icon.classList.remove('fa-volume-xmark')
        console.log("110")
    }

    let vol_a = vol.value
    vol_bar.style.width = `${vol_a}%`
    vol_dot.style.left = `${vol_a}%`
    music.volume = vol_a / 100
})
let back=document.getElementById('back')
let next=document.getElementById('next')

back.addEventListener('click',()=>{
    index-=1;
    if(index<1){
        index=Array.from(document.getElementsByClassName('songitem')).length
    }
    music.src = `/project7/audio/${index}.mp3`
    //    poster_masterplay.src=`/project7/images/img/${index}.jpg`
    music.play();
    masterplay.classList.remove('fa-circle-play')
    masterplay.classList.add('fa-circle-pause')

    let songtitles = songs.filter((elm) => {
        return elm.id == index;
    })
    // console.log(songtitles)/
    songtitles.forEach((e) => {
        let { songname, poster } = e
        // console.log(songname)
        title.innerHTML = songname
        poster_masterplay.src = poster
    })
    makeallbackground()
    Array.from(document.getElementsByClassName('songitem'))[index - 1].style.background = 'rgb(105,105,105,0.2)'
    makeallplays();
    masterplay.classList.remove('fa-circle-play')
    masterplay.classList.add('fa-circle-pause')
    wave.classList.add('active1')
})
next.addEventListener('click',()=>{
    index++;
    if(index>Array.from(document.getElementsByClassName('songitem')).length){
        index=1
    }
    music.src = `/project7/audio/${index}.mp3`
    //    poster_masterplay.src=`/project7/images/img/${index}.jpg`
    music.play();
    masterplay.classList.remove('fa-circle-play')
    masterplay.classList.add('fa-circle-pause')

    let songtitles = songs.filter((elm) => {
        return elm.id == index;
    })
    // console.log(songtitles)/
    songtitles.forEach((e) => {
        let { songname, poster } = e
        // console.log(songname)
        title.innerHTML = songname
        poster_masterplay.src = poster
    })
    makeallbackground()
    Array.from(document.getElementsByClassName('songitem'))[index - 1].style.background = 'rgb(105,105,105,0.2)'
    makeallplays();
    masterplay.classList.remove('fa-circle-play')
    masterplay.classList.add('fa-circle-pause')
    wave.classList.add('active1')
})





let pop_song_left = document.getElementById("pop_song_left")
let pop_song_right = document.getElementById("pop_song_right")
let popsongs = document.getElementsByClassName("popsongs")[0];
console.log('dfghjiuytrey')
pop_song_right.addEventListener('click', () => {
    popsongs.scrollLeft += 220;
    console.log('sdfgh')
})
pop_song_left.addEventListener('click', () => {
    popsongs.scrollLeft -= 220;
    console.log('dfghjiuytrey')
})

let pop_art_left = document.getElementById("pop_art_left")
let pop_art_right = document.getElementById("pop_art_right")
let item = document.getElementsByClassName("item")[0];

pop_art_left.addEventListener('click', () => {
    item.scrollLeft += 200;
})
pop_art_right.addEventListener('click', () => {
    item.scrollLeft -= 200;
})

let suffle=document.getElementsByClassName('suffle')[0]
suffle.addEventListener('click',()=>{
    let a=suffle.innerHTML
    switch(a){
        case "next":
            suffle.classList.add("fa-repeat")
            suffle.classList.remove("fa-music")
            suffle.classList.remove("fa-shuffle")
            suffle.innerHTML="repeat"
            break;
        case "repeat":
            suffle.classList.remove("fa-repeat")
            suffle.classList.remove("fa-music")
            suffle.classList.add("fa-shuffle")
            suffle.innerHTML="random"
            break;
        case "random":
            suffle.classList.remove("fa-repeat")
            suffle.classList.add("fa-music")
            suffle.classList.remove("fa-shuffle")
            suffle.innerHTML="next"
            break;
    }
})

 

const next_music=()=>{
    if(index==songs.length){
        index=1
    }else{
        index++;
    }
    music.src = `/project7/audio/${index}.mp3`
    //    poster_masterplay.src=`/project7/images/img/${index}.jpg`
    music.play();
    masterplay.classList.remove('fa-circle-play')
    masterplay.classList.add('fa-circle-pause')
    download_music.href=`/project7/audio/${index}.mp3`
    let songtitles = songs.filter((elm) => {
        return elm.id == index;
    })
    // console.log(songtitles)/
    songtitles.forEach((e) => {
        let { songname, poster } = e
        // console.log(songname)
        title.innerHTML = songname
        poster_masterplay.src = poster
        download_music.setAttribute('download',songname)
    })
    makeallbackground()
    Array.from(document.getElementsByClassName('songitem'))[index - 1].style.background = 'rgb(105,105,105,0.2)'
    makeallplays();
    e.classList.remove('fa-circle-play')
    e.classList.add('fa-circle-pause')
    wave.classList.add('active1')
}
const repeat_music=()=>{
   index
    music.src = `/project7/audio/${index}.mp3`
    //    poster_masterplay.src=`/project7/images/img/${index}.jpg`
    music.play();
    masterplay.classList.remove('fa-circle-play')
    masterplay.classList.add('fa-circle-pause')
    download_music.href=`/project7/audio/${index}.mp3`
    let songtitles = songs.filter((elm) => {
        return elm.id == index;
    })
    // console.log(songtitles)/
    songtitles.forEach((e) => {
        let { songname, poster } = e
        // console.log(songname)
        title.innerHTML = songname
        poster_masterplay.src = poster
        download_music.setAttribute('download',songname)
    })
    makeallbackground()
    Array.from(document.getElementsByClassName('songitem'))[index - 1].style.background = 'rgb(105,105,105,0.2)'
    makeallplays();
    e.classList.remove('fa-circle-play')
    e.classList.add('fa-circle-pause')
    wave.classList.add('active1')
}

const random_music=()=>{
    if(index==songs.length){
        index=1
    }else{
        index=Math.floor((Math.random()*songs.length) +1)
    }
    music.src = `/project7/audio/${index}.mp3`
    //    poster_masterplay.src=`/project7/images/img/${index}.jpg`
    music.play();
    masterplay.classList.remove('fa-circle-play')
    masterplay.classList.add('fa-circle-pause')
    download_music.href=`/project7/audio/${index}.mp3`
    let songtitles = songs.filter((elm) => {
        return elm.id == index;
    })
    // console.log(songtitles)/
    songtitles.forEach((e) => {
        let { songname, poster } = e
        // console.log(songname)
        title.innerHTML = songname
        poster_masterplay.src = poster
        download_music.setAttribute('download',songname)
    })
    makeallbackground()
    Array.from(document.getElementsByClassName('songitem'))[index - 1].style.background = 'rgb(105,105,105,0.2)'
    makeallplays();
    e.classList.remove('fa-circle-play')
    e.classList.add('fa-circle-pause')
    wave.classList.add('active1')
}

music.addEventListener('ended',()=>{
    let b=suffle.innerHTML
    switch(b){
        case 'repeat':
            repeat_music();
            break;
        case "random":
            random_music();
            break;
        case "next":
            next_music();
            break;
    }
})


let menu_active_button=document.getElementById('menu_active_button')
let menu_side=document.getElementsByClassName('menu_side')[0]
menu_active_button.addEventListener('click',()=>{
    menu_side.style.transform='unset'
    menu_active_button.style.opacity='0'
})

let song_side=document.getElementsByClassName('song_side')[0]

song_side.addEventListener('click',()=>{
   if(screen.width<=930){
    menu_side.style.transform='translateX(-100%)'
    menu_active_button.style.opacity='1'
   }else{
        menu_side.style.transform='unset'   
   }
})