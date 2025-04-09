// Video Player Controls
document.addEventListener('DOMContentLoaded', () => {
    const video = document.createElement('video');
    video.src = 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4';
    video.controls = true;
    video.className = 'w-full h-full';
    document.querySelector('.video-container').appendChild(video);

    // Custom controls implementation would go here
});
