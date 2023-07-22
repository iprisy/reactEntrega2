export function initChat(){
    console.log('Sesión de chat iniciada');
    watchChat();
}

function watchChat(){
    setInterval(()=>console.log("Chat online..."), 1000);
}

export function exitChat(){
    console.log("Sesión Terminada");
}