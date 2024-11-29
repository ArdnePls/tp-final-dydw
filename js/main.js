let zIndexCounter = 1000;

function openOnTop(element, minimize = false) {
    zIndexCounter++;
    element.style.zIndex = zIndexCounter; 
    element.style.display = element.style.display === 'block' && minimize ? 'none' : 'block';
}

function toggleStartMenu() {
    const startMenu = document.getElementById('startMenu');
    openOnTop(startMenu, true);
}

function openWindow(title, minimize = false) {
    const window = document.getElementById(title);
    const taskButton = document.getElementById(title + 'TaskButton');
    if(taskButton && (taskButton.style.display === '' || taskButton.style.display === 'none')) {
    openOnTop(taskButton);
    }
    openOnTop(window, minimize)
}

function closeWindow(element) {
    const window = document.getElementById(element);
    const taskButton = document.getElementById(element + 'TaskButton');
    window.style.display = 'none';
    taskButton.style.display = 'none';
}

function toggleMusicPlayer() {
    const musicPlayer = document.getElementById('musicPlayer');
    openWindow('musicPlayer')
}

function isSmallScreen() {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

// Esto permite que si es mobile o pantalla pequeña, en lugar de doble click sea solo click
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('[ondblclick]');
    elements.forEach(function(element) {
        const dblClickHandler = element.ondblclick;
        if (isSmallScreen()) {
        element.onclick = dblClickHandler;
        element.ondblclick = null;
        }
    });
    });

// Para el reloj en la taskbar, actualiza cada un segundo para mantener la hora
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const clockElement = document.getElementById('clock');
    clockElement.textContent = `${hours}:${minutes}`;
}

setInterval(updateClock, 1000);
updateClock();