const images = [
    "https://c4.wallpaperflare.com/wallpaper/348/390/445/cristiano-ronaldo-kiev-ukraine-uefa-wallpaper-preview.jpg",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkltgo9ssPZfb7MMO8cDdQVxpDB40Mpth_VQ&s",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxCIeTWUKvJgix-mEp_flOy60fM7pGUHkNgg&s"
];

let i = 0;
setInterval(function () {
    i++;
    if (i === images.length) {
        i = 0;
    }

    document.getElementById("slide").src = images[i];
}, 3000);
