// OOBE fullscreen overlay
function playOobe(src) {
    let container = document.getElementById('oobe-container');
    let video = document.getElementById('oobe-video');
    if (!container) {
        container = document.createElement('div');
        container.id = 'oobe-container';
        video = document.createElement('video');
        video.id = 'oobe-video';
        video.loop = true;
        video.preload = 'auto';
        container.appendChild(video);
        container.addEventListener('click', () => {
            video.pause();
            container.style.display = 'none';
            if (document.exitFullscreen) document.exitFullscreen().catch(() => {});
        });
        document.body.appendChild(container);
    }
    video.src = src;
    container.style.display = 'block';
    if (container.requestFullscreen) {
        container.requestFullscreen().catch(() => {});
    } else if (container.webkitRequestFullscreen) {
        container.webkitRequestFullscreen();
    }
    video.play().catch(() => {});
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.oobe-trigger').forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            playOobe('https://files.catbox.moe/ww2p45.mp4');
        });
    });
    document.querySelectorAll('.oobe-teto11-trigger').forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            playOobe('https://files.catbox.moe/98ish9.mp4');
        });
    });
});
