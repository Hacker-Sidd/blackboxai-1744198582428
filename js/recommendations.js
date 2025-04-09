// Video Recommendations
document.addEventListener('DOMContentLoaded', () => {
    const recommendations = [
        {
            title: "Recommended Video 1",
            channel: "Channel A",
            views: "1.2M views",
            time: "3 days ago",
            thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
        },
        {
            title: "Recommended Video 2", 
            channel: "Channel B",
            views: "456K views",
            time: "1 week ago",
            thumbnail: "https://i.ytimg.com/vi/9bZkp7q19f0/hqdefault.jpg"
        },
        {
            title: "Recommended Video 3",
            channel: "Channel C",
            views: "789K views",
            time: "2 weeks ago",
            thumbnail: "https://i.ytimg.com/vi/JGwWNGJdvx8/hqdefault.jpg"
        }
    ];

    const container = document.querySelector('.recommendations-container');
    
    recommendations.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.className = 'flex cursor-pointer group';
        videoElement.innerHTML = `
            <div class="w-40 h-24 flex-shrink-0 relative">
                <img src="${video.thumbnail}" alt="${video.title}" class="w-full h-full object-cover rounded-lg">
                <span class="absolute bottom-1 right-1 bg-black bg-opacity-80 px-1 text-xs rounded">4:30</span>
            </div>
            <div class="ml-2">
                <h4 class="text-sm font-medium line-clamp-2">${video.title}</h4>
                <p class="text-gray-400 text-xs mt-1">${video.channel}</p>
                <p class="text-gray-400 text-xs">${video.views} • ${video.time}</p>
            </div>
        `;
        container.appendChild(videoElement);
    });
});
