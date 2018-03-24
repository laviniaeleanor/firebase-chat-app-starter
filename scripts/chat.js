
function replaceForm(){
    var form = document.getElementById("welcome");
    console.log(form);
    form.innerHTML = `<p>Bienvenus!!</p> </br> <a href= 'index.html'><p> Enter le chat room!</p></a>`;
};

function submitUsername(){
    var username = document.getElementById("username").value;
    console.log(username);
    ChatApp.createOrUpdateUser(document.getElementById("username").value, -1, function(userData) { console.log(userData)} );
    replaceForm();
}
