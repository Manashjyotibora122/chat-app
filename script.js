const chatBox = document.getElementById("chat-box");

function sendMessage(){

const input =
document.getElementById("message");

const text = input.value.trim();

if(text==="") return;

chatBox.innerHTML +=
`<div class="message user">
${text}
</div>`;

input.value="";

setTimeout(()=>{

chatBox.innerHTML +=
`<div class="message bot">
Hello! I received your message.
</div>`;

chatBox.scrollTop =
chatBox.scrollHeight;

},500);

chatBox.scrollTop =
chatBox.scrollHeight;

}
