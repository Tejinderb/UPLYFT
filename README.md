# Chatbot Web Application

## Overview
This is a simple web-based chatbot application built with HTML, CSS, and JavaScript. It features a login screen and a chat interface where users can send messages and receive simulated bot responses.

## Features
- **Login Screen:** Users must enter a username and password to access the chatbot.
- **Chat Interface:** Users can send messages, which are displayed alongside timestamps.
- **Bot Responses:** The chatbot provides simulated responses to user messages.
- **Reset Chat:** Users can clear the chat history with the Reset button.

## Structure
The project consists of the following files:
- `index.html`: Defines the structure of the application, including the login and chat components.
- `index.css`: Contains the styling for the application (not provided in this snippet).
- `index.js`: Implements the functionality, including login handling, message sending, and bot responses.

## Getting Started

### Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Edge).

### Running the Application
1. Clone or download this repository.
2. Ensure all required files (`index.html`, `index.css`, and `index.js`) are in the same directory.
3. Open `index.html` in your browser.

### Usage
1. **Login**
   - Enter a username and password.
   - Click the "Login" button to proceed to the chat interface.

2. **Chat**
   - Type a message in the input box.
   - Click the "Send" button to send the message.
   - View bot responses, which are simulated based on user input.

3. **Reset Chat**
   - Click the "Reset" button to clear the chat history.

## Code Highlights

### Login Function
```javascript
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
```
Handles the login functionality by validating user input and transitioning to the chat interface.

### Sending Messages
```javascript
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
        botMessage.innerHTML = `<p>Bot response to \"${message}\"</p><div class="timestamp">${botTimestamp}</div>`;
        document.getElementById("chat-messages").appendChild(botMessage);
      }, 1000);
    }
}
```
Appends user messages and simulated bot responses to the chat history.

### Resetting the Chat
```javascript
function resetChat() {
    document.getElementById('chat-messages').innerHTML = '';
}
```
Clears the chat message history.

## Future Enhancements
- **Authentication:** Integrate a backend service for secure user login.
- **AI Responses:** Replace the simulated bot responses with a real AI chatbot API (e.g., OpenAI or Dialogflow).
- **Styling Improvements:** Enhance the UI for a better user experience.

## License
This project is open-source and free to use under the [MIT License](LICENSE).

---

Feel free to contribute to this project by submitting issues or pull requests!

