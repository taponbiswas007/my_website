document.addEventListener('DOMContentLoaded', function () {
    const chatBox = document.getElementById('chat-box');
    const chatForm = document.getElementById('chat-form');
    const messageInput = document.getElementById('message');

    function fetchMessages() {
        fetch('get_messages.php')
            .then(response => response.json())
            .then(data => {
                chatBox.innerHTML = '';
                data.forEach(msg => {
                    const messageDiv = document.createElement('div');
                    messageDiv.classList.add('message');
                    messageDiv.innerHTML = `<strong>${msg.username}</strong>: ${msg.message} <small>${msg.created_at}</small>`;
                    chatBox.appendChild(messageDiv);
                });
                chatBox.scrollTop = chatBox.scrollHeight;
            });
    }

    chatForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const message = messageInput.value;

        fetch('send_message.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `message=${message}`
        }).then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                messageInput.value = '';
                fetchMessages();
            }
        });
    });

    setInterval(fetchMessages, 1000);
    fetchMessages();
});
