function updateTime() {
    let currentTime = new Date();

    // Get the current time components
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    // Add leading zeros to the time components if they are below 10
    hours = (hours < 10 ? '0' : '') + hours;
    minutes = (minutes < 10 ? '0' : '') + minutes;

    // Format the time as HH:MM:SS
    let formattedTime = hours + ':' + minutes;

    // Update the content of the 'current-time' element
    document.getElementById('current-time').innerHTML = formattedTime;
}

setInterval(updateTime, 1000);  

let icons = document.querySelectorAll(".icon");
let audio = new Audio('assets/Enter-&-Back.mp3');
let settings = document.querySelector("#settings");
let games = document.querySelectorAll(".game")

settings.addEventListener("mouseover", () => {
    settings.classList.add("rotate-image")
})

settings.addEventListener("mouseleave", () => {
    settings.classList.remove("rotate-image")
})

icons.forEach((icon) => {
    icon.addEventListener("mouseover", () => {
        icon.classList.add("icon-hover")
    })
    icon.addEventListener("mouseleave", () => {
        icon.classList.remove("icon-hover")
    })
    icon.addEventListener("click", () => {
        icon.classList.add("icon-hover");
        setTimeout(() => {
            icon.classList.remove("icon-hover");
        }, 500);
        setTimeout(() => {
            icon.classList.remove("rotate-image");
        }, 500);
    });
    icon.addEventListener('click', playSound);
})

function playSound() {
  audio.play();
}

const gameWrappers = document.querySelectorAll('.game-wrapper');

gameWrappers.forEach((gameWrapper) => {
    const overlay = gameWrapper.querySelector('.game-overlay');
    const gameTitle = gameWrapper.querySelector('.game-info h3').textContent;
    const game = gameWrapper.querySelector('.game');

    gameWrapper.addEventListener('mouseover', showOverlay);
    gameWrapper.addEventListener('mouseout', hideOverlay);

    function showOverlay() {
        overlay.style.display = 'block';
        gameWrapper.classList.add("icon-hover");
        game.style.filter = 'blur(2px)';
    }
    
    function hideOverlay() {
        overlay.style.display = 'none';
        gameWrapper.classList.remove("icon-hover");
        game.style.filter = 'none';
    }

    overlay.querySelector('.game-info h3').textContent = gameTitle;
});

let modal = document.getElementById('modal');
let headerImage = document.querySelector('.header img');
let closeButton = document.querySelector('.close');
let mainContainer = document.querySelector('.main-container');

headerImage.addEventListener('click', function() {
  modal.style.display = 'block';
  mainContainer.classList.add('blur');
});

closeButton.addEventListener('click', function() {
  modal.style.display = 'none';
  mainContainer.classList.remove('blur');
});

modal.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
    mainContainer.classList.remove('blur');
  }
});
