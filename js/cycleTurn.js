//main arrowkey listener for turn cycling
document.addEventListener('keydown', (event) => {
	if(event.key == 'ArrowUp'){ cycleTurn('up');}
	else if(event.key == 'ArrowDown'){ cycleTurn('down');}
});

//actor class contains characterBlock div and their index in characterContainer
class Actor{
	constructor(div, index){
		this.div = div;
		this.index = index;
	}
	
	setDiv(newDiv){
		this.div=newDiv; 
	}

	setIndex(newIndex){
		this.index=newIndex; 
	}
}

//single actor variable used to track currently acting character
var currentActor = new Actor(null, null);

//cycles through all characters to allow user selection of current actor
function cycleTurn(direction){
	
	//prevents cycling if no characters are present
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
	//if all actors have been removed, resets currentActor attributes to null status
	else{
		currentActor.setDiv(null);
		currentActor.setIndex(null);
	}
}

//indicates acting characterBlock with a highlighted border
function setTurn(currentActorDiv){
	currentActorDiv.style.border="4px solid #FFCC33";
}

//returns a formerly acting characterBlock's border to normal
function setNotTurn(previousActorDiv){
	previousActorDiv.style.border="2px solid black";
}