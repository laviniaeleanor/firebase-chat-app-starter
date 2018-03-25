

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
    //var timestamp = `${messageData.timestamp.getDate()} ${messageData.timestamp.getMonth()} ${messageData.timestamp.getYear()}`;
    //console.log(timestamp);
    document.getElementById("dbMessages").innerHTML += `<p class="messageSpace">${messageData.timestamp}<br><strong>${messageData.userName}</strong> : ${messageData.text}\n</p>`;
}
