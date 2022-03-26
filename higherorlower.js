const client = new tmi.Client({
	channels: [ 'elmarceloc','notfijxu' ]
});

client.connect();


let higher = 0
let lower = 0


client.on('message', (channel, tags, message, self) => {
	console.log(`${tags['display-name']}: ${message}`);

    // si el mensaje es 1
    if(message == '1'){ 
        // clickea higher
        higher +=1
        changeBar()
        
    }else if(message == '2'){
        // clickea lower
        lower +=1
        changeBar()
        //document.querySelector('.term-actions__button--lower').click()
    }else if(message == 'reset'){
        // reset game
        document.querySelector('#game-over-btn').click()
        users = []
    }

});

setInterval(function() {
    if (higher > lower){
        document.querySelector('.term-actions__button--higher').click()
    }else{
        document.querySelector('.term-actions__button--lower').click()
    }
    setTimeout(function() {
        
        higher = 1  
        lower = 1
        
        changeBar()
    },2000)
}, 25 * 1000)

function changeBar(){
    const higherpercent = ((higher / (higher + lower)) * 100)  + "%"
    document.querySelector('#higherfill').style.width = higherpercent

    //document.querySelector('#highervotes').innerHTML = higher + " votos"
    //document.querySelector('#lowervotes').innerHTML = "votos " + lower
}

document.querySelector("#root").insertAdjacentHTML( 'beforeend',   
`

<div id="votebar">
<div id="higherfill"></div>
</div>

<span id="higher">HIGHER <span id="highervotes"></span> </span>
<span id="lower">LOWER <span id="lowervotes"></span> </span>
`);