document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('background-video');

    // 動画が完全にロードされた後に実行
    video.addEventListener('loadedmetadata', () => {
        const videoDuration = video.duration; // 動画の長さを取得

        document.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY; // 現在のスクロール位置
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight; // スクロール可能な全体の高さ
            const scrollFraction = scrollPosition / scrollHeight; // スクロール量を割合で計算

            // 動画の現在時間を更新
            const videoCurrentTime = scrollFraction * videoDuration;
            video.currentTime = videoCurrentTime;
        });
    });
});
