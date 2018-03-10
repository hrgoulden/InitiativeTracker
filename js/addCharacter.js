var initiativeArray = [];

function addCharacter(){
	
	if ((document.getElementById("addName").value == "") &&
	(document.getElementById("addAC").value == "") &&
	(document.getElementById("addMaxHP").value == "")){
		resetAddFocus();
		return false;
	}
	
	if ((document.getElementById("addInitiative").value == "") ||
	isNaN(document.getElementById("addInitiative").value)){
		return false;
	}
	
	var newBlockDiv = document.createElement('div');
	newBlockDiv.id="characterBlock";
	
	var newCloseButton = document.createElement('button');
	newCloseButton.type="button";
	newCloseButton.id="closeButton";
	newCloseButton.onclick=function(){removeDiv(newBlockDiv)};
	newCloseButton.append("\u2716");
	newBlockDiv.appendChild(newCloseButton);
	
	var newDetailsDiv = document.createElement('div');
	newDetailsDiv.id="characterDetails";
	
		
		var newInitiativeP = document.createElement('p');
		newInitiativeP.id="initiativeP";
		newInitiativeP.append(document.getElementById("addInitiative").value + "\xa0");
		var newNameDiv = document.createElement('div');
		newNameDiv.id = "nameDiv";
		var newNameP = document.createElement('p');
		newNameP.id="nameP";
		var newName = document.createElement('input');
		newName.type="text";
		newName.id="name";
		newName.value = document.getElementById("addName").value;
		newNameP.append(newName);
		newNameDiv.appendChild(newInitiativeP);
		newNameDiv.appendChild(newNameP);
		newDetailsDiv.appendChild(newNameDiv);
	
		var newDetailP = document.createElement('p');
		
			var newAC = document.createElement('input');
			newAC.type="text";
			newAC.id="AC";
			newAC.value = document.getElementById("addAC").value;
			newDetailP.append("AC: ");
			newDetailP.append(newAC);
		
			var newMaxHP = document.createElement('input');
			newMaxHP.type="text";
			newMaxHP.id="maxHP";
			newMaxHP.value = document.getElementById("addMaxHP").value;
			newDetailP.append(" Max HP: ");
			newDetailP.append(newMaxHP);
		
			var newCurrentHP = document.createElement('input');
			newCurrentHP.type="text";
			newCurrentHP.id="currentHP";
			newCurrentHP.value = document.getElementById("addMaxHP").value;
			newDetailP.append(" Current HP: ");
			newDetailP.append(newCurrentHP);
		
			var newDamageTaken = document.createElement('input');
			newDamageTaken.type="text";
			newDamageTaken.id="damageTaken";
			newDetailP.append(" Damage Taken: ");
			newDetailP.append(newDamageTaken);
			newDamageTaken.addEventListener("keyup", function(event) {
				event.preventDefault();
				if ((event.keyCode === 13) && (!isNaN(newDamageTaken.value))){
					newCurrentHP.value = 
						newCurrentHP.value - newDamageTaken.value;
					newDamageTaken.value = "";
				}
			});
			
		newDetailsDiv.appendChild(newDetailP);
	
	newBlockDiv.appendChild(newDetailsDiv);
	
	var newNotesDiv = document.createElement('div');
		var newNotesArea = document.createElement('textarea');
		newNotesArea.rows="1";
		newNotesArea.value="NOTES";
		newNotesDiv.append(newNotesArea);
		
	newBlockDiv.appendChild(newNotesDiv);	
	
	var newCharacter = new Character(newBlockDiv, Number(document.getElementById("addInitiative").value));
	placeByInitiative(newCharacter);
	clearAddDetails();
	
	return false;
}

function placeByInitiative(newCharacter){
	var placed = false; 

	if (initiativeArray.length == 0){
		initiativeArray.push(newCharacter);
		document.getElementById('characterContainer').appendChild(newCharacter.getDiv());
		placed = true;
	}
	else {
		for (i = 0; i < initiativeArray.length; i++){
			if (newCharacter.getInitiative() > initiativeArray[i].getInitiative()){
				document.getElementById('characterContainer').insertBefore(newCharacter.getDiv(), initiativeArray[i].getDiv());
				initiativeArray.splice(i, 0, newCharacter);
				placed = true;
				break;
			}
			if (newCharacter.getInitiative() == initiativeArray[i].getInitiative()){
				newCharacter.setInitiative(newCharacter.getInitiative() - 0.1);
				document.getElementById('characterContainer').insertBefore(newCharacter.getDiv(), initiativeArray[i].getDiv().nextSibling);
				initiativeArray.splice(i, 0, newCharacter);
				placed = true;
				break;
			}
		}
		
	}
	if (!placed){
		initiativeArray.push(newCharacter);
		document.getElementById('characterContainer').appendChild(newCharacter.getDiv());
		placed = true;
	}
}

function removeDiv(characterDiv){
	initiativeArray.splice(locateDivIndex(characterDiv), 1);
	characterDiv.parentElement.removeChild(characterDiv);
}

function locateDivIndex(characterDiv){
	for (i = 0; i < initiativeArray.length; i++){
		if (initiativeArray[i].getDiv() == characterDiv){
			return i;
		}
	}
	return null;
}

function clearAddDetails(){
	document.getElementById("addName").value = "";
	document.getElementById("addAC").value = "";
	document.getElementById("addMaxHP").value = "";
	document.getElementById("addInitiative").value = "";
	resetAddFocus();
}

function resetAddFocus(){
	document.getElementById("addName").focus();
	document.getElementById("addName").select();
}