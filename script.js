document.addEventListener('scroll', () => {
    const video = document.getElementById('background-video');
    const scrollPosition = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollFraction = scrollPosition / scrollHeight;
    const videoDuration = video.duration;
    video.currentTime = scrollFraction * videoDuration;
});
