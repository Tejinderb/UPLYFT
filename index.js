function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if(username && password){
        document.querySelector('.login-container').style.display = 'none';
        document.querySelector('.chat-container').style.display = 'flex';
    } else {
        alert('Please enter username and password');
    }
}

function resetChat() {
    document.getElementById('chat-messages').innerHTML = '';
}

function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value;
    if(message){
      const userMessage = document.createElement("div");
      userMessage.className = "message user";
      const timestamp = new Date().toLocaleTimeString();
      userMessage.innerHTML = `<p>${message}</p><div class="timestamp">${timestamp}</div>`;
      document.getElementById("chat-messages").appendChild(userMessage);
      input.value = "";

      // Simulate bot response
      setTimeout(() => {
        const botMessage = document.createElement("div");
        botMessage.className = "message bot";
        const botTimestamp = new Date().toLocaleTimeString();
        botMessage.innerHTML = `<p>Bot response to "${message}"</p><div class="timestamp">${botTimestamp}</div>`;
        document.getElementById("chat-messages").appendChild(botMessage);
      }, 1000);
    }
}