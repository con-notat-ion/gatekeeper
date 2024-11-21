document.addEventListener('scroll', () => {
    const video = document.getElementById('background-video');
    const scrollPosition = window.scrollY; // 縦スクロール位置
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight; // 全体のスクロール可能な高さ
    const scrollFraction = scrollPosition / scrollHeight; // スクロール位置を割合で計算

    // 動画の長さ（秒）に応じたフレーム計算
    const videoDuration = video.duration; // 動画の全体時間（秒）
    const videoCurrentTime = scrollFraction * videoDuration;

    video.currentTime = videoCurrentTime; // 動画の再生位置を更新
});
