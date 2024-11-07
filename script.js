// Function to send a message
function sendMessage() {
    const messageInput = document.getElementById("message-input");
    const message = messageInput.value.trim();
    if (message) {
        displayMessage("You", message);
        messageInput.value = "";
    }
}

// Function to display a message in the chat box
function displayMessage(sender, text) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.classList.add("chat-message");
    messageElement.textContent = `${sender}: ${text}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

// Function to add emoji to the message input field
function addEmoji(emoji) {
    const messageInput = document.getElementById("message-input");
    messageInput.value += emoji;
    messageInput.focus();
}

// Function to play YouTube video
function playYouTube() {
    const youtubeUrlInput = document.getElementById("youtube-url");
    const youtubeUrl = youtubeUrlInput.value.trim();
    if (youtubeUrl) {
        const videoId = extractYouTubeVideoId(youtubeUrl);
        if (videoId) {
            const playerDiv = document.getElementById("youtube-player");
            playerDiv.innerHTML = `<iframe width="100%" height="315" 
                                    src="https://www.youtube.com/embed/${videoId}" 
                                    frameborder="0" allow="accelerometer; autoplay; 
                                    clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen></iframe>`;
        }
    }
}

// Helper function to extract YouTube video ID from URL
function extractYouTubeVideoId(url) {
    const urlParams = new URLSearchParams(new URL(url).search);
    return urlParams.get("v");
}
