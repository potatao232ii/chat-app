const sendButton = document.getElementById('send');
const msgInput = document.getElementById('msgInput');
const messagesContainer = document.getElementById('messages');
const attachBtn = document.getElementById("attachBtn");
const fileInput = document.getElementById("fileInput");

sendButton.addEventListener('click', function(event) {
    event.preventDefault();
    const message = msgInput.value.trim();
    if (!message) return;

    const msgDiv = document.createElement('div');
    msgDiv.className = 'msg_sent';
    msgDiv.textContent = message;

    messagesContainer.appendChild(msgDiv);
    msgInput.value = '';
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
});

attachBtn.addEventListener("click", () => {
    fileInput.click();
});

fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    if (!file) return;

    const msgDiv = document.createElement('div');
    msgDiv.className = 'msg_sent';

    if (file.type.startsWith("image/")) {
        const img = document.createElement("img");
        img.src = URL.createObjectURL(file);
        img.className = "msg-image";
        msgDiv.appendChild(img);
    } else if (file.type.startsWith("video/")) {
        const video = document.createElement("video");
        video.src = URL.createObjectURL(file);
        video.className = "msg-video";
        video.controls = true;
        msgDiv.appendChild(video);
    } else {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(file);
        link.download = file.name;
        link.className = "msg-file";
        link.textContent = "📎 " + file.name;
        msgDiv.appendChild(link);
    }

    messagesContainer.appendChild(msgDiv);
    fileInput.value = '';
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
});
