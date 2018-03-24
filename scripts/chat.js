function replaceForm(){
    var form = document.getElementById("welcome");
    console.log(form);
    form.innerHTML = "<p>Welcome <script>return `${username}`</script>!!! </br> <a href= 'index.html'> Enter the chat room!</a>";
};

function submitUsername(){
    var username = document.getElementById("username").value;
    console.log(username);
    ChatApp.createOrUpdateUser(document.getElementById("username").value, -1, function(userData) { console.log(userData)} );
    replaceForm();
}
