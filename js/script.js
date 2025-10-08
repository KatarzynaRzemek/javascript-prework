function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

var playerMove;
computerMove = 'kamień';
playerMove = ' papier';
printMessage('Zagrałem ' + computerMove + ' Gracz zagrał' + playerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');