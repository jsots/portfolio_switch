// Function to update the current time
function updateTime() {
    // Create a new Date object
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

// Call updateTime function every second
setInterval(updateTime, 1000);  

let icons = document.querySelectorAll(".icon");
let audio = new Audio('assets/Enter-&-Back.mp3');
let settings = document.querySelector("#settings")

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
    icon.addEventListener('click', playSound);
})

function playSound() {
  audio.play();
}