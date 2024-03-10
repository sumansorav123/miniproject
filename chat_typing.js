let message = document.getElementById("messageInput"); 
let typing = document.getElementById("typing")
let btn =  document.getElementById("btn")

function showmessage(){
    if(message == ""){
        typing.style.display = "none"
    }else{
        typing.style.display = "block"
    }
}
btn.addEventListener('click', ()=>{
    if(message.value == ""){
       let h3 = document.createElement("h3");
       h3.innerHTML = "please enter your message";
       document.querySelector("#messagesList").appendChild(h3);
       
    }else{
        //send the data to server
        let li = document.createElement("li")
        li.innerText = "Message send : " + message.value
        document.getElementById("messagesList").appendChild(li)
        
        //clear input field
        message.value = ""
        typing.style.display = "none"
 
      
    }
}
)