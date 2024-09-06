**Real-Time Chat Application**

A real-time chat application built using Node.js, Socket.io, HTML, CSS, and JavaScript. This app allows users to chat with each other and interact with a bot that provides simple predefined responses.

**Features**

Real-time communication with multiple users.
A chatbot that responds to user inputs.
Simple and clean user interface.
Message input box with a send button.
Smooth, realistic message delivery with delays.

**Technologies Used**

Node.js: Back-end server to handle real-time communication.

Socket.io: Real-time communication framework.

HTML/CSS: Front-end structure and styling.

JavaScript: Client-side interaction logic.

**Installation Steps**

Clone the repository:

bash
Copy code
git clone https://github.com/arpies12/real-time-chat-app.git
cd real-time-chat-app

Install dependencies:
bash
Copy code
npm install

Start the server:
bash
Copy code
node server.js

Open the application in your browser:
arduino
Copy code
http://localhost:3000

**Bot Interaction
**
The chatbot responds to the following keywords:


"hello": Bot will greet you back.

"bye": Bot says goodbye.

"help": Bot provides a list of commands.

"time": Bot returns the current time.

"date": Bot provides today's date.

"joke": Bot tells a random joke.

"weather": Bot provides a generic weather update.


**Frontend (Client):**

Users input messages and click "Send."

The message is sent to the server via Socket.io.

The server broadcasts the message to other connected users.

The bot responds based on predefined keywords.

**Backend (Server):**

Listens for user messages.

Handles bot responses based on message content.

Sends the response back to the user, ensuring there are no duplicate replies.

**Commands**


npm install: Installs all required dependencies.

node server.js: Starts the server on the specified port (default: 3000).

Future Improvements

Add more complex bot interactions (e.g., AI chatbot).

Implement user authentication for personalized chats.

Enhance UI with additional features like emojis and media sharing.
