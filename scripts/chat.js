

function submitUsername(){
    var username = document.getElementById("username").value;
    console.log(username);
    ChatApp.createOrUpdateUser(username, -1, function(userData) { console.log(userData)} );
}

function submitMessage(){
    var username = document.getElementById("username").value;
    var message = document.getElementById("messageBox").value;
    ChatApp.newMessage(username, message);
    console.log(username, message);
}

ChatApp.addMessageListener(handleMessage);

function handleMessage (changeType, messageId, messageData) {
    var username = document.getElementById("username").value;
    var timestamp = `${messageData.timestamp.getHours()}:${messageData.timestamp.getMinutes()}, ${messageData.timestamp.getDate()}.${messageData.timestamp.getMonth()}.${messageData.timestamp.getYear()}. `;
    function callbackUserDatabase(userData) {
        return userData.color;
        console.log(userData);
    };
        var userColor = ChatApp.getUser(username, callbackUserDatabase(username));
        console.log(userColor);
    document.getElementById("dbMessages").innerHTML += `<p class="messageSpace" style = "color: ${userColor}">${timestamp}<br><strong>${messageData.userName}</strong> : ${messageData.text}</p><br>`;

}


ChatApp.addMessageListener(handleActiveUsers);

function handleActiveUsers (changeType,messageId, messageData) {
    var user = messageData.userName;
    var timeMessage= Date.parse(messageData.timestamp);
    var timeNow = Date.now();
    //console.log(timeMessage, timeNow);

    if (timeNow - timeMessage <= (5*60*1000)) {
        var activeUsersSpace = document.getElementById("activeUsers");
        activeUsersSpace.innerHTML += `<p><strong>${user}</strong>\n</p>`;
    }
}
