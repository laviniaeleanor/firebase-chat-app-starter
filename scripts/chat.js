

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

ChatApp.addMessageListener(handleActiveUsers);

var userNames = [];

function handleActiveUsers (changeType,messageId, messageData) {
    var user = messageData.userName;
    var timeMessage= Date.parse(messageData.timestamp);
    var timeNow = Date.now();
    //console.log(timeMessage, timeNow);

    if (timeNow - timeMessage <= (5*60*1000)) {
        userNames.push(user);
        console.log(userNames);
        return userNames;
    }

}

console.log(userNames);

var uniqueNames = [];
