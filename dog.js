function Dog(){
	this.stomach = [];
};

function Dog(name){
	this.name = name;
}

Dog.prototyp.eat = function(cat){
	this.stomach.push(cat);
};
function run(){
	console.log('the dog is running');
}

//this is commit A
//this is commit B