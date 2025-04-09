// Comments Functionality
document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.querySelector('.comment-form');
    const commentInput = document.querySelector('.comment-input');
    const commentsContainer = document.querySelector('.comments-container');

    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (commentInput.value.trim()) {
            const comment = createCommentElement('You', commentInput.value, new Date());
            commentsContainer.prepend(comment);
            commentInput.value = '';
        }
    });

    // Load sample comments
    loadSampleComments();

    function createCommentElement(author, text, date) {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'flex mb-4';
        commentDiv.innerHTML = `
            <div class="w-8 h-8 rounded-full bg-gray-500 mr-3"></div>
            <div>
                <p class="font-medium text-sm">${author}</p>
                <p class="text-gray-400 text-xs mb-1">${date.toLocaleDateString()}</p>
                <p class="text-sm">${text}</p>
                <div class="flex items-center mt-2 text-xs text-gray-400">
                    <button class="mr-4 hover:text-white"><i class="fas fa-thumbs-up mr-1"></i> 0</button>
                    <button class="hover:text-white"><i class="fas fa-thumbs-down mr-1"></i> 0</button>
                </div>
            </div>
        `;
        return commentDiv;
    }

    function loadSampleComments() {
        const sampleComments = [
            {author: 'User1', text: 'Great video!', date: new Date(Date.now() - 3600000)},
            {author: 'User2', text: 'Thanks for sharing', date: new Date(Date.now() - 7200000)},
            {author: 'User3', text: 'Very informative', date: new Date(Date.now() - 86400000)}
        ];
        
        sampleComments.forEach(comment => {
            const commentElement = createCommentElement(comment.author, comment.text, comment.date);
            document.querySelector('.comments-container').appendChild(commentElement);
        });
    }
});
