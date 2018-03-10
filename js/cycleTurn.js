document.addEventListener('keydown', (event) => {
	if(event.key == 'ArrowUp'){ cycleTurn('up');}
	else if(event.key == 'ArrowDown'){ cycleTurn('down');}
});

class Actor{
	constructor(div, index){
		this.div = div;
		this.index = index;
	}
	
	setDiv(newDiv){ this.div=newDiv; }

	setIndex(newIndex){ this.index=newIndex; }
}

var currentActor = new Actor(null, null);

function cycleTurn(direction){
	if(document.getElementById('characterContainer').children.length>0){
		if(currentActor.div == null){
			currentActor.div = document.getElementById('characterContainer').children[0];
			currentActor.index = 0;
			setTurn(currentActor.div);
		}
		else{
			switch(direction){
				case 'up': currentActor.index--;
						break;
						
				case 'down': currentActor.index++;
						break;
				
			}
			if(currentActor.index == document.getElementById('characterContainer').children.length){
				currentActor.index = 0;
			}
			else if(currentActor.index < 0){
				currentActor.index = document.getElementById('characterContainer').children.length-1;
			}
			setNotTurn(currentActor.div);
			currentActor.div = document.getElementById('characterContainer').children[currentActor.index];
			setTurn(currentActor.div);
		}
	}
	else{
		currentActor.setDiv(null);
		currentActor.setIndex(null);
	}
}

function setTurn(currentActorDiv){
	currentActorDiv.style.border="4px solid #FFCC33";
}

function setNotTurn(previousActorDiv){
	previousActorDiv.style.border="2px solid black";
}