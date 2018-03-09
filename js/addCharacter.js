function addCharacter(){
	
	if ((document.getElementById("addName").value == "") &&
	(document.getElementById("addAC").value == "") &&
	(document.getElementById("addMaxHP").value == "")){
		resetAddFocus();
		return false;
	}
	
	var newBlockDiv = document.createElement('div');
	newBlockDiv.id="characterBlock";
	document.getElementById('characterContainer').appendChild(newBlockDiv);
	
	var newCloseButton = document.createElement('button');
	newCloseButton.type="button";
	newCloseButton.id="closeButton";
	newCloseButton.onclick=function(){this.parentElement.parentElement.removeChild(this.parentElement)};
	newCloseButton.append("\u2716");
	
	newBlockDiv.appendChild(newCloseButton);
	
	var newDetailsDiv = document.createElement('div');
	newDetailsDiv.id="characterDetails";
	
		var newNameP = document.createElement('p');
		var newName = document.createElement('input');
		newName.type="text";
		newName.id="name";
		newName.value = document.getElementById("addName").value;
		newNameP.append(newName);
		newDetailsDiv.appendChild(newNameP);
	
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
	
	clearAddDetails();
	
	return false;
}


function clearAddDetails(){
	document.getElementById("addName").value = "";
	document.getElementById("addAC").value = "";
	document.getElementById("addMaxHP").value = "";
	resetAddFocus();
}

function resetAddFocus(){
	document.getElementById("addName").focus();
	document.getElementById("addName").select();
}