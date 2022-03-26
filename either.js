const client = new tmi.Client({
	channels: [ 'elmarceloc','notfijxu' ]
});

client.connect();

client.on('message', (channel, tags, message, self) => {
	console.log(`${tags['display-name']}: ${message}`);

    // si el mensaje es 1
    if(message == '1'){ 
        // clickea higher
        document.querySelector('.blue-choice .option').click()
    }else if(message == '2'){
        // clickea lower
        document.querySelector('.red-choice').click()
    }else if(message == 'reset'){
        // reset game
       // document.querySelector('#game-over-btn').click()
    }

});