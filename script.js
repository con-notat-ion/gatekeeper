document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('background-video');
    let videoDuration = 0;

    video.addEventListener('loadedmetadata', () => {
        videoDuration = video.duration;
    });

    let scrollPosition = 0;
    let ticking = false;

    function updateVideoTime() {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollFraction = window.scrollY / scrollHeight;
        const videoCurrentTime = scrollFraction * videoDuration;
        video.currentTime = videoCurrentTime;
        ticking = false;
    }

    // スクロールイベントの処理
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateVideoTime);
            ticking = true;
        }
    });
});
