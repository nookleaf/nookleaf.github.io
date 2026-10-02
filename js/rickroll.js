/**
 * ============================================================================
 * RICKROLL TROLL MODULE
 * ============================================================================
 */

function enterFullscreenAndPlay(container, video) {
    if (container.requestFullscreen) {
        container.requestFullscreen();
    } else if (container.webkitRequestFullscreen) {
        container.webkitRequestFullscreen();
    } else if (container.msRequestFullscreen) {
        container.msRequestFullscreen();
    }
    video.play().catch(err => console.log("Gagal nge-troll:", err));
}

document.addEventListener('DOMContentLoaded', () => {
    const rickrollContainer = document.getElementById('rickroll-container');
    const rickrollVideo = document.getElementById('rickroll-video');

    if (!rickrollContainer || !rickrollVideo) return;

    document.querySelectorAll('.rickroll-trigger').forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            rickrollVideo.src = "https://files.catbox.moe/ww2p45.mp4";
            rickrollContainer.style.display = 'block';
            enterFullscreenAndPlay(rickrollContainer, rickrollVideo);
        });
    });

    document.querySelectorAll('.rickroll-teto11-trigger').forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            rickrollVideo.src = "https://files.catbox.moe/98ish9.mp4";
            rickrollContainer.style.display = 'block';
            enterFullscreenAndPlay(rickrollContainer, rickrollVideo);
        });
    });

    // Close rickroll when clicking the container or pressing Escape
    rickrollContainer.addEventListener('click', () => {
        rickrollVideo.pause();
        rickrollContainer.style.display = 'none';
        if (document.exitFullscreen) {
            document.exitFullscreen().catch(() => {});
        }
    });
});
