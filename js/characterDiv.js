class Character{
	
	constructor(div, initiative){
		this.setDiv(div);
		this.setInitiative(initiative);
	}
	
	getDiv(){
		return this.div;
	}
	
	setDiv(newDiv){
		this.div = newDiv;
	}
	
	getInitiative(){
		return this.initiative;
	}
	
	setInitiative(newInitiative){
		this.initiative = newInitiative;
	}
}